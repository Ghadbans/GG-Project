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

Route.route("/maintenance", cors(corsOptionsDelegate)).get(
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

      const result = await maintenanceSchema.find(filter, projection).sort({ _id: -1 }).allowDiskUse(true).lean();
      res.json({ data: result, message: "Data successfully fetched!", status: 200 });
    } catch (err) {
      return next(err);
    }
  }
);

Route.route("/maintenance-Information").get(async (req, res) => {
  try {
    const { page = 1, limit = 100, search = '', filterField, filterValue, branchId } = req.query;
    const skip = (Number(page) - 1) * Number(limit);

    // Build the query object dynamically based on the filters
    const query = branchFilter(req);
    if (branchId && branchId !== 'ALL') {
      if (branchId === 'HQ') {
        query.$or = [{ branchId: 'HQ' }, { branchId: { $exists: false } }, { branchId: null }];
      } else {
        query.branchId = branchId;
      }
    }
    if (search) {
      const escapedSearch = search.trim().replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      const regex = new RegExp(escapedSearch, 'i');
      query.$or = [
        ...(!isNaN(Number(search)) ? [{ serviceNumber: Number(search) }] : []),
        { serviceName: regex },
        { technicianAssign: regex },
        { itemDescriptionInfo: regex },
        { status: regex },
        { brand: regex },
        { model: regex },
        { serialNo: regex },
        { note: regex },
        { actionTaken: regex },
        { defectDescription: regex },
        { 'items.itemName': regex },
        { 'items.itemBrand': regex },
        { 'items.itemDescription': regex },
        { 'customerName.customerName': regex },
        { 'customerName.customerEmail': regex },
        { 'customerName.customerPhone': regex },
        { 'customerName.billingAddress': regex }
      ].filter(condition => condition !== null);
    }
    if (filterField && filterValue) {
      query[`items.${filterField}`] = new RegExp(filterValue, 'i');
    }
    const itemI = await maintenanceSchema.find(query).sort({ _id: -1 }).allowDiskUse(true).skip(skip).limit(Number(limit)).lean();
    const totalItem = await maintenanceSchema.countDocuments(query);

    res.status(200).json({ itemI, totalItem, totalPages: Math.ceil(totalItem / Number(limit)) });
  } catch (error) {
    console.error("Error fetching itemOut-Information:", error); // Log the error for debugging
    res.status(500).json({ message: error.message });
  }
});

Route.route("/get-last-saved-maintenance").get(async(req,res, next)=>{
  try {
    const rawBranchId = req.query.branchId;
    const branchId = Array.isArray(rawBranchId) ? rawBranchId[0] : rawBranchId;
    const query = branchId && branchId !== 'ALL' ? { branchId } : {};
    const last = await maintenanceSchema.findOne(query).sort({ serviceDate: -1 }).exec();
    res.json(last)
  } catch (error) {
    next(error);
  }
})
// Create maintenance
Route.route("/create-maintenance").post(async (req, res, next) => {
  const { customerName,serviceNumber,action,
    serviceName,serviceDate,laborQty,totalLaborFeesGenerale,
    technicianAssign,note,totalLaborFees,laborPercentage,totalDiscount,laborDiscount,
    visitDate,status,items,itemDescriptionInfo,brand,actionTaken,model,
    warranty,serialNo,defectDescription,adjustment,adjustmentNumber,
    totalInvoice,subTotal,Create,Converted,ReferenceName} = req.body;
  try {
    const branchId = req.body.branchId || req.query.branchId;
    const matchStage = branchId ? { branchId } : {};

    // Use $max aggregation â€” works on any collection size without RAM or sort limits
    const aggResult = await maintenanceSchema.aggregate([
      { $match: matchStage },
      { $group: { _id: null, maxNum: { $max: '$serviceNumber' } } }
    ]);
    const maxServiceNumber = aggResult.length > 0 ? (aggResult[0].maxNum || 0) : 0;

    // If the frontend sent the same number as the current max, auto-increment
    const finalServiceNumber = (serviceNumber && serviceNumber > maxServiceNumber)
      ? serviceNumber
      : maxServiceNumber + 1;

    // ALWAYS generate serviceName from finalServiceNumber to avoid E11000 duplicate key errors.
    // Never trust the frontend-sent serviceName (it may already exist in the DB).
    const digits = String(finalServiceNumber).padStart(6, '0');
    const finalServiceName = 'M-' + digits;

    const result = await maintenanceSchema.create({
      customerName, serviceNumber: finalServiceNumber,
      serviceName: finalServiceName, serviceDate, laborQty, totalLaborFeesGenerale, action,
      technicianAssign, note, totalLaborFees, laborPercentage, totalDiscount, laborDiscount,
      visitDate, status, items, itemDescriptionInfo, brand, actionTaken, model,
      warranty, serialNo, defectDescription, adjustment, adjustmentNumber,
      totalInvoice, subTotal, Create, Converted, ReferenceName, branchId
    });
    res.json({ data: result, message: "Data successfully added.", status: 200 });
  } catch (error) {
    next(error);
  }
});

Route.route("/get-maintenance/:id").get(async (req, res, next) => {
  await maintenanceSchema
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

Route.route("/update-maintenance/:id").put(async (req, res, next) => {
  await maintenanceSchema
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

Route.route("/delete-maintenance/:id").delete(async (req, res) => {
  await maintenanceSchema
    .findByIdAndRemove(req.params.id)
    .then(() => {
      res.json({
        msg: "Data successfully updated.",
      });
    })
    .catch((err) => {
      return next(err);
    });
    const id = req.params.id
    try {
      const deleteInvoiceId = await invoiceSchema.find({ReferenceName:id});
  if (deleteInvoiceId) {
      await Promise.all (deleteInvoiceId.map(async (row)=>{
        await invoiceSchema.findOneAndDelete({_id:row._id})
      }))
    }
    } catch (error) {
      
    }
});

Route.route("/remove-maintenance").delete(async (req, res) => {
  await maintenanceSchema
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

Route.route("/get-maintenance-related-info/:id").get(async (req, res, next) => {
  try {
    const id = req.params.id;
    const maintenanceData = await maintenanceSchema.findById(id);
    const refName = maintenanceData ? maintenanceData.ReferenceName : null;
    const objectId = mongoose.Types.ObjectId.isValid(id) ? new mongoose.Types.ObjectId(id) : null;
    const refQuery = objectId ? { $or: [{ "reference._id": id }, { "reference._id": objectId }] } : { "reference._id": id };
    const projectQuery = objectId ? { $or: [{ "projectName._id": id }, { "projectName._id": objectId }] } : { "projectName._id": id };
    const [itemOuts, itemReturns, planings, invoices, comments, notifications] = await Promise.all([
      itemOutSchema.find(refQuery),
      itemReturnSchema.find(refQuery),
      planingSchema.find(projectQuery),
      refName ? invoiceSchema.find({ $or: [{ invoiceName: refName }, { ReferenceName: id }] }) : invoiceSchema.find({ ReferenceName: id }),
      commentSchema.find({ "CommentInfo.idInfo": id }),
      notificationSchema.find({ idInfo: id })
    ]);
    res.json({
      data: {
        itemOuts,
        itemReturns,
        planings,
        invoices,
        comments,
        notifications
      },
      message: "Data successfully retrieved.",
      status: 200,
    });
  } catch (error) {
    return next(error);
  }
});

module.exports = Route;
