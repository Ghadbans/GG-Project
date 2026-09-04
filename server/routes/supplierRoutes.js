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

Route.route("/Supplier", cors(corsOptionsDelegate)).get(
  async (req, res, next) => {
    await SupplierSchema
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

Route.route("/create-Supplier").post(async (req, res, next) => {
  await SupplierSchema
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

Route.route("/get-Supplier/:id").get(async (req, res, next) => {
  await SupplierSchema
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

// Helper to cascade update supplier storeName & ID to related itemPurchase and purchaseOrder records
async function cascadeSupplierUpdate(supplierId, oldSupplier, newSupplierData) {
  try {
    const newStoreName = newSupplierData.storeName || oldSupplier?.storeName;
    const newSupplierName = newSupplierData.supplierName || oldSupplier?.supplierName;
    const newPhone = newSupplierData.customerPhone1 || oldSupplier?.customerPhone1 || "";
    const oldStoreName = oldSupplier?.storeName;
    const oldSupplierName = oldSupplier?.supplierName;

    if (!newStoreName) return;

    let orConditions = [
      { manufacturerID: supplierId },
      { manufacturerID: String(supplierId) }
    ];
    try {
      if (mongoose.Types.ObjectId.isValid(supplierId)) {
        orConditions.push({ manufacturerID: new mongoose.Types.ObjectId(supplierId) });
      }
    } catch (e) {}

    const addNameConditions = (name) => {
      if (!name || !name.trim()) return;
      const raw = name.trim();
      const escaped = raw.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      orConditions.push({ manufacturer: raw });
      orConditions.push({ manufacturer: new RegExp('^' + escaped + '$', 'i') });
      orConditions.push({ manufacturer: new RegExp('^' + escaped + '(\\b|[\\s\\.\\,\\-\\_\\/])', 'i') });
      orConditions.push({ manufacturer: new RegExp(escaped, 'i') });
    };

    addNameConditions(oldStoreName);
    addNameConditions(oldSupplierName);
    addNameConditions(newStoreName);
    addNameConditions(newSupplierName);

    // Update itemPurchase documents
    const updateItemPurchase = {
      manufacturer: newStoreName,
      manufacturerID: String(supplierId)
    };
    if (newPhone) {
      updateItemPurchase.manufacturerNumber = newPhone;
    }

    await itemPurchaseSchema.updateMany(
      { $or: orConditions },
      { $set: updateItemPurchase }
    );

    // Update purchaseOrder documents
    await purchaseOrderSchema.updateMany(
      { $or: orConditions },
      { $set: { manufacturer: newStoreName, manufacturerID: String(supplierId), ...(newPhone ? { manufacturerNumber: newPhone } : {}) } }
    );

    // Update itemSchema if any item was tagged with this manufacturer name
    if (oldStoreName || oldSupplierName) {
      const itemConditions = [];
      if (oldStoreName) {
        itemConditions.push({ itemManufacturer: oldStoreName });
        itemConditions.push({ itemManufacturer: new RegExp('^' + oldStoreName.trim().replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + '$', 'i') });
      }
      if (oldSupplierName) {
        itemConditions.push({ itemManufacturer: oldSupplierName });
        itemConditions.push({ itemManufacturer: new RegExp('^' + oldSupplierName.trim().replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + '$', 'i') });
      }
      if (itemConditions.length > 0) {
        await itemSchema.updateMany(
          { $or: itemConditions },
          { $set: { itemManufacturer: newStoreName } }
        );
      }
    }
  } catch (err) {
    console.error("Error cascading supplier update:", err);
  }
}

Route.route("/sync-all-supplier-purchases").get(async (req, res, next) => {
  try {
    const allSuppliers = await SupplierSchema.find({}).lean();
    let updatedCount = 0;
    for (const sup of allSuppliers) {
      if (sup && sup.storeName) {
        await cascadeSupplierUpdate(sup._id, sup, sup);
        updatedCount++;
      }
    }
    res.json({
      message: `Successfully synchronized ${updatedCount} suppliers with their item purchases and purchase orders.`,
      status: 200,
    });
  } catch (err) {
    return next(err);
  }
});

Route.route("/update-Supplier/:id").put(async (req, res, next) => {
  try {
    const oldSupplier = await SupplierSchema.findById(req.params.id);
    const result = await SupplierSchema.findByIdAndUpdate(req.params.id, {
      $set: req.body,
    }, { new: true });

    if (result) {
      await cascadeSupplierUpdate(req.params.id, oldSupplier, req.body);
    }

    res.json({
      data: result,
      msg: "Data successfully updated.",
    });
  } catch (err) {
    return next(err);
  }
});

Route.route("/delete-Supplier/:id").delete(async (req, res) => {
  await SupplierSchema
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

Route.route("/remove-Supplier").delete(async (req, res) => {
  await SupplierSchema
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

Route.route("/Supplier-Information").get(async (req, res) => {
    try {
      const { page = 1, limit = 100, search = '', filterField, filterValue } = req.query;
      const skip = (Number(page) - 1) * Number(limit);
      const query = branchFilter(req);
      if (search) {
        const escapedSearch = search.trim().replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      const regex = new RegExp(escapedSearch, 'i');
        query.$or = [{ supplierName: regex }, { storeName: regex }, { supplierCompany: regex }, { supplierEmail: regex }];
      }
      if (filterField && filterValue) {
        query[filterField] = new RegExp(filterValue, 'i');
      }
      const itemI = await SupplierSchema.find(query).sort({ _id: -1 }).skip(skip).limit(Number(limit)).lean();
      const totalItem = await SupplierSchema.countDocuments(query);
      res.status(200).json({ itemI, totalItem, totalPages: Math.ceil(totalItem / Number(limit)) });
    } catch (error) { res.status(500).json({ message: error.message }); }
});

module.exports = Route;
