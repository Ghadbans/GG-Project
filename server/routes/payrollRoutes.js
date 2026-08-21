const express = require("express");
const Route = express.Router();

function branchFilter(req) {
  const { branchId } = req.query;
  return branchId && branchId !== 'ALL' ? { branchId } : {};
}
const { authenticate } = require("../Middleware/auth");
const cors = require("cors");
const multer = require("multer");
let customerSchema = require("../model/Model");
let dailyExpenseSchema = require("../model/dailyExpenseSchema");
let dailyReportSchema = require("../model/dailyReportSchema");
let employeeAttendanceShema = require("../model/employeeAttendanceSchema");
let employeeSchema = require("../model/employeeSchema");
let employeeUserSchema = require("../model/employeeUserSchema");
let invoiceSchema = require("../model/invoiceSchema");
let itemSchema = require("../model/itemSchema");
let paymentSchema = require("../model/paymentSchema");
let purchaseSchema = require("../model/purchaseSchema");
let recurringInvoiceSchema = require("../model/recurringInvoiceSchema");
let retainerInvoiceSchema = require("../model/retainerInvoiceSchema");
let companyProfileSchema = require("../model/companyProfileSchema");
let estimationSchema = require("../model/estimationSchema");
let projectSchema = require("../model/projectSchema");
let expenseSchema = require("../model/ExpenseSchema");
let dailyExpensesMonthlyTotalSchema = require("../model/dailyExpensesMonthlyTotalSchema");
let maintenanceSchema = require("../model/maintenanceSchema");
let dailyExpensesCategorySchema = require("../model/dailyExpensesCategorySchema");
let rateSchema = require("../model/rateSchema");
let itemCodeSchema = require("../model/itemCodeSchema");
let itemOutSchema = require("../model/itemOutSchema");
let commentSchema = require("../model/commentSchema");
let hiddenSchema = require("../model/hiddenSchema");
let imageSchema = require("../model/imageSchema");
let cashSchema = require("../model/cashSchema");
let itemPurchaseSchema = require("../model/itemPurchaseSchema");
let itemUnitSchema = require("../model/itemUnitSchema");
let itemReturnSchema = require("../model/itemReturnSchema");
let payRollSchema = require("../model/payRollSchema");
let paymentRateSchema = require("../model/paymentRateSchema");
let grantAccessSchema = require("../model/grantAccessSchema");
let messageSchema = require("../model/messageSchema");
let notificationSchema = require("../model/notificationSchema");
let purchaseOrderSchema = require("../model/purchaseOrderSchema");
let planingSchema = require("../model/planingSchema");
let posSchema = require("../model/posSchema");
let departmentSchema = require("../model/departmentSchema");
let SupplierSchema = require("../model/suppliersSchema");
let RateReturnSchema = require("../model/rateReturnSchema");

const { object } = require("joi");
const { default: mongoose } = require("mongoose");

// const nodemailer = require('nodemailer');
// const crypto = require('crypto');
// const bcrypt = require('bcrypt');
// const employeeUserSchema = require('path/to/employeeUserSchema'); // Replace with your user schema
// const transporter = nodemailer.createTransport(/* Your email configuration */); // Setup your transporter


// CORS OPTIONS
var whitelist = ["http://localhost:8080", "http://localhost:4000"];
var corsOptionsDelegate = function (req, callback) {
  var corsOptions;
  if (whitelist.indexOf(req.header("Origin")) !== -1) {
    corsOptions = {
      origin: "*",
      methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    };
  } else {
    corsOptions = { origin: false }; // disable CORS for this request
  }
  callback(null, corsOptions);
};



// --- DELETE BRANCH ---

Route.route("/payRoll", cors(corsOptionsDelegate)).get(
  async (req, res, next) => {
    await payRollSchema
      .find(req.query.branchId && req.query.branchId !== 'ALL' ? { branchId: req.query.branchId } : {})
      .then((result) => {
        res.json({
          data: result,
          message: "Data successfully fetched!",
          status: 200,
        });
      })
      .catch((err) => {
        return next(err);
      });
  }
);

Route.route("/get-last-saved-payRoll").get(async(req,res, next)=>{
  try {
    const rawBranchId = req.query.branchId;
    const branchId = Array.isArray(rawBranchId) ? rawBranchId[0] : rawBranchId;
    const query = branchId && branchId !== 'ALL' ? { branchId } : {};
    const last = await payRollSchema.findOne(query).sort({
    payNumber: -1
  }).exec();
    res.json(last)
  } catch (error) {
    next(error);
  }
})
// Create payRoll
Route.route("/create-payRoll").post(async (req, res, next) => {

  try {
    const branchId = req.body.branchId;
    const existing = await payRollSchema.findOne({
      'employeeName.name': req.body.employeeName.name,
       month: req.body.month
    })
    if (existing) {
      return res.status(401).json({ message: 'ALREADY BEEN CREATED' });
    }else{
      await payRollSchema
      .create(req.body)
      .then((result) => {
        res.json({
          data: result,
          message: "Data successfully added.",
          status: 200,
        });
      })
    }
  } catch (error) {
    next(error);
  }
});

Route.route("/get-payRoll/:id").get(async (req, res, next) => {
  await payRollSchema
    .findById(req.params.id, req.body)
    .then((result) => {
      res.json({
        data: result,
        message: "Data successfully retrieved.",
        status: 200,
      });
    })
    .catch((err) => {
      return next(err);
    });
});

Route.route("/update-payRoll/:id").put(async (req, res, next) => {
  await payRollSchema
    .findByIdAndUpdate(req.params.id, {
      $set: req.body,
    })
    .then((result) => {
      res.json({
        data: result,
        msg: "Data successfully updated.",
      });
    })
    .catch((err) => {
      return next(err);
    });
});

Route.route("/delete-payRoll/:id").delete(async (req, res) => {
  await payRollSchema
    .findByIdAndRemove(req.params.id)
    .then(() => {
      res.json({
        msg: "Data successfully updated.",
      });
    })
    .catch((err) => {
      return next(err);
    });
});

Route.route("/remove-payRoll").delete(async (req, res) => {
  await payRollSchema
    .findByIdAndRemove(req.params.id)
    .then(() => {
      res.json({
        msg: "Data successfully updated.",
      });
    })
    .catch((err) => {
      return next(err);
    });
});

Route.route("/payRoll-Information").get(async (req, res) => {
  try {
    const { page = 1, limit = 100, search = '' } = req.query;
    const skip = (Number(page) - 1) * Number(limit);
    const query = branchFilter(req);
    if (search) {
      const escapedSearch = search.trim().replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      const regex = new RegExp(escapedSearch, 'i');
      const isNum = !isNaN(Number(search)) && search.trim() !== '';
      query.$or = [
        { employeeName: regex },
        { 'employeeName.name': regex },
        { status: regex },
        { words: regex }
      ];
      if (isNum) {
          query.$or.push(...(!isNaN(Number(search)) ? [{ payNumber: Number(search) }] : []));
          query.$or.push(...(!isNaN(Number(search)) ? [{ daysW: Number(search) }] : []));
          query.$or.push(...(!isNaN(Number(search)) ? [{ totalPaidDollars: Number(search) }] : []));
          query.$or.push(...(!isNaN(Number(search)) ? [{ totalNet: Number(search) }] : []));
      }
    }
    const itemI = await payRollSchema.find(query).sort({ _id: -1 }).skip(skip).limit(Number(limit));
    const totalItem = await payRollSchema.countDocuments(query);
    res.status(200).json({ itemI, totalItem, totalPages: Math.ceil(totalItem / Number(limit)) });
  } catch (error) { res.status(500).json({ message: error.message }); }
});

module.exports = Route;
