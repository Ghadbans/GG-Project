const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
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

app.use(
  bodyParser.urlencoded({
    extended: true,
  }),
  bodyParser.json()
);
app.use(function (req, res, next) {
  req.io = io;
  return next();
});
// CORS
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
// error handler
app.use(function (err, req, res, next) {
  console.error(err.message);
  if (!err.statusCode) err.statusCode = 500;
  res.status(err.statusCode).send(err.message);
});

