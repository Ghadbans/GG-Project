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

    // Auto-repair payroll records where payment is null or status is Partially-Paid with 0 paid
    try {
      const payRollColl = mongoose.connection.db.collection('payRoll');
      await payRollColl.updateMany({ amountPayUSD: null }, { $set: { amountPayUSD: 0 } });
      await payRollColl.updateMany({ amountPayFC: null }, { $set: { amountPayFC: 0 } });
      await payRollColl.updateMany(
        { 
          status: 'Partially-Paid', 
          amountPayUSD: { $lte: 0 }, 
          amountPayFC: { $lte: 0 } 
        },
        { $set: { status: 'UnPaid', amountPayUSD: 0, amountPayFC: 0 } }
      );
      console.log('Payroll background auto-repair completed.');
    } catch (e) {
      console.error('Payroll auto-repair error:', e.message);
    }

    // Auto-repair existing Cash collection notes to uppercase
    try {
      const cashColl = mongoose.connection.db.collection('cash');
      const cashDocs = await cashColl.find({ 'amount.note': { $exists: true } }).toArray();
      for (const doc of cashDocs) {
        if (Array.isArray(doc.amount)) {
          let changed = false;
          const updatedAmount = doc.amount.map(item => {
            if (item && item.note && typeof item.note === 'string') {
              const upperNote = item.note.toUpperCase();
              if (item.note !== upperNote) {
                changed = true;
                return { ...item, note: upperNote };
              }
            }
            return item;
          });
          if (changed) {
            await cashColl.updateOne({ _id: doc._id }, { $set: { amount: updatedAmount } });
          }
        }
      }
      console.log('Cash collection notes uppercase auto-repair completed.');
    } catch (e) {
      console.warn('Cash notes uppercase repair warning:', e.message);
    }

    // Auto-repair Expense collection: accountName and reason normalization
    try {
      const expenseColl = mongoose.connection.db.collection('expenseSchema');
      await expenseColl.updateMany({ accountName: /^employee$/i }, { $set: { accountName: 'Employee' } });
      await expenseColl.updateMany({ accountName: /^office$/i }, { $set: { accountName: 'Office' } });
      await expenseColl.updateMany({ accountName: /^project$/i }, { $set: { accountName: 'Project' } });
      await expenseColl.updateMany({ accountName: /^maintenance$/i }, { $set: { accountName: 'Maintenance' } });
      await expenseColl.updateMany({ accountName: /^receivables$/i }, { $set: { accountName: 'Receivables' } });
      await expenseColl.updateMany({ reason: /^office$/i }, { $set: { reason: 'Office' } });
      await expenseColl.updateMany({ reason: /^project$/i }, { $set: { reason: 'Project' } });
      await expenseColl.updateMany({ reason: /^maintenance$/i }, { $set: { reason: 'Maintenance' } });
      await expenseColl.updateMany({ reason: /^none$/i }, { $set: { reason: 'None' } });
      // Auto-repair missing amount, employeeName, and accountNameInfo
      await expenseColl.updateMany({ amount: { $exists: false } }, { $set: { amount: 0 } });
      await expenseColl.updateMany({ employeeName: { $exists: false } }, { $set: { employeeName: [] } });
      await expenseColl.updateMany({ accountNameInfo: { $exists: false } }, { $set: { accountNameInfo: {} } });
      // Auto-repair D-016520 specifically so it has amount: 0, total: 700
      await expenseColl.updateOne(
        { expenseNumber: { $in: [16520, '16520'] } },
        { $set: { amount: 0, accountName: 'Employee', total: 700 } }
      );
      console.log('Expense collection accountName & reason auto-repair completed.');
    } catch (e) {
      console.warn('Expense auto-repair warning:', e.message);
    }

    // Auto-repair Invoices: status normalization
    try {
      const invColl = mongoose.connection.db.collection('invoice');
      await invColl.updateMany({ status: /^draft$/i }, { $set: { status: 'Draft' } });
      await invColl.updateMany({ status: /^sent$/i }, { $set: { status: 'Sent' } });
      await invColl.updateMany({ status: /^decline$/i }, { $set: { status: 'Decline' } });
      await invColl.updateMany({ status: /^pending$/i }, { $set: { status: 'Pending' } });
      await invColl.updateMany({ status: /^paid$/i }, { $set: { status: 'Paid' } });
      await invColl.updateMany({ status: /^(partially-paid|partially_paid)$/i }, { $set: { status: 'Partially-Paid' } });
      await invColl.updateMany({ status: /^void$/i }, { $set: { status: 'Void' } });
      await invColl.updateMany({ status: /^free of charge$/i }, { $set: { status: 'Free of Charge' } });
      await invColl.updateMany(
        { $or: [{ status: '' }, { status: null }, { status: { $exists: false } }] },
        { $set: { status: 'Sent' } }
      );

      // Auto-repair missing items or subjects on converted invoices (such as INV-002673)
      const brokenInvoices = await invColl.find({
        $or: [
          { invoiceNumber: 2673 },
          { invoiceSubject: '' },
          { invoiceSubject: null },
          { invoiceSubject: { $exists: false } },
          { items: { $exists: false } },
          { items: null },
          { items: { $size: 0 }, ReferenceName2: { $exists: true, $ne: '' } }
        ]
      }).toArray();

      for (const inv of brokenInvoices) {
        const updateDoc = {};
        if (!inv.status || inv.status === '') {
          const isPaid = (Number(inv.balanceDue || 0) <= 0 && Number(inv.totalInvoice || 0) > 0);
          updateDoc.status = isPaid ? 'Paid' : (Number(inv.total || 0) > 0 ? 'Partially-Paid' : 'Sent');
        }
        if (inv.invoiceNumber === 2673 || !inv.invoiceSubject || inv.invoiceSubject === '') {
          updateDoc.invoiceSubject = 'CCTV & POS INSTALLATION';
        }
        if ((!inv.items || !Array.isArray(inv.items) || inv.items.length === 0) && inv.ReferenceName2) {
          try {
            const { ObjectId } = require('mongodb');
            let purchase = null;
            try {
              purchase = await mongoose.connection.db.collection('purchase').findOne({ _id: new ObjectId(inv.ReferenceName2) });
            } catch (_) {
              purchase = await mongoose.connection.db.collection('purchase').findOne({ _id: inv.ReferenceName2 });
            }
            if (purchase && Array.isArray(purchase.items) && purchase.items.length > 0) {
              updateDoc.items = purchase.items;
              if (purchase.projectName?.projectName && (!inv.invoiceSubject || inv.invoiceSubject === '')) {
                updateDoc.invoiceSubject = purchase.projectName.projectName;
              }
            }
          } catch (err) {
            console.warn('[SYS] Failed to restore items for invoice:', inv.invoiceNumber, err.message);
          }
        }
        if (!updateDoc.items && (!inv.items || !Array.isArray(inv.items))) {
          updateDoc.items = [];
        }
        if (Object.keys(updateDoc).length > 0) {
          await invColl.updateOne({ _id: inv._id }, { $set: updateDoc });
          console.log(`[SYS] Auto-repaired invoice #${inv.invoiceNumber}:`, updateDoc);
        }
      }
      console.log('Invoice status auto-repair completed.');
    } catch (e) {
      console.warn('Invoice auto-repair warning:', e.message);
    }

    // Auto-repair Items: typeItem normalization and default branchId
    try {
      const itemColl = mongoose.connection.db.collection('item');
      await itemColl.updateMany(
        { typeItem: /^goods$/i },
        { $set: { typeItem: 'Goods' } }
      );
      await itemColl.updateMany(
        { typeItem: /^services$/i },
        { $set: { typeItem: 'Services' } }
      );
      await itemColl.updateMany(
        { condition: /^new$/i },
        { $set: { condition: 'New' } }
      );
      await itemColl.updateMany(
        { condition: /^used$/i },
        { $set: { condition: 'Used' } }
      );
      await itemColl.updateMany(
        { $or: [{ branchId: null }, { branchId: '' }, { branchId: { $exists: false } }] },
        { $set: { branchId: 'HQ' } }
      );
      console.log('Item collection typeItem, condition & branchId auto-repair completed.');
    } catch (e) {
      console.warn('Item auto-repair warning:', e.message);
    }

    // Auto-repair Payments: modes, transactionType, status, excessAction normalization
    try {
      const payColl = mongoose.connection.db.collection('payment');
      await payColl.updateMany({ modes: /^cash$/i }, { $set: { modes: 'Cash' } });
      await payColl.updateMany({ modes: /^bank transfer$/i }, { $set: { modes: 'Bank Transfer' } });
      await payColl.updateMany({ modes: /^credit$/i }, { $set: { modes: 'Credit' } });
      await payColl.updateMany({ modes: /^(credit-account|credit_account)$/i }, { $set: { modes: 'Credit-Account' } });
      await payColl.updateMany({ transactionType: /^payment$/i }, { $set: { transactionType: 'Payment' } });
      await payColl.updateMany({ transactionType: /^refund$/i }, { $set: { transactionType: 'Refund' } });
      await payColl.updateMany({ status: /^cleared$/i }, { $set: { status: 'Cleared' } });
      await payColl.updateMany({ status: /^pending$/i }, { $set: { status: 'Pending' } });
      await payColl.updateMany({ status: /^voided$/i }, { $set: { status: 'Voided' } });
      await payColl.updateMany({ excessAction: /^credit$/i }, { $set: { excessAction: 'Credit' } });
      await payColl.updateMany({ excessAction: /^return$/i }, { $set: { excessAction: 'Return' } });
      console.log('Payment collection auto-repair completed.');
    } catch (e) {
      console.warn('Payment auto-repair warning:', e.message);
    }

    // Auto-repair Maintenance: status normalization
    try {
      const maintColl = mongoose.connection.db.collection('maintenance');
      await maintColl.updateMany({ status: /^open$/i }, { $set: { status: 'Open' } });
      await maintColl.updateMany({ status: /^pending$/i }, { $set: { status: 'Pending' } });
      await maintColl.updateMany({ status: /^reschedule$/i }, { $set: { status: 'Reschedule' } });
      await maintColl.updateMany({ status: /^cancel$/i }, { $set: { status: 'Cancel' } });
      await maintColl.updateMany({ status: /^(close|closed)$/i }, { $set: { status: 'Close' } });
      console.log('Maintenance status auto-repair completed.');
    } catch (e) {
      console.warn('Maintenance auto-repair warning:', e.message);
    }

    // Auto-repair Projects: status normalization
    try {
      const projColl = mongoose.connection.db.collection('projects');
      await projColl.updateMany({ status: /^pending$/i }, { $set: { status: 'Pending' } });
      await projColl.updateMany({ status: /^(on-going|ongoing)$/i }, { $set: { status: 'On-Going' } });
      await projColl.updateMany({ status: /^stopped$/i }, { $set: { status: 'Stopped' } });
      await projColl.updateMany({ status: /^completed$/i }, { $set: { status: 'Completed' } });
      console.log('Project status auto-repair completed.');
    } catch (e) {
      console.warn('Project auto-repair warning:', e.message);
    }

    // Auto-repair Purchases: status and statusInfo normalization
    try {
      const purColl = mongoose.connection.db.collection('purchase');
      await purColl.updateMany({ statusInfo: /^pending$/i }, { $set: { statusInfo: 'Pending' } });
      await purColl.updateMany({ statusInfo: /^(on-going|ongoing)$/i }, { $set: { statusInfo: 'On-Going' } });
      await purColl.updateMany({ statusInfo: /^stopped$/i }, { $set: { statusInfo: 'Stopped' } });
      await purColl.updateMany({ statusInfo: /^completed$/i }, { $set: { statusInfo: 'Completed' } });
      await purColl.updateMany({ status: /^pending$/i }, { $set: { status: 'Pending' } });
      await purColl.updateMany({ status: /^(on-going|ongoing)$/i }, { $set: { status: 'On-Going' } });
      await purColl.updateMany({ status: /^stopped$/i }, { $set: { status: 'Stopped' } });
      await purColl.updateMany({ status: /^completed$/i }, { $set: { status: 'Completed' } });
      console.log('Purchase status auto-repair completed.');
    } catch (e) {
      console.warn('Purchase auto-repair warning:', e.message);
    }

    // Auto-repair PUR-00177 missing items if stripped by previous schema bug
    try {
      const purColl = mongoose.connection.db.collection('purchase');
      const itemColl = mongoose.connection.db.collection('items');
      const pur177 = await purColl.findOne({ purchaseNumber: { $in: [177, '177'] } });
      if (pur177 && (!pur177.items || pur177.items.length === 0)) {
        const metalTube = await itemColl.findOne({ itemName: /METAL TUBE 40X40/i });
        const restoredItem = {
          idRow: '1',
          itemName: metalTube || { itemName: 'METAL TUBE 40X40' },
          itemDescription: 'SQURE TUBE 40X40 1.2MM 6M',
          itemQty: 1,
          itemCost: 10.5,
          totalCost: 10.5,
          itemBuy: 0,
          totalGenerale: 0,
          itemOut: 0
        };
        await purColl.updateOne({ _id: pur177._id }, { $set: { items: [restoredItem], purchaseAmount1: 10.5, purchaseAmount2: 0 } });
        console.log('PUR-00177 items auto-repaired successfully.');
      }
    } catch (e) {
      console.warn('PUR-00177 repair warning:', e.message);
    }

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
const attachmentRoutes = require("./routes/attachmentRoutes");


const app = express();
// Trust Cloudflare / Railway reverse proxy so req.ip and rate limiters receive real client IPs
app.set('trust proxy', 1);
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
app.use("/endpoint", attachmentRoutes);

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

app.get('/test', (req, res) => res.send('Backend is LIVE and UPDATED! [v3.6.40-invoice-whatsapp]'));
app.get('/status', (req, res) => res.json({ status: 'ok', version: '3.6.40', attachments: true, uptime: process.uptime() })); // health check

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

