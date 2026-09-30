const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const compression = require("compression");
const http = require('http')
const bodyParser = require("body-parser");
const createError = require("http-errors");
const { Server } = require('socket.io')

// Connecting MongoDB
async function mongoDbConnection() {
  const mongoUri = process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/globalgatedb";
  await mongoose.connect(
    mongoUri,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
    6000
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


const app = express();
const server = http.createServer(app)
const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"]
  }
});

app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));
app.use(function (req, res, next) {
  req.io = io;
  return next();
});
// CORS
app.use(compression());
app.use(cors());
const bcrypt = require('bcrypt');
const User = require("./model/employeeUserSchema");

// RESTful API root
app.use('/auth', authRoutes);

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


const fleetRoute = require('./routes/fleet');
app.use("/endpoint/fleet", fleetRoute);

app.get('/test', (req, res) => res.send('Backend is LIVE and UPDATED!'));
app.get('/status', (req, res) => res.json({ status: 'ok', uptime: process.uptime() })); // health check

// DEBUG & INIT ROUTES
app.get('/debug-db', async (req, res) => {
  try {
    const state = mongoose.connection.readyState; // 0: disconnected, 1: connected, 2: connecting, 3: disconnecting
    const userCount = await User.countDocuments();
    res.json({ state, userCount, msg: 'DB Connection OK' });
  } catch (error) {
    res.status(500).json({ error: error.message, state: mongoose.connection.readyState });
  }
});

const GrantAccess = require("./model/grantAccessSchema");

app.get('/init-admin', async (req, res) => {
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

app.get('/init-permissions', async (req, res) => {
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
      await grantAccess.save();
      return res.send('Permissions for GG updated to FULL ACCESS.');
    }

    grantAccess = new GrantAccess({
      employeeName: user.employeeName,
      userID: user._id,
      modules
    });

    await grantAccess.save();
    res.send('Full permissions granted to CEO GG.');
  } catch (error) {
    res.status(500).send(error.message);
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
  res.status(status).send(err.message);
});

