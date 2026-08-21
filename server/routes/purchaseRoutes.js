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

Route.route("/purchase", cors(corsOptionsDelegate)).get(
  async (req, res, next) => {
    try {
      const summary = req.query.summary === 'true';
      const projection = {};
      const filter = req.query.branchId && req.query.branchId !== 'ALL' ? { branchId: req.query.branchId } : {};
      if (req.query.projectId) {
        let objectId = null;
        try { objectId = new require('mongoose').Types.ObjectId(req.query.projectId); } catch (e) {}
        if (objectId) {
          filter['projectName._id'] = { $in: [req.query.projectId, objectId] };
        } else {
          filter['projectName._id'] = req.query.projectId;
        }
      }

      if (req.query.customerId) {
        let objectId = null;
        try { objectId = new require('mongoose').Types.ObjectId(req.query.customerId); } catch (e) {}
        if (objectId) {
          filter['customerName._id'] = { $in: [req.query.customerId, objectId] };
        } else {
          filter['customerName._id'] = req.query.customerId;
        }
      }

      const result = await purchaseSchema.find(filter, projection).sort({ _id: -1 }).allowDiskUse(true);
      res.json({ data: result, message: "Data successfully fetched!", status: 200 });
    } catch (err) {
      return next(err);
    }
  }
);

Route.route("/get-last-saved-purchase").get(async(req,res, next)=>{
  try {
    const rawBranchId = req.query.branchId;
    const branchId = Array.isArray(rawBranchId) ? rawBranchId[0] : rawBranchId;
    const query = branchId && branchId !== 'ALL' ? { branchId } : {};
    const last = await purchaseSchema.findOne(query).sort({
    purchaseNumber: -1
  }).exec();
    res.json(last)
  } catch (error) {
    next(error);
  }
})
// Create purchase
Route.route("/create-purchase").post(async (req, res, next) => {
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

 // await purchaseSchema
 const { customerName,purchaseNumber,noteInfo,estimateDefect,estimateSubject,
  purchaseName,projectName,description,Position,
  purchaseDate,status,statusInfo,items,purchaseAmount1,
  purchaseAmount2,Create,ReferenceName,ReferenceName2} = req.body
 try {
  const branchId = req.body.branchId || req.query.branchId;
  const purchaseNumberInfo = await purchaseSchema.findOne(branchId ? { branchId } : {}).sort({
    purchaseNumber: -1
  }).exec();
  if ( purchaseNumberInfo && purchaseNumberInfo.purchaseNumber === purchaseNumber) {
    const sum = purchaseNumber + 1
    await purchaseSchema.create({ customerName,
      purchaseNumber: sum,
      purchaseName: "PUR-00"+ sum
      ,projectName,description,noteInfo,estimateDefect,estimateSubject,
      purchaseDate,status,statusInfo,items,purchaseAmount1,Position,
      purchaseAmount2,Create,ReferenceName,ReferenceName2,
      branchId}).then((result)=>{
      res.json({
        data: result,
        message: "Data successfully added.",
        status: 200,
      });
    }).catch((err)=>{
      return next(err)
    })
  } else {
    await purchaseSchema.create({ customerName,purchaseNumber,
      purchaseName,projectName,description,noteInfo,estimateDefect,estimateSubject,
      purchaseDate,status,statusInfo,items,purchaseAmount1,Position,
      purchaseAmount2,Create,ReferenceName,ReferenceName2,
      branchId}).then((result)=>{
      res.json({
        data: result,
        message: "Data successfully added.",
        status: 200,
      });
    }).catch((err)=>{
      return next(err)
    })
  }
 } catch (error) {
  next(error);
 }
});

Route.route("/get-purchase/:id").get(async (req, res, next) => {
  await purchaseSchema
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

Route.route("/update-purchase/:id").put(async (req, res, next) => {
  await purchaseSchema
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

Route.route("/delete-purchase/:id").delete(async (req, res, next) => {
    const id = req.params.id;
    try {
      const purchaseFiltered = await purchaseSchema.find({_id:id});
      if (purchaseFiltered && purchaseFiltered.length > 0) {
        await Promise.all(purchaseFiltered.map(async (row) => {
          // Unconditional delete before cascade chain
          await purchaseSchema.findOneAndDelete({_id:row._id});

          if (row.status === 'Draft') {
            // No cascade needed
          } else if (row.ReferenceName === undefined && row.status === 'Invoiced') {
            await invoiceSchema.findOneAndDelete({ReferenceName2:row._id});
          } else if (row.ReferenceName2 !== undefined && row.ReferenceName === undefined && row.Position === 'Last') {
            await invoiceSchema.findOneAndUpdate({ReferenceName2:row._id},{$set:{invoicePurchase: '',ReferenceName2:'null'}});
          } else if(row.ReferenceName !== undefined && row.Position === 'Second' && row.ReferenceName2 === 'null') {
            await estimationSchema.findOneAndUpdate({ReferenceName:row._id},{$set:{status: 'Approved',ReferenceName:''}});
          }
        }));
        res.json({ msg: "Data successfully deleted." });
      } else {
        res.status(404).json({ msg: "Purchase not found" });
      }
    } catch (error) {
      return next(error);
    }
});

Route.route("/remove-purchase").delete(async (req, res) => {
  await purchaseSchema
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

Route.route("/purchaseOrder", cors(corsOptionsDelegate)).get(
  async (req, res, next) => {
    await purchaseOrderSchema
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

Route.route("/purchaseOrder-Information").get(async (req, res) => {
  try {
    const { page = 1, limit = 100, search = '', filterField, filterValue, branchId } = req.query;
    const skip = (Number(page) - 1) * Number(limit);

    // Build the query object dynamically based on the filters
    const query = branchFilter(req);
    if (branchId && branchId !== 'ALL') query.branchId = branchId;
    if (search) {
      const escapedSearch = search.trim().replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      const regex = new RegExp(escapedSearch, 'i');
      query.$or = [
        ...(!isNaN(Number(search)) ? [{ outNumber: Number(search) }] : []),
        { reason: regex },
        { 'itemsQtyArray.itemName': regex },
        { 'itemsQtyArray.itemBrand': regex },
        { 'itemsQtyArray.itemDescription': regex },
        { 'reference.referenceName': regex },
      ].filter(condition => condition !== null);
    }
    if (filterField && filterValue) {
      query[`itemsQtyArray.${filterField}`] = new RegExp(filterValue, 'i');
    }
    const itemI = await purchaseOrderSchema.find(query).sort({ _id: -1 }).allowDiskUse(true).skip(skip).limit(Number(limit));
    const totalItem = await purchaseOrderSchema.countDocuments(query);

    res.status(200).json({ itemI, totalItem, totalPages: Math.ceil(totalItem / Number(limit)) });
  } catch (error) {
    console.error("Error fetching itemOut-Information:", error); // Log the error for debugging
    res.status(500).json({ message: error.message });
  }
});

Route.route("/get-last-saved-purchaseOrder").get(async(req,res, next)=>{
  try {
    const rawBranchId = req.query.branchId;
    const branchId = Array.isArray(rawBranchId) ? rawBranchId[0] : rawBranchId;
    const query = branchId && branchId !== 'ALL' ? { branchId } : {};
    const last = await purchaseOrderSchema.findOne(query).sort({
    outNumber: -1
  }).exec();
    res.json(last)
  } catch (error) {
    next(error);
  }
})
// Create purchaseOrder
Route.route("/create-purchaseOrder").post(async (req, res, next) => {
  try {
    const branchId = req.body.branchId || 'HQ';
    let newNumber = req.body.outNumber;
    
    if (newNumber !== undefined) {
      const existing = await purchaseOrderSchema.findOne({ branchId, outNumber: newNumber }).exec();
      if (existing) {
        const last = await purchaseOrderSchema.findOne({ branchId }).sort({ outNumber: -1 }).exec();
        newNumber = last && last.outNumber ? parseInt(last.outNumber) + 1 : 1;
        req.body.outNumber = newNumber;
      }
    }

    const result = await purchaseOrderSchema.create(req.body);
    res.json({ data: result, message: "Data successfully added.", status: 200 });
  } catch (err) {
    if (err.code === 11000) {
      return res.status(500).json({ message: "Duplicate number detected. Please refresh and try again.", error: err });
    }
    return next(err);
  }
});

Route.route("/get-purchaseOrder/:id").get(async (req, res, next) => {
  await purchaseOrderSchema
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

Route.route("/update-purchaseOrder/:id").put(async (req, res, next) => {
  await purchaseOrderSchema
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

Route.route("/delete-purchaseOrder/:id").delete(async (req, res) => {
  await purchaseOrderSchema
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

Route.route("/remove-purchaseOrder").delete(async (req, res) => {
  await purchaseOrderSchema
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

Route.route("/purchase-Information").get(async (req, res) => {
    try {
      const { page = 1, limit = 100, search = '', filterField, filterValue } = req.query;
      const skip = (Number(page) - 1) * Number(limit);
      const query = branchFilter(req);
      if (search) {
        const escapedSearch = search.trim().replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      const regex = new RegExp(escapedSearch, 'i');
        query.$or = [
            ...(!isNaN(Number(search)) ? [{ purchaseNumber: Number(search) }] : []),
            ...(!isNaN(Number(search)) ? [{ purchaseAmount1: Number(search) }] : []),
            { 'projectName.projectName': regex },
            { 'customerName.customerName': regex },
            { description: regex },
            { status: regex }
          ];
      }
      if (filterField && filterValue) {
        query[filterField] = new RegExp(filterValue, 'i');
      }
      const itemI = await purchaseSchema.find(query).sort({ _id: -1 }).skip(skip).limit(Number(limit));
      const totalItem = await purchaseSchema.countDocuments(query);
      res.status(200).json({ itemI, totalItem, totalPages: Math.ceil(totalItem / Number(limit)) });
    } catch (error) { res.status(500).json({ message: error.message }); }
});

module.exports = Route;
