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

Route.route("/customer", cors(corsOptionsDelegate)).get(
  async (req, res, next) => {
    await customerSchema
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

Route.route("/create-customer").post(async (req, res, next) => {
  await customerSchema
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

Route.route("/get-customer/:id").get(async (req, res, next) => {
  await customerSchema
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

Route.route("/update-customer/:id").put(async (req, res, next) => {
  const id = req.params.id;
  try {
    let objectId = null;
    try { objectId = new require('mongoose').Types.ObjectId(id); } catch (e) {}
    const idFilter = objectId ? { $in: [id, objectId] } : id;

    const { Customer, customerCompanyPhone, billingAddress, billingCity, customerEmail, companyName } = req.body;
      
      // Build update object dynamically based on what was sent
      const updateObj = {};
      if (Customer !== undefined) updateObj['customerName.customerName'] = Customer;
      if (customerCompanyPhone !== undefined) updateObj['customerName.phone'] = customerCompanyPhone;
      
      if (billingAddress !== undefined || billingCity !== undefined) {
        // If either is updated, rebuild the address. If one is missing from req.body, it might get overwritten with 'undefined', but typical forms send the whole object.
        const addr = (billingAddress || '') + (billingCity ? ' ' + billingCity : '');
        updateObj['customerName.address'] = addr.trim();
      }
      
      if (customerEmail !== undefined) updateObj['customerName.email'] = customerEmail;
      if (companyName !== undefined) updateObj['customerName.companyName'] = companyName;

    const updateQuery = Object.keys(updateObj).length > 0 ? { $set: updateObj } : {};

    const updatePromises = [
      customerSchema.findByIdAndUpdate(id, { $set: req.body })
    ];

    if (Object.keys(updateObj).length > 0) {
      updatePromises.push(invoiceSchema.updateMany({ 'customerName._id': idFilter }, updateQuery));
      updatePromises.push(estimationSchema.updateMany({ 'customerName._id': idFilter }, updateQuery));
      updatePromises.push(purchaseSchema.updateMany({ 'customerName._id': idFilter }, updateQuery));
      updatePromises.push(maintenanceSchema.updateMany({ 'customerName._id': idFilter }, updateQuery));
      updatePromises.push(projectSchema.updateMany({ 'customerName._id': idFilter }, updateQuery));
      updatePromises.push(paymentSchema.updateMany({ 'customerName._id': idFilter }, updateQuery));
    }

    const results = await Promise.all(updatePromises);
    res.json({ data: results[0], msg: "Data successfully updated." });
  } catch (error) {
    return next(error);
  }
});

Route.route("/remove-customer/:id").delete(async (req, res) => {
  await customerSchema
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

Route.route("/remove-customer").delete(async (req, res) => {
  await customerSchema
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

Route.route("/customer-Information").get(async (req, res) => {
  try {
    const { page = 1, limit = 100, search = '', filterField, filterValue } = req.query;
    const skip = (Number(page) - 1) * Number(limit);

    // Build the query object dynamically based on the filters
    const query = branchFilter(req);
    if (search) {
      const escapedSearch = search.trim().replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      const regex = new RegExp(escapedSearch, 'i');
      query.$or = [
        { Customer: regex },
        { customerFirstName: regex },
        { customerLastName: regex },
        { customerFullName: regex },
        { companyName: regex },
        { customerEmail: regex },
        { customerPhone: regex },
        { customerCompanyPhone: regex },
        { billingAddress: regex },
        { billingCity: regex }
      ];
    }
    if (filterField && filterValue) {
      query[filterField] = new RegExp(filterValue, 'i');
    }

    const itemI = await customerSchema.find(query).sort({ _id: -1 }).skip(skip).limit(Number(limit)).lean();
    const totalItem = await customerSchema.countDocuments(query);

    res.status(200).json({
      itemI,
      totalItem,
      totalPages: Math.ceil(totalItem / Number(limit))
    });
  } catch (error) {
    console.error("Error fetching customer-Information:", error);
    res.status(500).json({ message: error.message });
  }
});

module.exports = Route;
