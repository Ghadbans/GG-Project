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

Route.route("/estimation", cors(corsOptionsDelegate)).get(
  async (req, res, next) => {
    try {
      const summary = req.query.summary === 'true';
      const projection = {};
      const filter = req.query.branchId && req.query.branchId !== 'ALL' ? { branchId: req.query.branchId } : {};
      if (req.query.customerId) {
        let objectId = null;
        try { objectId = new require('mongoose').Types.ObjectId(req.query.customerId); } catch (e) {}
        if (objectId) {
          filter['customerName._id'] = { $in: [req.query.customerId, objectId] };
        } else {
          filter['customerName._id'] = req.query.customerId;
        }
      }

      const result = await estimationSchema.find(filter, projection).sort({ _id: -1 }).allowDiskUse(true);
      res.json({ data: result, message: "Data successfully fetched!", status: 200 });
    } catch (err) {
      return next(err);
    }
  }
);

Route.route("/get-last-saved-estimation").get(async(req,res, next)=>{
  try {
    const rawBranchId = req.query.branchId;
    const branchId = Array.isArray(rawBranchId) ? rawBranchId[0] : rawBranchId;
    const query = branchId && branchId !== 'ALL' ? { branchId } : {};
    const last = await estimationSchema.findOne(query).sort({
    estimateNumber: -1
  }).exec();
    res.json(last)
  } catch (error) {
    next(error);
  }
})
// Create estimation
Route.route("/create-estimation").post(async (req, res, next) => {
  if (!req.body.customerName || !req.body.customerName.customerName || req.body.customerName.customerName.includes("Unknown Customer")) {
    if (req.body.ReferenceName2) {
      try {
        const purchaseSchema = require('../model/purchaseSchema');
        const purchase = await purchaseSchema.findById(req.body.ReferenceName2);
        if (purchase && purchase.customerName && purchase.customerName.customerName) {
          req.body.customerName = purchase.customerName;
        } else {
          req.body.customerName = { customerName: "Unknown Customer (Recovered)", billingAddress: "N/A", billingCity: "N/A" };
        }
      } catch(err) {
        req.body.customerName = { customerName: "Unknown Customer (Recovered)", billingAddress: "N/A", billingCity: "N/A" };
      }
    } else {
      req.body.customerName = { customerName: "Unknown Customer (Recovered)", billingAddress: "N/A", billingCity: "N/A" };
    }
  }

 // await estimationSchema
 const{
  customerName,
  estimateNumber,
  estimateDate,
  estimateDefect,
  estimateSubject,
  status,
  items,
  subTotal,
  total,
  totalW,
  note,
  estimateName,
  Create,balanceDue,
  terms,shipping,noteInfo,
  adjustment,adjustmentNumber,
  totalInvoice,Ref,ReferenceName
} = req.body
 try {
  const branchId = req.body.branchId || req.query.branchId;
  
      const matchStage = branchId ? { branchId } : {};
      const aggResult = await estimationSchema.aggregate([
        { $match: matchStage },
        { $group: { _id: null, maxNum: { $max: '$estimateNumber' } } }
      ]);
      const maxNum = aggResult.length > 0 ? (aggResult[0].maxNum || 0) : 0;
      const finalNumber = (estimateNumber && estimateNumber > maxNum) ? estimateNumber : maxNum + 1;
      req.body.estimateNumber = finalNumber;
      req.body.estimateName = 'QT-' + String(finalNumber).padStart(6, '0');
  
  
        await estimationSchema.create({
          branchId,
          customerName,
          estimateNumber: finalNumber,
          estimateDate,
          estimateDefect,
          estimateSubject,
          status,
          items,
          subTotal,
          total,
          totalW,
          note,
          estimateName: 'QT-' + String(finalNumber).padStart(6, '0'),
          Create,balanceDue,
          terms,shipping,noteInfo,
          adjustment,adjustmentNumber,
          totalInvoice,Ref,ReferenceName
        }).then((result)=>{
          res.json({ data: result, message: "Data successfully added.", status: 200 });
        }).catch((err)=>{
          return next(err);
        });

 } catch (error) {
  next(error);
 }
});

Route.route("/get-estimation/:id").get(async (req, res, next) => {
  await estimationSchema
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

Route.route("/update-estimation/:id").put(async (req, res, next) => {
  await estimationSchema
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

Route.route("/delete-estimation/:id").delete(async (req, res, next) => {
  await estimationSchema
    .findByIdAndRemove(req.params.id)
    .then(() => {
      res.json({
        msg: "Data successfully delete.",
      });
    })
    .catch((err) => {
      return next(err);
    });
    const id = req.params.id
    try {
      const deletePurchaseId = await purchaseSchema.find({ReferenceName:id});
      const deleteInvoiceId = await invoiceSchema.find({ReferenceName:id});
    if (deletePurchaseId) {
        await Promise.all (deletePurchaseId.map(async (row)=>{
          await purchaseSchema.findOneAndDelete({_id:row._id}),
          await  invoiceSchema.findOneAndDelete({ReferenceName2:row._id})
        }))
    } 
  if (deleteInvoiceId) {
      await Promise.all (deleteInvoiceId.map(async (row)=>{
        await invoiceSchema.findOneAndDelete({_id:row._id}),
        await  purchaseSchema.findOneAndDelete({ReferenceName2:row._id})
      }))
    }
    } catch (error) {
      
    }
});

Route.route("/remove-estimation").delete(async (req, res) => {
  await estimationSchema
    .findByIdAndRemove(req.params.id)
    .then(() => {
      res.json({
        msg: "Data successfully delete.",
      });
    })
    .catch((err) => {
      return next(err);
    });
});

Route.route("/estimation-Information").get(async (req, res) => {
  try {
    const { page = 1, limit = 100, search = '', filterField, filterValue, summary } = req.query;
    const skip = (Number(page) - 1) * Number(limit);

    const query = branchFilter(req);
    if (search) {
      const escapedSearch = search.trim().replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      const regex = new RegExp(escapedSearch, 'i');
      const orConditions = [
        { estimateName: regex },
        { ReferenceName2: regex },
        { ReferenceName: regex },
        { subject: regex },
        { status: regex },
        { noteInfo: regex },
        { note: regex },
        { 'customerName.customerName': regex },
        { 'customerName.customerEmail': regex }
      ];
      if (!isNaN(Number(search))) {
        orConditions.push({ estimateNumber: Number(search) });
      }
      query.$or = orConditions;
    }
    if (filterField && filterValue) {
      query[filterField] = new RegExp(filterValue, 'i');
    }

    const itemI = await estimationSchema.find(query).sort({ _id: -1 }).skip(skip).limit(Number(limit));
    const totalItem = await estimationSchema.countDocuments(query);

    res.status(200).json({
      itemI,
      totalItem,
      totalPages: Math.ceil(totalItem / Number(limit))
    });
  } catch (error) {
    console.error("Error fetching estimation-Information:", error);
    res.status(500).json({ message: error.message });
  }
});

module.exports = Route;
