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

Route.route("/invoice", cors(corsOptionsDelegate)).get(
  async (req, res, next) => {
    try {
      const summary = req.query.summary === 'true';
      const projection = {};
      const filter = req.query.branchId && req.query.branchId !== 'ALL' ? { branchId: req.query.branchId } : {};
      if (req.query.projectId || req.query.purchaseIds) {
        let orConditions = [];
        if (req.query.projectId) {
            orConditions.push({ 'ReferenceName2': req.query.projectId });
            try { orConditions.push({ 'ReferenceName2': new require('mongoose').Types.ObjectId(req.query.projectId) }); } catch (e) {}
        }
        if (req.query.purchaseIds) {
            const pIds = req.query.purchaseIds.split(',');
            pIds.forEach(id => {
                orConditions.push({ 'ReferenceName2': id });
                try { orConditions.push({ 'ReferenceName2': new require('mongoose').Types.ObjectId(id) }); } catch (e) {}
            });
        }
        if (orConditions.length > 0) {
            filter['$or'] = orConditions;
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

      const result = await invoiceSchema.find(filter, projection).sort({ _id: -1 }).allowDiskUse(true).lean();
      res.json({ data: result, message: "Data successfully fetched!", status: 200 });
    } catch (err) {
      return next(err);
    }
  }
);

Route.route("/invoice-Information").get(async (req, res) => {
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
        ...(!isNaN(Number(search)) ? [{ invoiceNumber: Number(search) }] : []),
        { invoiceName: regex },
        { ReferenceName2: regex },
        { ReferenceName: regex },
        { invoiceSubject: regex },
        { subject: regex },
        { status: regex },
        { noteInfo: regex },
        { note: regex },
        { 'customerName.customerName': regex },
        { 'customerName.customerEmail': regex }
      ].filter(condition => condition !== null);
    }
    if (filterField && filterValue) {
      query[`items.${filterField}`] = new RegExp(filterValue, 'i');
    }
    const itemI = await invoiceSchema.find(query).sort({ _id: -1 }).allowDiskUse(true).skip(skip).limit(Number(limit)).lean();
    const totalItem = await invoiceSchema.countDocuments(query);

    res.status(200).json({ itemI, totalItem, totalPages: Math.ceil(totalItem / Number(limit)) });
  } catch (error) {
    console.error("Error fetching itemOut-Information:", error); // Log the error for debugging
    res.status(500).json({ message: error.message });
  }
});

Route.route("/invoice-Overdue", cors(corsOptionsDelegate)).get(
  async (req, res, next) => {
    try {
      const branchId = req.query.branchId;
      const query = {};
      if (branchId) {
        if (branchId === 'HQ') {
          query.$or = [{ branchId: 'HQ' }, { branchId: { $exists: false } }, { branchId: null }];
        } else {
          query.branchId = branchId;
        }
      }
      const payments = await invoiceSchema.find(query);
      const today = new Date();
      payments.forEach(row => {
        const invoiceDueDate = new Date(row.invoiceDueDate);
        row.overdue = invoiceDueDate < today;
        row.daysPastDue = row.overdue ? Math.ceil((today - invoiceDueDate) / (1000 * 60 * 60 * 24)) : 0;
      });
      res.json(payments);
    } catch (error) {
      return next(error);
    }
  }
);

Route.route("/get-last-saved-invoice").get(async(req,res, next)=>{
  try {
    const rawBranchId = req.query.branchId;
    const branchId = Array.isArray(rawBranchId) ? rawBranchId[0] : rawBranchId;
    const query = {};
    if (branchId && branchId !== 'ALL') {
      if (branchId === 'HQ') {
        query.$or = [{ branchId: 'HQ' }, { branchId: { $exists: false } }, { branchId: null }];
      } else {
        query.branchId = branchId;
      }
    }
    const last = await invoiceSchema.findOne(query).sort({
    invoiceNumber: -1
  }).exec();
    res.json(last)
  } catch (error) {
    next(error);
  }
})
// Create invoice
Route.route("/create-invoice").post(async (req, res, next) => {
  if (!req.body.invoiceDueDate) {
    req.body.invoiceDueDate = new Date();
  }
  
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
  //await invoiceSchema
  const  {
    customerName,
    invoiceNumber,
    invoiceDate,
    invoiceDueDate,
    invoiceSubject,
    invoicePurchase,
    invoiceDefect,
    status,
    items,
    subTotal,
    ReferenceName,ReferenceName2,
    total,noteInfo,
    balanceDue,
    totalW,actionTaken,
    invoiceName,Position,
    note,Create,shipping,adjustment,adjustmentNumber,totalInvoice,terms,Ref
  } = req.body
   try {
    const branchId = req.body.branchId || req.query.branchId;
    
      const matchStage = branchId ? { branchId } : {};
      const aggResult = await invoiceSchema.aggregate([
        { $match: matchStage },
        { $group: { _id: null, maxNum: { $max: '$invoiceNumber' } } }
      ]);
      const maxNum = aggResult.length > 0 ? (aggResult[0].maxNum || 0) : 0;
      const finalNumber = (invoiceNumber && invoiceNumber > maxNum) ? invoiceNumber : maxNum + 1;
      req.body.invoiceNumber = finalNumber;
      req.body.invoiceName = 'INV-' + String(finalNumber).padStart(6, '0');
  
    
        await invoiceSchema.create({
          customerName,
          invoiceNumber: finalNumber,
          invoiceDate,
          invoiceDueDate,
          invoiceSubject,
          invoicePurchase,
          invoiceDefect,
          status,
          items,Position,
          subTotal,
          ReferenceName,ReferenceName2,
          total,noteInfo,
          balanceDue,
          totalW,actionTaken,
          invoiceName: 'INV-' + String(finalNumber).padStart(6, '0'),
          note,Create,shipping,adjustment,adjustmentNumber,totalInvoice,terms,Ref,
          branchId
        }).then((result)=>{
          res.json({ data: result, message: "Data successfully added.", status: 200 });
        }).catch((err)=>{
          return next(err);
        });
   } catch (error) {
    next(error);
   }
});

Route.route("/get-invoice/:id").get(async (req, res, next) => {
  await invoiceSchema
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

Route.route("/update-invoice/:id").put(async (req, res, next) => {
  await invoiceSchema
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

Route.route("/delete-invoice/:id").delete(async (req, res, next) => {
    const id = req.params.id;
    try {
      const invoiceFiltered = await invoiceSchema.find({_id:id});
      if (invoiceFiltered && invoiceFiltered.length > 0) {
        await Promise.all(invoiceFiltered.map(async (row) => {
          // Unconditional delete before cascade chain
          await invoiceSchema.findOneAndDelete({_id:row._id});

          if (row.ReferenceName === undefined && row.invoicePurchase === '') {
            await purchaseSchema.findOneAndDelete({ReferenceName2:row._id});
          } else if (row.Position === 'Last') {
            await purchaseSchema.findOneAndUpdate({ReferenceName2:row._id},{$set:{status: 'Estimated',ReferenceName2:'null'}});
          } else if (row.Position === 'Maintenance') {
            await maintenanceSchema.findOneAndUpdate({ReferenceName:row._id},{$set:{Converted: false,ReferenceName:''}});
          } else if (row.Position === 'Second' && row.ReferenceName2 === 'null') {
            await estimationSchema.findOneAndUpdate({ReferenceName:row._id},{$set:{status: 'Approved',ReferenceName:'null'}});
          }
        }));
        res.json({ msg: "Data successfully deleted." });
      } else {
        res.status(404).json({ msg: "Invoice not found" });
      }
    } catch (error) {
      return next(error);
    }
});

Route.route("/remove-invoice").delete(async (req, res) => {
  await invoiceSchema
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

Route.route("/recurringinvoice", cors(corsOptionsDelegate)).get(
  async (req, res, next) => {
    await recurringInvoiceSchema
      .find()
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

Route.route("/create-recurringinvoice").post(async (req, res, next) => {
  await recurringInvoiceSchema
    .create(req.body)
    .then((result) => {
      res.json({
        data: result,
        message: "Data successfully added.",
        status: 200,
      });
    })
    .catch((err) => {
      return next(err);
    });
});

Route.route("/get-recurringinvoice/:id").get(async (req, res, next) => {
  await recurringInvoiceSchema
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

Route.route("/update-recurringinvoice/:id").put(async (req, res, next) => {
  await recurringInvoiceSchema
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

Route.route("/delete-recurringinvoice/:id").delete(async (req, res) => {
  await recurringInvoiceSchema
    .findByIdAndRemove(req.params.id)
    .then(() => {
      res.json({
        msg: "Data successfully deleted.",
      });
    })
    .catch((err) => {
      return next(err);
    });
});

Route.route("/remove-recurringinvoice").delete(async (req, res) => {
  await recurringInvoiceSchema
    .findByIdAndRemove(req.params.id)
    .then(() => {
      res.json({
        msg: "Data successfully deleted.",
      });
    })
    .catch((err) => {
      return next(err);
    });
});

Route.route("/retainerinvoice", cors(corsOptionsDelegate)).get(
  async (req, res, next) => {
    await retainerInvoiceSchema
      .find()
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

Route.route("/create-retainerinvoice").post(async (req, res, next) => {
  await retainerInvoiceSchema
    .create(req.body)
    .then((result) => {
      res.json({
        data: result,
        message: "Data successfully added.",
        status: 200,
      });
    })
    .catch((err) => {
      return next(err);
    });
});

Route.route("/get-retainerinvoice/:id").get(async (req, res, next) => {
  await retainerInvoiceSchema
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

Route.route("/update-retainerinvoice/:id").put(async (req, res, next) => {
  await retainerInvoiceSchema
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

Route.route("/delete-retainerinvoice/:id").delete(async (req, res) => {
  await retainerInvoiceSchema
    .findByIdAndRemove(req.params.id)
    .then(() => {
      res.json({
        msg: "Data successfully Deleted.",
      });
    })
    .catch((err) => {
      return next(err);
    });
});

Route.route("/remove-retainerinvoice").delete(async (req, res) => {
  await retainerInvoiceSchema
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

module.exports = Route;
