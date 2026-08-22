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

Route.route("/employeeattendance", cors(corsOptionsDelegate)).get(
  async (req, res, next) => {
    await employeeAttendanceShema
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

Route.route("/create-employeeattendance").post(async (req, res, next) => {
  await employeeAttendanceShema
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

Route.route("/get-employeeattendance/:id").get(async (req, res, next) => {
  await employeeAttendanceShema
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

Route.route("/update-employeeattendance/:id").put(async (req, res, next) => {
  await employeeAttendanceShema
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

Route.route("/delete-employeeattendance/:id").delete(async (req, res) => {
  await employeeAttendanceShema
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

Route.route("/remove-employeeattendance").delete(async (req, res) => {
  await employeeAttendanceShema
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

Route.route("/employee", cors(corsOptionsDelegate)).get(
  async (req, res, next) => {
    await employeeSchema
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

Route.route("/create-employee").post(async (req, res, next) => {
  await employeeSchema
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

Route.route("/get-last-saved-employee").get(async (req, res, next) => {
  try {
    const last = await employeeSchema.findOne().sort({ _id: -1 }).exec();
    res.json(last);
  } catch (error) {
    next(error);
  }
});

Route.route("/get-employee/:id").get(async (req, res, next) => {
  await employeeSchema
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

Route.route("/update-employee/:id").put(async (req, res, next) => {
  const id = req.params.id
  const {employeeName} = req.body
  try {
    await Promise.all([
      employeeSchema.findByIdAndUpdate(req.params.id, {
        $set: req.body,
      }).then((result) => {res.json({ data: result,
          msg: "Data successfully updated.",
        });
      }).catch((err) => {
        return next(err);
      }),
      expenseSchema.updateMany({'employeeName.idRow': id},{$set:{'employeeName.$.employee':employeeName}}),
      payRollSchema.updateMany({'employeeName.id': id},{$set:{'employeeName.name':employeeName}}),
      itemOutSchema.updateMany({'reference._id': id},{$set:{'reference.referenceName':employeeName}}),
      itemReturnSchema.updateMany({'reference._id': id},{$set:{'reference.referenceName':employeeName}}),
      employeeAttendanceShema.updateMany({'id': id},{$set:{'name':employeeName}}),
    ])
  } catch (error) {
    return next(error);
  }

});

Route.route("/delete-employee/:id").delete(async (req, res) => {
  await employeeSchema
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

Route.route("/remove-employee").delete(async (req, res) => {
  await employeeSchema
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

Route.route("/employeeuser", cors(corsOptionsDelegate)).get(
  async (req, res, next) => {
    await employeeUserSchema
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

Route.route("/create-employeeuser").post(async (req, res, next) => {
  await employeeUserSchema
    .create(req.body)
    .then((result) => {
      res.json({
        data: result,
        message: "Account successfully created",
        status: 200,
      });
    })
    .catch((err) => {
      return next(err);
    });
});

Route.route("/get-employeeuser/:id").get(async (req, res, next) => {
  await employeeUserSchema
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

Route.route("/update-employeeuser/:id").put(async (req, res, next) => {
  await employeeUserSchema
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

Route.route("/delete-employeeuser/:id").delete(async (req, res) => {
  await employeeUserSchema
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

Route.route("/remove-employeeuser").delete(async (req, res) => {
  await employeeUserSchema
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

Route.route("/department", cors(corsOptionsDelegate)).get(
  async (req, res, next) => {
    await departmentSchema
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

Route.route("/create-department").post(async (req, res, next) => {
  await departmentSchema
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

Route.route("/get-department/:id").get(async (req, res, next) => {
  await departmentSchema
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

Route.route("/update-department/:id").put(async (req, res, next) => {
  await departmentSchema
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

Route.route("/delete-department/:id").delete(async (req, res) => {
  await departmentSchema
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

Route.route("/remove-department").delete(async (req, res) => {
  await departmentSchema
    .findByIdAndRemove(req.params.id)
    .then(() => {
      res.json({
        msg: "Data successfully updated.",
      });
    })
    .then((result) => {
      res.json({
        data: result,
        message: "Data successfully added.",
        data: result,
        message: "Data successfully retrieved.",
        status: 200,
      });
    })
    .catch((err) => {
      return next(err);
    });
});

Route.route("/employee-Information").get(async (req, res) => {
  try {
    const { page = 1, limit = 100, search = '' } = req.query;
    const skip = (Number(page) - 1) * Number(limit);
    const query = branchFilter(req);
    if (search) {
      const escapedSearch = search.trim().replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      const regex = new RegExp(escapedSearch, 'i');
      query.$or = [{ employeeName: regex }, { employeeLastName: regex }, { email: regex }, { phone: regex }];
    }
    const itemI = await employeeSchema.find(query).sort({ _id: -1 }).skip(skip).limit(Number(limit)).lean();
    const totalItem = await employeeSchema.countDocuments(query);
    res.status(200).json({ itemI, totalItem, totalPages: Math.ceil(totalItem / Number(limit)) });
  } catch (error) { res.status(500).json({ message: error.message }); }
});

module.exports = Route;
