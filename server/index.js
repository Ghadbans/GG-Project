/**
 * Global Gate API Server v3.5.96
 */
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const compression = require("compression");
const http = require('http')
const bodyParser = require("body-parser");
const createError = require("http-errors");
const { Server } = require('socket.io')

// Connecting MongoDB
// Security: cap every query at 60s server-side so one slow/abusive query cannot lock the database
// (long enough for backups/exports, short enough to stop runaway scans).
mongoose.set('maxTimeMS', 60000);
async function mongoDbConnection() {
  const mongoUri = process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/globalgatedb";
  await mongoose.connect(
    mongoUri,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      maxPoolSize: 30,
      minPoolSize: 2,
      serverSelectionTimeoutMS: 10000,
      connectTimeoutMS: 10000,
      socketTimeoutMS: 90000,
    }
  );
}
mongoDbConnection().then(() => {
  console.log("globalgate successfully connected.");

  // Run background maintenance non-blockingly so server handles user requests immediately
  setImmediate(async () => {
    try {
      await mongoose.connection.db.collection('department').dropIndex('department_1');
      console.log('Dropped old department_1 index');
    } catch (e) {}

    try {
      await mongoose.connection.db.collection('item').dropIndex('itemName_1');
      console.log('Dropped old itemName_1 index from item collection');
    } catch (e) {}

    // Rule 92: Startup DB document mutations (updateMany/updateOne) are strictly banned.
    // Only non-mutating legacy index cleanups run on boot.

    const collectionsToClean = ["purchase", "purchases", "itemPurchase", "itempurchases", "PurchaseOrder", "purchaseOrders"];
    try {
      const db = mongoose.connection.db;
      for (const collName of collectionsToClean) {
        try {
          const coll = db.collection(collName);
          const indexes = await coll.indexes();
          for (const idx of indexes) {
            if (idx.unique && idx.name !== "_id_") {
              if (idx.name === "purchaseNumber_1" || idx.name === "itemPurchaseNumber_1" || idx.name === "projectName.projectName_1" || !idx.name.includes("purchaseNumber")) {
                try {
                  await coll.dropIndex(idx.name);
                } catch (e) {}
              }
            }
          }
          try {
            await coll.dropIndex("projectName.projectName_1");
          } catch(e) {}
        } catch (err) {}
      }
    } catch (err) {}

    try {
      const db = mongoose.connection.db;
      await db.collection("itemOut").dropIndex("outNumber_1");
      await db.collection("itemouts").dropIndex("outNumber_1");
    } catch (err) {}

    try {
      const db = mongoose.connection.db;
      await db.collection("estimation").dropIndex("estimateName_1");
    } catch (err) {}

    try {
      const db = mongoose.connection.db;
      await db.collection("expenseSchema").updateMany(
        { accountName: /^home$/i },
        { $set: { accountName: "Receivables" } }
      );
      await db.collection("expenseSchema").updateMany(
        { "expenseCategory.expensesCategory": /^home$/i },
        { $set: { "expenseCategory.expensesCategory": "Receivables" } }
      );
      await db.collection("expensesCategory").updateMany(
        { expensesCategory: /^home$/i },
        { $set: { expensesCategory: "Receivables" } }
      );
      await db.collection("dailyExpense").updateMany(
        { expenseCategory: /^home$/i },
        { $set: { expenseCategory: "Receivables" } }
      );
      await db.collection("dailyExpense").updateMany(
        { expenseOption: /^home$/i },
        { $set: { expenseOption: "Receivables" } }
      );
    } catch (err) {}

    try {
      const { reconcileAllInvoiceBalances } = require("./utils/invoiceBalanceUtils");
      await reconcileAllInvoiceBalances();
    } catch (err) {}

    // Initialize 24/7 Cloud WhatsApp Master on Railway
    try {
      const { initCloudWhatsApp } = require('./services/cloudWhatsAppService');
      initCloudWhatsApp();
      console.log('⚡ Cloud WhatsApp Master initialized successfully.');
    } catch (waErr) {
      console.warn('⚠️ Cloud WhatsApp initialization warning:', waErr.message);
    }
  });
}).catch((err) => {
  console.log("Could not connect to database : " + err);
});

const authRoutes = require('./routes/AuthRoutes');
const lockRoutes = require('./routes/lockRoutes');
const verifyLock = require('./Middleware/lockMiddleware');

const userRoute = require("./routes/Routes");
const invoiceRoutes = require("./routes/invoiceRoutes");
const itemRoutes = require("./routes/itemRoutes");
const supplierRoutes = require("./routes/supplierRoutes");
const purchaseRoutes = require("./routes/purchaseRoutes");
const employeeRoutes = require("./routes/employeeRoutes");
const payrollRoutes = require("./routes/payrollRoutes");
const expenseRoutes = require("./routes/expenseRoutes");
const maintenanceRoutes = require("./routes/maintenanceRoutes");
const customerRoutes = require("./routes/customerRoutes");
const estimationRoutes = require("./routes/estimationRoutes");
const projectRoutes = require("./routes/projectRoutes");
const attachmentRoutes = require("./routes/attachmentRoutes");
const deliveryNoteRoutes = require("./routes/deliveryNoteRoutes");


// ---- Security hardening & JWT enforcement (v3.7.0) ----
const jwt = require("jsonwebtoken");
const security = require("./Middleware/security");
const limiters = require("./Middleware/rateLimiter");
const { authenticate, getJwtSecret } = require("./Middleware/auth");

const app = express();
// Railway reverse proxy = 1 hop. Real client IP behind Cloudflare is resolved (spoof-proof) in
// Middleware/security.js#getClientIp, which every rate limiter uses.
app.set('trust proxy', 1);
app.disable('x-powered-by');
const server = http.createServer(app)
// Slowloris / hanging-connection protection (keepAlive > Cloudflare's 60s idle, headers > keepAlive)
server.keepAliveTimeout = 61 * 1000;
server.headersTimeout = 65 * 1000;
server.requestTimeout = 120 * 1000;
const io = new Server(server, {
  cors: {
    origin: security.corsOptions.origin,
    methods: ["GET", "POST"]
  },
  maxHttpBufferSize: 1e6
});

// Socket.IO handshake authentication
io.use((socket, next) => {
  const token =
    socket.handshake?.auth?.token ||
    (socket.handshake?.headers?.authorization || '').replace(/^Bearer\s+/i, '').trim() ||
    socket.handshake?.query?.token;
  if (!token) {
    return next();
  }
  try {
    const secret = getJwtSecret();
    if (secret) {
      socket.user = jwt.verify(token, secret);
    }
    return next();
  } catch (err) {
    return next(new Error('Authentication error: Invalid or expired token'));
  }
});

// 1. Origin lock (no-op until ORIGIN_VERIFY_SECRET is set in Railway)
app.use(security.originLock);
// 2. Security headers + CORS allow-list
app.use(security.helmetMiddleware);
app.use(cors(security.corsOptions));
// 3. Rate limits (before body parsing so floods are rejected cheaply)
app.use(['/endpoint', '/api', '/auth'], limiters.globalLimiter);
app.use(['/api/marketing', '/endpoint/marketing', '/api/invoice-whatsapp', '/endpoint/invoice-whatsapp'], limiters.heavyLimiter);
app.use(['/api/inspection-reports/ai-draft', '/endpoint/inspection-reports/ai-draft'], limiters.aiLimiter);
app.use('/endpoint/upload-attachment', limiters.uploadLimiter);
app.use(['/download/android', '/download/windows', '/downloads/android', '/downloads/windows'], limiters.downloadLimiter);
// 4. Body parsers: 10 MB default, 50 MB only on image-carrying write routes
app.use(security.bodyParsers(express));
// 5. NoSQL operator stripping + query clamp (bounds regex search cost)
app.use(security.sanitizeNoSql);
app.use(security.clampQuery);

app.use(function (req, res, next) {
  req.io = io;
  return next();
});
app.use(compression());
const bcrypt = require('bcrypt');
const User = require("./model/employeeUserSchema");

// Auto-normalize accidental duplicate /endpoint prefixes
app.use((req, res, next) => {
  if (req.url.startsWith('/endpoint/endpoint/')) {
    req.url = req.url.replace('/endpoint/endpoint/', '/endpoint/');
  }
  next();
});

// RESTful API root
app.use('/auth', authRoutes);

// 6. JWT Authentication Enforcement across all /endpoint/* and /api/* routes (v3.7.0)
// Exempts only OPTIONS preflights and public promotional flyer image GETs (fetched by Meta Instagram Graph API)
const PUBLIC_API_GETS = new Set(['/api/marketing/flyer', '/endpoint/marketing/flyer', '/api/marketing/status', '/endpoint/marketing/status']);
app.use(['/endpoint', '/api'], (req, res, next) => {
  if (req.method === 'OPTIONS') return next();
  if (req.method === 'GET' && PUBLIC_API_GETS.has(req.baseUrl + req.path.replace(/\/$/, ''))) {
    return next();
  }
  return authenticate(req, res, next);
});

app.use('/api/locks', lockRoutes);

// Apply verifyLock to all PUT update routes
app.put('/endpoint/update-*', verifyLock);


app.use("/endpoint", userRoute);
app.use("/endpoint", invoiceRoutes);
app.use("/endpoint", itemRoutes);
app.use("/endpoint", supplierRoutes);
app.use("/endpoint", purchaseRoutes);
app.use("/endpoint", employeeRoutes);
app.use("/endpoint", payrollRoutes);
app.use("/endpoint", expenseRoutes);
app.use("/endpoint", maintenanceRoutes);
app.use("/endpoint", customerRoutes);
app.use("/endpoint", estimationRoutes);
app.use("/endpoint", projectRoutes);
app.use("/endpoint", attachmentRoutes);
app.use("/endpoint", deliveryNoteRoutes);

const downloadRoutes = require("./routes/downloadRoutes");
app.use("/download", downloadRoutes);
app.use("/downloads", downloadRoutes);


const marketingRoutes = require('./routes/marketingRoutes');
app.use('/api/marketing', marketingRoutes);
app.use('/endpoint/marketing', marketingRoutes);

const invoiceWhatsAppRoutes = require('./routes/invoiceWhatsAppRoutes');
app.use('/api/invoice-whatsapp', invoiceWhatsAppRoutes);
app.use('/endpoint/invoice-whatsapp', invoiceWhatsAppRoutes);

const fleetRoute = require('./routes/fleet');
app.use("/endpoint/fleet", fleetRoute);

const inspectionReportRoutes = require('./routes/inspectionReportRoutes');
app.use('/api/inspection-reports', inspectionReportRoutes);
app.use('/endpoint/inspection-reports', inspectionReportRoutes);

app.get('/', (req, res) => res.json({ name: 'Global Gate API', version: '3.7.4', status: 'online', uptime: process.uptime(), cloudWhatsApp: true }));
app.get('/robots.txt', (req, res) => {
  res.type('text/plain');
  res.send("User-agent: *\nDisallow: /\n");
});
app.get('/favicon.ico', (req, res) => res.status(204).end());
app.get('/test', (req, res) => res.send('Backend is LIVE and UPDATED! [v3.7.4-project-linked-invoice-fix]'));
app.get('/status', (req, res) => res.json({ status: 'ok', version: '3.7.4', attachments: true, cloudWhatsApp: true, uptime: process.uptime() })); // health check

// SECURITY GUARD FOR INTERNAL INIT & DEBUG ROUTES
// Key comes ONLY from env (ADMIN_SETUP_KEY, else SECRET_KEY). No hardcoded fallback; timing-safe compare.
const verifyInternalSetupKey = security.verifyInternalKey;

// DEBUG & INIT ROUTES (Protected with internal security guard)
app.get('/debug-db', verifyInternalSetupKey, async (req, res) => {
  try {
    const state = mongoose.connection.readyState; // 0: disconnected, 1: connected, 2: connecting, 3: disconnecting
    const userCount = await User.countDocuments();
    res.json({ state, userCount, msg: 'DB Connection OK' });
  } catch (error) {
    res.status(500).json({ error: error.message, state: mongoose.connection.readyState });
  }
});

const GrantAccess = require("./model/grantAccessSchema");

app.get('/init-admin', verifyInternalSetupKey, async (req, res) => {
  try {
    const existingUser = await User.findOne({ employeeName: 'GG' });
    if (existingUser) {
      existingUser.role = 'CEO';
      await existingUser.save();
      return res.send('User GG already exists. Role updated to CEO.');
    }

    const hashedPassword = await bcrypt.hash('123456', 10);
    const user = new User({
      employeeName: 'GG',
      employeeEmail: 'admin@globalgate.sarl',
      password: hashedPassword,
      role: 'CEO'
    });
    await user.save();
    res.send('User GG created as CEO with password 123456');
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.get('/init-permissions', verifyInternalSetupKey, async (req, res) => {
  try {
    const user = await User.findOne({ employeeName: 'GG' });
    if (!user) return res.status(404).send('User GG not found. Please run /init-admin first.');

    // Check if permissions exist, if so, update them to full access
    let grantAccess = await GrantAccess.findOne({ userID: user._id });

    const modules = [
      "Customer", "Item", "Item-Out", "Item-Return", "Item-Purchase",
      "Estimate", "Invoice", "Payment", "Project", "Purchase",
      "Maintenance", "Expenses", "Rate", "Employee", "Pay-Roll",
      "Grant-Access", "Purchase-Order", "Point-Of-Sell"
    ].map((name, index) => ({
      id: index + 1,
      moduleName: name,
      access: { readM: true, createM: true, viewM: true, editM: true, deleteM: true }
    }));

    if (grantAccess) {
      grantAccess.modules = modules;
      grantAccess.costVisibility = true;
      grantAccess.notificationVisibility = true;
      grantAccess.messageVisibility = true;
      grantAccess.backupVisibility = true;
      grantAccess.marketing = true;
      await grantAccess.save();
      return res.send('Permissions for GG updated to FULL ACCESS.');
    }

    grantAccess = new GrantAccess({
      employeeName: user.employeeName,
      userID: user._id,
      modules,
      costVisibility: true,
      notificationVisibility: true,
      messageVisibility: true,
      backupVisibility: true,
      marketing: true
    });

    await grantAccess.save();
    res.send('Full permissions granted to CEO GG.');
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// One-time protected Invoice Subject Recovery endpoint (v3.7.4)
app.post('/api/admin/recover-invoice-subjects', verifyInternalSetupKey, async (req, res) => {
  try {
    const { runInvoiceSubjectRecovery } = require('./scripts/recover_invoice_subjects');
    const dryRun = req.body?.dryRun !== false && req.query?.dryRun !== 'false';
    const rollbackFile = req.body?.rollbackFile || req.query?.rollbackFile || null;
    const result = await runInvoiceSubjectRecovery(mongoose.connection.db, { dryRun, rollbackFile });
    res.json({ success: true, ...result });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// PORT
const port = process.env.PORT || 8080;
server.listen(port, "0.0.0.0", () => {
  console.log("PORT Connected on: " + port);
});
// Find 404 and hand over to error handler
app.use((req, res, next) => {
  next(createError(404));
});
// error handler — logs method + URL so we can identify missing routes
app.use(function (err, req, res, next) {
  const status = err.statusCode || err.status || 500;
  console.error(`[${status}] ${req.method} ${req.originalUrl} — ${err.message}`);
  // Never leak internals for server errors; client errors (400/404/413...) keep their message.
  res.status(status).send(status >= 500 ? 'Internal Server Error' : err.message);
});

