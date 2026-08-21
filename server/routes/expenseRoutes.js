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

Route.route("/dailyexpense", cors(corsOptionsDelegate)).get(
  async (req, res, next) => {
    await dailyExpenseSchema
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

Route.route("/create-dailyexpense").post(async (req, res, next) => {
  await dailyExpenseSchema
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

Route.route("/get-dailyexpense/:id").get(async (req, res, next) => {
  await dailyExpenseSchema
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

Route.route("/update-dailyexpense/:id").put(async (req, res, next) => {
  await dailyExpenseSchema
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

Route.route("/delete-dailyexpense/:id").delete(async (req, res) => {
  await dailyExpenseSchema
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

Route.route("/remove-dailyexpense").delete(async (req, res) => {
  await dailyExpenseSchema
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

Route.route("/expensesMonthlyTotal", cors(corsOptionsDelegate)).get(
  async (req, res, next) => {
    await dailyExpensesMonthlyTotalSchema
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

Route.route("/create-expensesMonthlyTotal").post(async (req, res, next) => {
  await dailyExpensesMonthlyTotalSchema
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

Route.route("/get-expensesMonthlyTotal/:id").get(async (req, res, next) => {
  await dailyExpensesMonthlyTotalSchema
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

Route.route("/update-expensesMonthlyTotal/:id").put(async (req, res, next) => {
  await dailyExpensesMonthlyTotalSchema
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

Route.route("/delete-expensesMonthlyTotal/:id").delete(async (req, res) => {
  await dailyExpensesMonthlyTotalSchema
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

Route.route("/remove-expensesMonthlyTotal").delete(async (req, res) => {
  await dailyExpensesMonthlyTotalSchema
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

Route.route("/expense", cors(corsOptionsDelegate)).get(
  async (req, res, next) => {
    try {
      const summary = req.query.summary === 'true';
      const projection = {};
      const filter = req.query.branchId && req.query.branchId !== 'ALL' ? { branchId: req.query.branchId } : {};
      const result = await expenseSchema.find(filter, projection).sort({ _id: -1 }).allowDiskUse(true);
      res.json({ data: result, message: "Data successfully fetched!", status: 200 });
    } catch (err) {
      return next(err);
    }
  }
);

Route.route("/get-last-saved-expense").get(async(req,res, next)=>{
  try {
    const rawBranchId = req.query.branchId;
    const branchId = Array.isArray(rawBranchId) ? rawBranchId[0] : rawBranchId;
    const query = branchId && branchId !== 'ALL' ? { branchId } : {};
    const last = await expenseSchema.findOne(query).sort({ expenseNumber: -1 }).exec();
    res.json(last)
  } catch (error) {
    next(error);
  }
})
// Create expense
Route.route("/create-expense").post(async (req, res, next) => {
  //await expenseSchema
  const{
    expenseCategory,accountName,
    description,expenseDate,amount,
    employeeName,
    rate,total,Create,expenseNumber,accountNameInfo,reason
} = req.body
   try {
    const branchId = req.body.branchId || req.query.branchId;
    const expenseNumberOld = await expenseSchema.findOne(branchId ? { branchId } : {}).sort({
    expenseNumber: -1
  }).exec();
    if ( expenseNumberOld && expenseNumberOld.expenseNumber === expenseNumber) {
      await expenseSchema.create({
        expenseCategory,accountName,
        description,expenseDate,amount,
        employeeName,
        rate,total,Create,expenseNumber:expenseNumber+1,accountNameInfo,reason
    ,
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
      await expenseSchema.create({
        expenseCategory,accountName,
        description,expenseDate,amount,
        employeeName,
        rate,total,Create,expenseNumber,accountNameInfo,reason
    ,
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

Route.route("/get-expense/:id").get(async (req, res, next) => {
  await expenseSchema
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

Route.route("/update-expense/:id").put(async (req, res, next) => {
  await expenseSchema
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

Route.route("/delete-expense/:id").delete(async (req, res) => {
  await expenseSchema
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

Route.route("/remove-expense").delete(async (req, res) => {
  await expenseSchema
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

Route.route("/expensesCategory", cors(corsOptionsDelegate)).get(
  async (req, res, next) => {
    await dailyExpensesCategorySchema
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

Route.route("/create-expensesCategory").post(async (req, res, next) => {
  await dailyExpensesCategorySchema
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

Route.route("/get-expensesCategory/:id").get(async (req, res, next) => {
  await dailyExpensesCategorySchema
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

Route.route("/update-expensesCategory/:id").put(async (req, res, next) => {
  await dailyExpensesCategorySchema
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

Route.route("/delete-expensesCategory/:id").delete(async (req, res) => {
  await dailyExpensesCategorySchema
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

Route.route("/remove-expensesCategory").delete(async (req, res) => {
  await dailyExpensesCategorySchema
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

Route.route("/dailyExpense-Information").get(async (req, res) => {
  try {
    const { page = 1, limit = 100, search = '' } = req.query;
    const skip = (Number(page) - 1) * Number(limit);
    const query = branchFilter(req);
    if (search) {
      const escapedSearch = search.trim().replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      const regex = new RegExp(escapedSearch, 'i');
      query.$or = [{ expenseName: regex }, { description: regex }];
    }
    const itemI = await dailyExpenseSchema.find(query).sort({ _id: -1 }).skip(skip).limit(Number(limit));
    const totalItem = await dailyExpenseSchema.countDocuments(query);
    res.status(200).json({ itemI, totalItem, totalPages: Math.ceil(totalItem / Number(limit)) });
  } catch (error) { res.status(500).json({ message: error.message }); }
});

Route.route("/expense-Information").get(async (req, res) => {
  try {
    const { page = 1, limit = 100, search = '', filterField, filterValue } = req.query;
    const skip = (Number(page) - 1) * Number(limit);

    // Build the query object dynamically based on the filters
    const query = branchFilter(req);
    if (search) {
      const escapedSearch = search.trim().replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      const regex = new RegExp(escapedSearch, 'i');
      const isNum = !isNaN(Number(search)) && search.trim() !== '';
      query.$or = [
        { description: regex },
        { accountName: regex },
        { employeeName: regex },
        { 'employeeName.employee': regex },
        { expenseCategory: regex },
        { 'expenseCategory.expensesCategory': regex },
        { accountNameInfo: regex },
        { 'accountNameInfo.name': regex },
      ];
      if (isNum) {
          query.$or.push(...(!isNaN(Number(search)) ? [{ expenseNumber: Number(search) }] : []));
          query.$or.push(...(!isNaN(Number(search)) ? [{ amount: Number(search) }] : []));
          query.$or.push(...(!isNaN(Number(search)) ? [{ total: Number(search) }] : []));
      }
    }
    if (filterField && filterValue) {
      query[`employeeName.${filterField}`] = new RegExp(filterValue, 'i');
    }
    const itemI = await expenseSchema.find(query).sort({ _id: -1 }).skip(skip).limit(Number(limit));
    const totalItem = await expenseSchema.countDocuments(query);

    res.status(200).json({ itemI, totalItem, totalPages: Math.ceil(totalItem / Number(limit)) });
  } catch (error) {
    console.error("Error fetching itemOut-Information:", error); // Log the error for debugging
    res.status(500).json({ message: error.message });
  }
});

module.exports = Route;
