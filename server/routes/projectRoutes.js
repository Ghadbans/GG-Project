const express = require("express");
const Route = express.Router();
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

Route.route("/projects", cors(corsOptionsDelegate)).get(
  async (req, res, next) => {
    await projectSchema
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

Route.route("/get-last-saved-project").get(async(req,res, next)=>{
  try {
    const rawBranchId = req.query.branchId;
    const branchId = Array.isArray(rawBranchId) ? rawBranchId[0] : rawBranchId;
    const query = branchId && branchId !== 'ALL' ? { branchId } : {};
    const last = await projectSchema.findOne(query).sort({ _id: -1 }).exec();
    res.json(last)
  } catch (error) {
    next(error);
  }
})
// Create projects
Route.route("/create-projects").post(async (req, res, next) => {
   const { customerName, projectName, status, phase, description, startDate, visitDate, projectNumber, Create } = req.body;
   try {
    const branchId = req.body.branchId || req.query.branchId || 'HQ';
    const matchStage = branchId ? { branchId } : {};
    const aggResult = await projectSchema.aggregate([
      { $match: matchStage },
      { $group: { _id: null, maxNum: { $max: '$projectNumber' } } }
    ]);
    const maxNum = aggResult.length > 0 ? (aggResult[0].maxNum || 0) : 0;
    const finalNumber = (projectNumber && projectNumber > maxNum) ? projectNumber : maxNum + 1;

    const result = await projectSchema.create({
      customerName, projectName, status, phase, description, startDate, visitDate, 
      projectNumber: finalNumber, Create, branchId
    });
    res.json({ data: result, message: "Data successfully added.", status: 200 });
   } catch (err) {
     return next(err);
   }
});

Route.route("/get-projects/:id").get(async (req, res, next) => {
  await projectSchema
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

Route.route("/update-projects/:id").put(async (req, res, next) => {
  const id = req.params.id
  const {projectName,status,description} = req.body
  try {
    await Promise.all([
      projectSchema.findByIdAndUpdate(req.params.id, {
        $set: req.body,
      }).then((result) => {res.json({ data: result,
          msg: "Data successfully updated.",
        });
      }).catch((err) => {
        return next(err);
      }),
      itemPurchaseSchema.updateMany({'projectName._id': id},{$set:{'projectName.name':projectName}}),
      purchaseSchema.updateMany({'projectName._id': id},{$set:{'projectName.projectName':projectName,'statusInfo':status,'description':description}}),
      itemOutSchema.updateMany({'reference._id': id},{$set:{'reference.referenceName':projectName}}),
      itemReturnSchema.updateMany({'reference._id': id},{$set:{'reference.referenceName':projectName}}),
      expenseSchema.updateMany({'accountNameInfo._id': id},{$set:{'accountNameInfo.name':projectName}}),
    ])
  } catch (error) {
    return next(error);
  }
});

Route.route("/delete-projects/:id").delete(async (req, res) => {
  await projectSchema
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

Route.route("/remove-projects").delete(async (req, res) => {
  await projectSchema
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

Route.route("/project-Information").get(async (req, res) => {
    try {
      const { page = 1, limit = 100, search = '', filterField, filterValue } = req.query;
      const skip = (Number(page) - 1) * Number(limit);
      const query = branchFilter(req);
      if (search) {
      const escapedSearch = search.trim().replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      const regex = new RegExp(escapedSearch, 'i');
      const orConditions = [
        { projectName: regex },
        { ReferenceName: regex },
        { status: regex },
        { note: regex },
        { projectDescription: regex },
        { 'customerName.customerName': regex },
        { 'customerName.customerEmail': regex }
      ];
      if (!isNaN(Number(search))) {
        orConditions.push({ projectNumber: Number(search) });
      }
      query.$or = orConditions;
    }
    if (filterField && filterValue) {
        query[filterField] = new RegExp(filterValue, 'i');
      }
      const itemI = await projectSchema.find(query).sort({ _id: -1 }).skip(skip).limit(Number(limit));
      const totalItem = await projectSchema.countDocuments(query);
      res.status(200).json({ itemI, totalItem, totalPages: Math.ceil(totalItem / Number(limit)) });
    } catch (error) { res.status(500).json({ message: error.message }); }
});

module.exports = Route;
