const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const http = require('http');
const bodyParser = require("body-parser");
const createError = require("http-errors");
const { Server } = require('socket.io');

// Reconstructed App Entry Point (March 28th Fix)

// Connecting MongoDB (Standard Local Connection)
const mongoUri = "mongodb://127.0.0.1:27017/globalgatedb";
mongoose.connect(mongoUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(async () => {
  console.log("globalgate successfully connected.");
  try {
    await mongoose.connection.db.collection('department').dropIndex('department_1');
    console.log('Dropped old department_1 index');
  } catch (e) {}
  try {
    await mongoose.connection.db.collection('purchase').dropIndex('projectName.projectName_1');
    console.log('Dropped old projectName.projectName_1 index from purchase');
  } catch (e) {}
  try {
    await mongoose.connection.db.collection('itemOut').dropIndex('outNumber_1');
    console.log('Dropped old outNumber_1 index from itemOut');
  } catch (e) {}
  try {
    await mongoose.connection.db.collection('itemoutschemas').dropIndex('branchId_1_outNumber_1');
    console.log('Dropped old branchId_1_outNumber_1 index from itemoutschemas');
  } catch (e) {}
  try {
    await mongoose.connection.db.collection('itempurchaseschemas').dropIndex('branchId_1_itemPurchaseNumber_1');
    console.log('Dropped old branchId_1_itemPurchaseNumber_1 index from itempurchaseschemas');
  } catch (e) {}
  try {
    await mongoose.connection.db.collection('estimation').dropIndex('estimateName_1');
    console.log('Dropped old estimateName_1 index from estimation');
  } catch (e) { console.log('estimateName_1 drop result:', e.message); }
}).catch((error) => {
  console.log("Could not connect to database: " + error);
});

// Import the Router logic
// This links to your restored Routes.js and AuthRoutes.js files
const authRoutes = require("./routes/AuthRoutes");
const userRoute = require("./routes/Routes");

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"]
  }
});

// Middleware setup
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
app.use(cors());

// Attach Socket.io to each request
app.use(function (req, res, next) {
  req.io = io;
  return next();
});

// Mount the Routers
app.use("/auth", authRoutes);
app.use("/endpoint", userRoute);
// Test Route
app.get('/status', (req, res) => res.send('Backend is operational!'));

// PORT Configuration
const port = 8080;
server.listen(port, "0.0.0.0", () => {
  console.log("PORT Connected on: " + port);
});

// 404 handler
app.use((req, res, next) => {
  next(createError(404));
});

// Global error handler
app.use(function (err, req, res, next) {
  console.error(err.message);
  if (!err.statusCode) err.statusCode = 500;
  res.status(err.statusCode).send(err.message);
});