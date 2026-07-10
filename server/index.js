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
mongoDbConnection().then(async () => {
  console.log("globalgate successfully connected.");
    const collectionsToClean = ["purchase", "purchases", "itemPurchase", "itempurchases", "PurchaseOrder", "purchaseOrders"];
    try {
      const db = mongoose.connection.db;
      for (const collName of collectionsToClean) {
        try {
          const coll = db.collection(collName);
          const indexes = await coll.indexes();
          console.log(`Checking indexes for ${collName}...`);
          for (const idx of indexes) {
            console.log(`Found index on ${collName}: ${idx.name} (unique: ${idx.unique})`);
            if (idx.unique && idx.name !== "_id_") {
              if (idx.name === "purchaseNumber_1" || idx.name === "itemPurchaseNumber_1" || idx.name === "projectName.projectName_1" || !idx.name.includes("purchaseNumber")) {
                try {
                  await coll.dropIndex(idx.name);
                  console.log(`Dropped unexpected unique index ${idx.name} from ${collName}`);
                } catch (e) {
                  console.log(`Failed to drop index ${idx.name} from ${collName}: ${e.message}`);
                }
              }
            }
          }
          
          // Force drop it just in case coll.indexes() misses it for some weird reason
          try {
            await coll.dropIndex("projectName.projectName_1");
            console.log(`Explicitly dropped projectName.projectName_1 from ${collName}`);
          } catch(e) { }
          
        } catch (err) {
          console.log(`Error processing collection ${collName}: ${err.message}`);
        }
      }
    } catch (err) {
      console.log("Error in DB cleanup:", err.message);
    }

    try {
      const db = mongoose.connection.db;
      await db.collection("itemOut").dropIndex("outNumber_1");
      await db.collection("itemouts").dropIndex("outNumber_1");
      console.log("Dropped index outNumber_1 from itemOut collection");
    } catch (err) {
      console.log("Could not drop index from itemOut:", err.message);
    }

    // Drop the broken estimateName_1 unique index from estimation
    try {
      const db = mongoose.connection.db;
      await db.collection("estimation").dropIndex("estimateName_1");
      console.log("SUCCESS: Dropped estimateName_1 index from estimation");
    } catch (err) {
      console.log("estimateName_1 drop result:", err.message);
    }
}),
  (error) => {
    console.log("Could not connect to database : " + err);
  };

const authRoutes = require('./routes/AuthRoutes');
const userRoute = require("./routes/Routes");

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
app.use("/endpoint", userRoute);
app.get('/test', (req, res) => res.send('Backend is LIVE and UPDATED!'));

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

