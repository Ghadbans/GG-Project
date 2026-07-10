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
Route.route('/delete-branch').post(async (req, res, next) => {
  try {
    const { branchIdToDelete, transferBranchId } = req.body;
    
    if (!branchIdToDelete) {
      return res.status(400).json({ msg: 'branchIdToDelete is required' });
    }

    if (transferBranchId && transferBranchId !== branchIdToDelete) {
      const modelsToUpdate = [
        require('../model/quotationSchema'),
        require('../model/purchaseSchema'),
        require('../model/projectSchema'),
        require('../model/invoiceSchema'),
        require('../model/posSchema'),
        require('../model/employeeSchema'),
        require('../model/itemSchema'),
        require('../model/itemPurchaseSchema'),
        require('../model/itemOutSchema'),
        require('../model/itemReturnSchema'),
        require('../model/dailyExpenseSchema')
      ];

      for (const Model of modelsToUpdate) {
        if (Model && Model.updateMany) {
          await Model.updateMany(
            { branchId: branchIdToDelete }, 
            { $set: { branchId: transferBranchId } }
          );
        }
      }
    }

    const companyProfileSchema = require('../model/companyProfileSchema');
    const company = await companyProfileSchema.findOne({});
    if (company && company.branches) {
      company.branches = company.branches.filter(b => b.branchId !== branchIdToDelete);
      await companyProfileSchema.updateOne({ _id: company._id }, { $set: { branches: company.branches } });
    }

    res.status(200).json({ msg: 'Branch successfully deleted and data transferred.' });
  } catch (err) {
    console.error('Error deleting branch:', err);
    res.status(500).json({ msg: 'Server error during branch deletion' });
  }
});

Route.route("/CalculateTotal").post(async (req, res, next) => {
  try {
    // Disabled legacy manual calculation route. Hooks now handle this automatically.
    res.status(200).json({msg:'calculation completed'})
  } catch (error) {
    return next(error);
  }
});
// Get all message
Route.route("/message", cors(corsOptionsDelegate)).get(
  async (req, res, next) => {
    await messageSchema
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
// Create message
Route.route("/create-message").post(async (req, res, next) => {
  try {
    const branchId = req.body.branchId;
    const message = new messageSchema(req.body);
    await message.save();
    req.io.emit('newMessage',message);
    res.status(201).send('Message Saved Successfully');
} catch (error) {
    res.status(500).send('Error saving Message')
}
});
Route.route("/get-message/:id").get(async (req, res, next) => {
  await messageSchema
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
Route.route("/update-message/:id").put(async (req, res, next) => {
  await messageSchema
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
Route.route("/delete-message/:id").delete(async (req, res) => {
  await messageSchema
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

// Get all notification
Route.route("/notification", cors(corsOptionsDelegate)).get(
  async (req, res, next) => {
    await notificationSchema
      .find(req.query.branchId && req.query.branchId !== 'ALL' ? { branchId: req.query.branchId } : {})
      .then((result) => {
        res.json({
          data: result,
          notification: "Data successfully fetched!",
          status: 200,
        });
      })
      .catch((err) => {
        return next(err);
      });
  }
);
// Create notification
Route.route("/create-notification").post(async (req, res, next) => {
  try {
    const branchId = req.body.branchId;
    const notification = new notificationSchema(req.body);
    await notification.save();
    req.io.emit('newNotification',notification);
    res.status(201).send('notification Saved Successfully');
} catch (error) {
    res.status(500).send('Error saving notification')
}
});


// Get all customers
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
// Create customer
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

// Get single customer
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
// Update single customer
Route.route("/update-customer/:id").put(async (req, res, next) => {
  const id = req.params.id
  const {Customer} = req.body
  try {
    await Promise.all([
      customerSchema.findByIdAndUpdate(req.params.id, {
        $set: req.body,
      }).then((result) => {res.json({ data: result,
          msg: "Data successfully updated.",
        });
      }).catch((err) => {
        return next(err);
      }),
      invoiceSchema.updateMany({'customerName._id': id},{$set:{'customerName.customerName':Customer}}),
      estimationSchema.updateMany({'customerName._id': id},{$set:{'customerName.customerName':Customer}}),
      purchaseSchema.updateMany({'customerName._id': id},{$set:{'customerName.customerName':Customer}}),
      maintenanceSchema.updateMany({'customerName._id': id},{$set:{'customerName.customerName':Customer}}),
      projectSchema.updateMany({'customerName._id': id},{$set:{'customerName.customerName':Customer}}),
      paymentSchema.updateMany({'customerName._id': id},{$set:{'customerName.customerName':Customer}}),
    ])
  } catch (error) {
    return next(error);
  }
});
// Delete single customer
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

// Delete all customer
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

// Get all daily expenses

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

// Create daily expenses
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

// Get single daily expense
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
// Update single dailyexpense
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
// Delete single dailyexpense
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

// Delete all dailyexpense
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

// Get all Supplier

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
// Create Supplier
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

// Get single Supplier
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
// Update single Supplier
Route.route("/update-Supplier/:id").put(async (req, res, next) => {
  await SupplierSchema
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
// Delete single Supplier
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

// Delete all Supplier
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

// get all dailyreport

Route.route("/dailyreport", cors(corsOptionsDelegate)).get(
  async (req, res, next) => {
    await dailyReportSchema
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
// Create daily dailyreport
Route.route("/create-dailyreport").post(async (req, res, next) => {
  await dailyReportSchema
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

// Get single dailyreport
Route.route("/get-dailyreport/:id").get(async (req, res, next) => {
  await dailyReportSchema
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
// Update single dailyreport
Route.route("/update-dailyreport/:id").put(async (req, res, next) => {
  await dailyReportSchema
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
// Delete single dailyreport
Route.route("/delete-dailyreport/:id").delete(async (req, res) => {
  await dailyReportSchema
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

// Delete all dailyreport
Route.route("/remove-dailyreport").delete(async (req, res) => {
  await dailyReportSchema
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

// get all employeeattendance

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
// Create employeeattendance
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

// Get single employeeattendance
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
// Update single employeeattendance
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
// Delete single employeeattendance
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

// Delete all employeeattendance
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
// get all planing

Route.route("/planing", cors(corsOptionsDelegate)).get(
  async (req, res, next) => {
    await planingSchema
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
// Create planing
Route.route("/create-planing").post(async (req, res, next) => {
  await planingSchema
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

// Get single planing
Route.route("/get-planing/:id").get(async (req, res, next) => {
  await planingSchema
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
// Update single planing
Route.route("/update-planing/:id").put(async (req, res, next) => {
  await planingSchema
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
// Delete single planing
Route.route("/delete-planing/:id").delete(async (req, res) => {
  await planingSchema
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

// Delete all planing
Route.route("/remove-planing").delete(async (req, res) => {
  await planingSchema
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
// get all payRoll

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

// Get single payRoll
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
// Update single payRoll
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
// Delete single payRoll
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

// Delete all payRoll
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

// get all employee

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
// Create employeeattendance
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

// Get single employee
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
// Update single employee
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
// Delete single employee
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

// Delete all employee
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

// get all employeeuser

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
// Create employeeuser
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



// Get single employeeuser
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
// Update single employeeuser
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
// Delete single employeeuser
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

// Delete all employeeuser
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

// get all invoice
Route.route("/invoice", cors(corsOptionsDelegate)).get(
  async (req, res, next) => {
    try {
      const summary = req.query.summary === 'true';
      const projection = summary ? {
        invoiceNumber: 1, customerName: 1, status: 1,
        subTotal: 1, total: 1, balanceDue: 1, tax: 1, rate: 1,
        invoiceDate: 1, invoiceDueDate: 1, createdAt: 1,
        ReferenceName: 1, ReferenceName2: 1, noteInfo: 1,
      } : {};
      const filter = req.query.branchId && req.query.branchId !== 'ALL' ? { branchId: req.query.branchId } : {};
      const result = await invoiceSchema.find(filter, projection).sort({ createdAt: -1 });
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
    const query = {};
    if (branchId && branchId !== 'ALL') {
      if (branchId === 'HQ') {
        query.$or = [{ branchId: 'HQ' }, { branchId: { $exists: false } }, { branchId: null }];
      } else {
        query.branchId = branchId;
      }
    }
    if (search) {
      const regex = new RegExp(search.split(' ').join('|'), 'i');
      query.$or = [
        { invoiceNumber: isNaN(Number(search)) ? null : Number(search) },
        { invoiceSubject: regex },
        { invoiceDefect: regex },
        { status: regex },
        { 'items.itemName': regex },
        { 'items.itemBrand': regex },
        { 'items.itemDescription': regex },
        { 'customerName.customerName': regex },
      ].filter(condition => condition !== null);
    }
    if (filterField && filterValue) {
      query[`items.${filterField}`] = new RegExp(filterValue, 'i');
    }
    const itemI = await invoiceSchema.find(query).sort({ _id: -1 }).skip(skip).limit(Number(limit));
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
    const invoiceNumberOld = await invoiceSchema.findOne(branchId ? { branchId } : {}).sort({
      invoiceNumber: -1
    }).exec();
    if (invoiceNumberOld && invoiceNumberOld.invoiceNumber === invoiceNumber) {
      const sum = invoiceNumber + 1
      await invoiceSchema.create({
      branchId: req.body.branchId,
      branchId: req.body.branchId,
      branchId: req.body.branchId,
      branchId: req.body.branchId,
        customerName,
        invoiceNumber: sum,
        invoiceDate,
        invoiceDueDate,
        invoiceSubject,
        invoicePurchase,
        invoiceDefect,
        status,
        items,
        subTotal,Position,
        ReferenceName,ReferenceName2,
        total,noteInfo,
        balanceDue,
        totalW,actionTaken,
        invoiceName: "INV-00"+sum,
        note,Create,shipping,adjustment,adjustmentNumber,totalInvoice,terms,Ref
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
      await invoiceSchema.create({
        customerName,
        invoiceNumber,
        invoiceDate,
        invoiceDueDate,
        invoiceSubject,
        invoicePurchase,
        invoiceDefect,
        status,
        items,Position,
        subTotal,
        ReferenceName,ReferenceName2,noteInfo,
        total,
        balanceDue,
        totalW,actionTaken,
        invoiceName,
        note,Create,shipping,adjustment,adjustmentNumber,totalInvoice,terms,Ref
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

// Get single invoice
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
// Update single invoice
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
// Delete single invoice
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

// Delete all invoice
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

// get all item
Route.route("/item", cors(corsOptionsDelegate)).get(async (req, res, next) => {
  const rawBranchId = req.query.branchId;
  const branchId = Array.isArray(rawBranchId) ? rawBranchId[0] : rawBranchId;
  const filter = branchId && branchId !== 'ALL' ? { branchId } : {};
  await itemSchema
    .find(filter, {data:0})
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
});

Route.get('/item-usage', async (req, res) => {
  try {
    const items = await itemSchema.find({});
    const outDocs = await itemOutSchema.find({});
    const returnDocs = await itemReturnSchema.find({});

    // Flatten itemQtyArray from out and return
    const outArray = outDocs.flatMap(doc => doc.itemsQtyArray || []);
    const returnArray = returnDocs.flatMap(doc => doc.itemsQtyArray || []);

    // Helper to aggregate totals
    function aggregateTotals(arr, qtyKey) {
      const totals = {};
      arr.forEach(entry => {
        if (entry.itemName && entry.itemName._id) {
          const id = entry.itemName._id.toString();
          const qty = parseFloat(entry[qtyKey] || "0");

          if (!totals[id]) {
            totals[id] = { count: 1, total: qty };
          } else {
            totals[id].count += 1;
            totals[id].total += qty;
          }
        }
      });
      return totals;
    }

    const outStats = aggregateTotals(outArray, "newItemOut");
    const returnStats = aggregateTotals(returnArray, "newItemOut");

    // Merge data into item catalog
    const result = items.map(item => {
      const id = item._id.toString();

      const out = outStats[id] || { count: 0, total: 0 };
      const ret = returnStats[id] || { count: 0, total: 0 };

      return {
        itemId: id,
        itemUpc:item.itemUpc,
        itemName: item.itemName,
        Sell: item.itemSellingPrice,
        timesOut: out.count,
        totalQtyOut: out.total,
        timesReturn: ret.count,
        totalQtyReturn: ret.total,
        balanceQty: out.total - ret.total
      };
    });

    // Sort by highest balanceQty and return top 200
    const sortedResult = result.sort((a, b) => b.balanceQty - a.balanceQty).slice(0, 1000);

    res.json(sortedResult);

  } catch (error) {
    console.error("Error getting item usage:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

Route.route("/item-Information").get(async (req, res) => {
  try {
    const { page = 1, limit = 100, search = '', filterField, filterValue } = req.query;
    const rawBranchId = req.query.branchId;
    const branchId = Array.isArray(rawBranchId) ? rawBranchId[0] : rawBranchId;
    const skip = (Number(page) - 1) * Number(limit);

    // Build the query object dynamically based on the filters
    const query = {};
    if (branchId && branchId !== 'ALL') query.branchId = branchId;
    if (search.trim()) {
      const searchTerms = search.split(' ').map(term => new RegExp(term, 'i'));
      query.$and = searchTerms.map(term => ({
        $or: [
          { itemName: term },
          { itemBrand: term },
          { itemDescription: term },
          { itemCategory: term },
          { 'itemUpc.newCode': term },
          { 'itemUpc.itemNumber': isNaN(Number(search)) ? null : Number(search)  },
        ],
      }));
    }
    if (filterField && filterValue) {
      query[filterField] = new RegExp(filterValue, 'i');
    }

    const [itemI, totalItem] = await Promise.all([
      itemSchema.find(query).sort({ _id: -1 }).skip(skip).limit(Number(limit)),
      itemSchema.countDocuments(query),
    ]);

    res.status(200).json({ itemI, totalItem, totalPages: Math.ceil(totalItem / Number(limit)) });
  } catch (error) {
    res.status(500).json({ message: "An error occurred while fetching data.", error: error.message });
  }
});

Route.route("/item-shop").get(async (req, res) => {
  try {
    const {page = 1, limit = 60, search = ''} = req.query;
    const rawBranchId = req.query.branchId;
    const branchId = Array.isArray(rawBranchId) ? rawBranchId[0] : rawBranchId;
    const skip = (page - 1) * limit;

    const query = {}
    if (branchId && branchId !== 'ALL') query.branchId = branchId;

    if (search.trim()) {
      const searchTerms = search.split(' ').map(term => new RegExp(term, 'i'));
      query.$and = searchTerms.map(term => ({
        $or: [
          { itemName: term },
          { itemBrand: term },
          { itemDescription: term },
          { itemCategory: term },
          { 'itemUpc.newCode': term },
          { 'itemUpc.itemNumber': isNaN(Number(search)) ? null : Number(search)  },
        ],
      }));
    }

    const items = await itemSchema.find(query).skip(skip).limit(parseInt(limit)).select('typeItem itemName itemCategory itemQuantity itemDimension itemWeight unit itemUpc itemBrand itemManufacturer itemCostPrice itemSellingPrice itemDescription data contentType').lean();
    const totalItem = await itemSchema.countDocuments(query);

    res.status(200).json({
      items,
      totalItem,
      totalPages: Math.ceil(totalItem/limit)
    })

  } catch (error) {
    res.status(500).json({msg:"service error"})
  }
})

Route.route("/get-last-saved-item/:category").get(async(req,res, next)=>{
  const category = req.params.category;
  try {
    const last = await itemSchema.findOne({'itemUpc.newCode':category}).sort({
      'itemUpc.itemNumber': -1
    }).exec();
    res.json(last)
  } catch (error) {
    next(error);
  }
})
// Create item
Route.route("/create-item").post(async (req, res, next) => {
 const{
  typeItem,itemName,itemStore,unit
  ,itemDimension,
  itemWeight,itemCategory,itemUpc,itemManufacturer,
  itemBrand,itemCostPrice,
  itemQuantity,itemSellingPrice,itemDescription,
  stockOnHand,Creates
, branchId } = req.body
try {
  const oldCode = await itemSchema.findOne({itemCategory}).sort({
    'itemUpc.itemNumber': -1
  }).exec();
  if (oldCode && oldCode.itemCategory === itemCategory) {
    if (oldCode.itemUpc.itemNumber === parseInt(itemUpc.itemNumber)) {
      const sum = parseInt(itemUpc.itemNumber) + 1
      await itemSchema.create({
        typeItem,itemName,itemStore,unit
        ,itemDimension,
        itemWeight,itemCategory,itemUpc:{
          itemNumber: sum ,
          newCode: itemUpc.newCode
        },itemManufacturer,
        itemBrand,itemCostPrice,
        itemQuantity,itemSellingPrice,itemDescription,
        stockOnHand,Creates
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
      await itemSchema.create({
        typeItem,itemName,itemStore,unit
        ,itemDimension,
        itemWeight,itemCategory,itemUpc,itemManufacturer,
        itemBrand,itemCostPrice,
        itemQuantity,itemSellingPrice,itemDescription,
        stockOnHand,Creates
      ,
      branchId}).then((result)=>{
        res.json({
          data: result,
          message: "Data successfully added.",
          status: 200,
        });
      }).catch((err)=>{
        return next(err)
      }) }
  }else {
    await itemSchema.create({
      typeItem,itemName,itemStore,unit
      ,itemDimension,
      itemWeight,itemCategory,itemUpc,itemManufacturer,
      itemBrand,itemCostPrice,
      itemQuantity,itemSellingPrice,itemDescription,
      stockOnHand,Creates
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

// Get single item
Route.route("/get-item/:id").get(async (req, res, next) => {
  await itemSchema
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
//Get Item that are less than 30%
Route.route("/low-margin-item").get(async (req,res) => {
  try {
    const lowMarginItems = await itemSchema.find({
      $expr:{
        $lte:['$itemSellingPrice',{$multiply:['$itemCostPrice',1.3]}]
      }
    })
  res.status(200).json({
    success: true,
    data: lowMarginItems
  })
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "An Error Occurred"
    })
  }
})
// Update single item
Route.route("/update-item/:id").put(async (req, res, next) => {
  const id = req.params.id
  const {itemName,itemDescription} = req.body
  try {
    await Promise.all([
      itemSchema.findByIdAndUpdate(req.params.id, {
        $set: req.body,
      }).then((result) => {res.json({ data: result,
          msg: "Data successfully updated.",
        });
      }).catch((err) => {
        return next(err);
      }),
      invoiceSchema.updateMany({'items.itemName._id': id},{$set:{'items.$.itemName.itemName':itemName,'items.$.itemDescription':itemDescription}}),
      estimationSchema.updateMany({'items.itemName._id': id},{$set:{'items.$.itemName.itemName':itemName,'items.$.itemDescription':itemDescription}}),
      purchaseSchema.updateMany({'items.itemName._id': id},{$set:{'items.$.itemName.itemName':itemName,'items.$.itemDescription':itemDescription}}),
      maintenanceSchema.updateMany({'items.itemName._id': id},{$set:{'items.$.itemName.itemName':itemName,'items.$.itemDescription':itemDescription}}),
      itemPurchaseSchema.updateMany({'items.itemName._id': id},{$set:{'items.$.itemName.itemName':itemName,'items.$.itemDescription':itemDescription}}),
      itemOutSchema.updateMany({'itemsQtyArray.itemName._id': id},{$set:{'itemsQtyArray.$.itemName.itemName':itemName,'itemsQtyArray.$.itemDescription':itemDescription}}),
      itemReturnSchema.updateMany({'itemsQtyArray.itemName._id': id},{$set:{'itemsQtyArray.$.itemName.itemName':itemName,'itemsQtyArray.$.itemDescription':itemDescription}})
    ])
  } catch (error) {
    return next(error);
  }
});
// Delete single item
Route.route("/delete-item/:id").delete(async (req, res) => {
  await itemSchema
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

// Delete all item
Route.route("/remove-item").delete(async (req, res) => {
  await itemSchema
    .findByIdAndRemove(req.params._id)
    .then(() => {
      res.json({
        msg: "Data successfully updated.",
      });
    })
    .catch((err) => {
      return next(err);
    });
});

// get all payment

Route.route("/payment", cors(corsOptionsDelegate)).get(
  async (req, res, next) => {
    await paymentSchema
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
Route.route("/get-last-saved-payment").get(async(req,res, next)=>{
  try {
    const rawBranchId = req.query.branchId;
    const branchId = Array.isArray(rawBranchId) ? rawBranchId[0] : rawBranchId;
    const query = branchId && branchId !== 'ALL' ? { branchId } : {};
    const last = await paymentSchema.findOne(query).sort({
      paymentNumber: -1
    }).exec();
    res.json(last)
  } catch (error) {
    next(error);
  }
})
// Create payment
Route.route("/create-payment").post(async (req, res, next) => {
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

  //await paymentSchema
  const {
    customerName,
    amount,
    tax,
    bankCharge,
    modes,
    paymentDate,
    PaymentReceivedFC,
    PaymentReceivedUSD,
    paymentNumber,
    referenceNumber,
    description,
    remaining,Create,
    TotalAmount
  } = req.body
   try {
    const branchId = req.body.branchId || req.query.branchId;
    const paymentInfo = await paymentSchema.findOne(branchId ? { branchId } : {}).sort({
      paymentNumber: -1
    }).exec();
    if (paymentInfo && paymentInfo.paymentNumber === paymentNumber) {
      await paymentSchema.create({
        customerName,
        amount,
        tax,
        bankCharge,
        modes,
        paymentDate,
        PaymentReceivedFC,
        PaymentReceivedUSD,
        paymentNumber:paymentNumber+1,
        referenceNumber,
        description,
        remaining,Create,
        TotalAmount
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
      await paymentSchema.create({
        customerName,
        amount,
        tax,
        bankCharge,
        modes,
        paymentDate,
        PaymentReceivedFC,
        PaymentReceivedUSD,
        paymentNumber,
        referenceNumber,
        description,
        remaining,Create,
        TotalAmount
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

// Get single payment
Route.route("/get-payment/:id").get(async (req, res, next) => {
  await paymentSchema
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
// Update single payment
Route.route("/update-payment/:id").put(async (req, res, next) => {
  await paymentSchema
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
// Delete single payment
Route.route("/delete-payment/:id").delete(async (req, res) => {
  await paymentSchema
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

// Delete all payment
Route.route("/remove-payment").delete(async (req, res) => {
  await paymentSchema
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

// get all purchase

Route.route("/purchase", cors(corsOptionsDelegate)).get(
  async (req, res, next) => {
    try {
      const summary = req.query.summary === 'true';
      const projection = summary ? {
        purchaseNumber: 1, supplierName: 1, status: 1,
        subTotal: 1, total: 1, tax: 1, purchaseDate: 1, createdAt: 1,
      } : {};
      const filter = req.query.branchId && req.query.branchId !== 'ALL' ? { branchId: req.query.branchId } : {};
      const result = await purchaseSchema.find(filter, projection).sort({ createdAt: -1 });
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

// Get single purchase
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
// Update single purchase
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
// Delete single purchase
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

// Delete all purchase
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

// get all recurringinvoice

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
// Create recurringinvoice
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

// Get single recurringinvoice
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
// Update single recurringinvoice
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
// Delete single recurringinvoice
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

// Delete all recurringinvoice
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

// get all retainerinvoice

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
// Create retainerinvoice
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

// Get single retainerinvoice
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
// Update single retainerinvoice
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
// Delete single retainerinvoice
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

// Delete all retainerinvoice
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

// get all companyProfile

Route.route("/companyProfile", cors(corsOptionsDelegate)).get(
  async (req, res, next) => {
    await companyProfileSchema
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
// Create companyProfile
Route.route("/create-companyProfile").post(async (req, res, next) => {
  await companyProfileSchema
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

// Get single companyProfile
Route.route("/get-companyProfile/:id").get(async (req, res, next) => {
  await companyProfileSchema
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
// Update single companyProfile
Route.route("/update-companyProfile/:id").put(async (req, res, next) => {
  await companyProfileSchema
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
// Delete single companyProfile
Route.route("/delete-companyProfile/:id").delete(async (req, res) => {
  await companyProfileSchema
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

// Delete all companyProfile
Route.route("/remove-companyProfile").delete(async (req, res) => {
  await companyProfileSchema
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

// -------------get all estimation-------------------

Route.route("/estimation", cors(corsOptionsDelegate)).get(
  async (req, res, next) => {
    try {
      const summary = req.query.summary === 'true';
      const projection = summary ? {
        estimateNumber: 1, customerName: 1, status: 1,
        subTotal: 1, totalAmount: 1, discount: 1, tax: 1,
        rate: 1, estimateDate: 1, createdAt: 1, ReferenceName: 1,
      } : {};
      const filter = req.query.branchId && req.query.branchId !== 'ALL' ? { branchId: req.query.branchId } : {};
      const result = await estimationSchema.find(filter, projection).sort({ estimateDate: -1 });
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
  const estimateNumberOld = await estimationSchema.findOne(branchId ? { branchId } : {}).sort({
    estimateNumber: -1
  }).exec();
  if (estimateNumberOld && estimateNumberOld.estimateNumber === estimateNumber) {
    const sum = estimateNumber + 1
    await estimationSchema.create({
      branchId: req.body.branchId,
      branchId: req.body.branchId,
      customerName,
      estimateNumber: sum,
      estimateDate,
      estimateDefect,
      estimateSubject,
      status,
      items,noteInfo,
      subTotal,
      total,
      totalW,
      note,
      estimateName: "EST-00"+sum,
      Create,balanceDue,
      terms,shipping,
      adjustment,adjustmentNumber,
      totalInvoice,Ref,ReferenceName
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
    await estimationSchema.create({
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
      estimateName,noteInfo,
      Create,
      terms,shipping,balanceDue,
      adjustment,adjustmentNumber,
      totalInvoice,Ref,ReferenceName
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

// Get single estimation
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
// Update single estimation
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
// Delete single estimation
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

// Delete all estimation
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
// -------------get all pos-------------------

Route.route("/pos", cors(corsOptionsDelegate)).get(
  async (req, res, next) => {
    try {
      const summary = req.query.summary === 'true';
      const projection = summary ? {
        posNumber: 1, customerName: 1, status: 1,
        subTotal: 1, total: 1, posDate: 1, createdAt: 1,
      } : {};
      const filter = req.query.branchId && req.query.branchId !== 'ALL' ? { branchId: req.query.branchId } : {};
      const result = await posSchema.find(filter, projection).sort({ createdAt: -1 });
      res.json({ data: result, message: "Data successfully fetched!", status: 200 });
    } catch (err) {
      return next(err);
    }
  }
);
Route.route("/get-last-saved-pos").get(async(req,res, next)=>{
  try {
    const rawBranchId = req.query.branchId;
    const branchId = Array.isArray(rawBranchId) ? rawBranchId[0] : rawBranchId;
    const query = branchId && branchId !== 'ALL' ? { branchId } : {};
    const last = await posSchema.findOne(query).sort({
      factureNumber: -1
    }).exec();
    res.json(last)
  } catch (error) {
    next(error);
  }
})
// Create pos
Route.route("/create-pos").post(async (req, res, next) => {
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

 // await posSchema
 const{
  customerName,
  factureNumber,
  invoiceDate,
  time,TotalAmountPaid,remaining,credit,creditUsd,creditFC,
  status,
  items:itemFilter,
  subTotal,
  totalFC,
  totalUSD,tax,
  rate,
  Create
  ,balanceDue,
  note,
  totalInvoice
} = req.body
 try {
  const branchId = req.body.branchId || req.query.branchId;
  const posOld = await posSchema.findOne(branchId ? { branchId } : {}).sort({
    factureNumber: -1
  }).exec();
  if (posOld && posOld.factureNumber === factureNumber) {
    const sum = Number(factureNumber) + 1
    await posSchema.create({
      customerName,
      factureNumber:sum,
      invoiceDate,
      time,TotalAmountPaid,remaining,credit,creditUsd,creditFC,
      status,
      items:itemFilter,
      subTotal,
      totalFC,
      totalUSD,tax,
      rate,
      Create
      ,balanceDue,
      note,
      totalInvoice
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
    await posSchema.create({
      customerName,
        factureNumber,
        invoiceDate,
        time,TotalAmountPaid,remaining,credit,creditUsd,creditFC,
        status,
        items:itemFilter,
        subTotal,
        totalFC,
        totalUSD,tax,
        rate,
        Create
        ,balanceDue,
        note,
        totalInvoice
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

// Get single pos
Route.route("/get-pos/:id").get(async (req, res, next) => {
  await posSchema
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
// Update single pos
Route.route("/update-pos/:id").put(async (req, res, next) => {
  await posSchema
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
// Delete single pos
Route.route("/delete-pos/:id").delete(async (req, res, next) => {
  await posSchema
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

// Delete all pos
Route.route("/remove-pos").delete(async (req, res) => {
  await posSchema
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
// -------------get all expensesMonthlyTotal-------------------

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
// Create expensesMonthlyTotal
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

// Get single expensesMonthlyTotal
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
// Update single expensesMonthlyTotal
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
// Delete single expensesMonthlyTotal
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

// Delete all expensesMonthlyTotal
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


// -------------get all projects-------------------

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
    const last = await projectSchema.findOne(query).sort({
      _id: -1
    }).exec();
    res.json(last)
  } catch (error) {
    next(error);
  }
})
// Create projects
Route.route("/create-projects").post(async (req, res, next) => {
 // await projectSchema
 const{
  customerName,
  projectName,
  status,
  phase,
  description,
  startDate,
  visitDate,
  projectNumber,Create
} = req.body
 try {
  const branchId = req.body.branchId || req.query.branchId;
  const projectNumberInfo = await projectSchema.findOne(branchId ? { branchId } : {}).sort({
    projectNumber: -1
  }).exec();
  if (projectNumberInfo && projectNumberInfo.projectNumber === projectNumber) {
    await projectSchema.create({
      customerName,
      projectName,
      status,
      phase,
      description,
      startDate,
      visitDate,
      projectNumber: projectNumber + 1
      ,Create
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
    await projectSchema.create({
      customerName,
      projectName,
      status,
      phase,
      description,
      startDate,
      visitDate,
      projectNumber,Create
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

// Get single projects
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
// Update single projects
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
// Delete single projects
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

// Delete all projects
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
// -------------get all expense-------------------

Route.route("/expense", cors(corsOptionsDelegate)).get(
  async (req, res, next) => {
    try {
      const summary = req.query.summary === 'true';
      const projection = summary ? {
        expenseNumber: 1, expenseDate: 1, amount: 1, total: 1,
        expenseCategory: 1, accountName: 1, description: 1, branchId: 1
      } : {};
      const filter = req.query.branchId && req.query.branchId !== 'ALL' ? { branchId: req.query.branchId } : {};
      const result = await expenseSchema.find(filter, projection).sort({ createdAt: -1 });
      res.json({ data: result, message: "Data successfully fetched!", status: 200 });
    } catch (err) {
      return next(err);
    }
  }
);
Route.route("/expense-Information").get(async (req, res) => {
  try {
    const { page = 1, limit = 100, search = '', filterField, filterValue, branchId } = req.query;
    const skip = (Number(page) - 1) * Number(limit);

    // Build the query object dynamically based on the filters
    const query = {};
    if (branchId && branchId !== 'ALL') {
      if (branchId === 'HQ') {
        query.$or = [{ branchId: 'HQ' }, { branchId: { $exists: false } }, { branchId: null }];
      } else {
        query.branchId = branchId;
      }
    }
    if (search) {
      const regex = new RegExp(search.split(' ').join('|'), 'i');
      query.$or = [
        { expenseNumber: isNaN(Number(search)) ? null : Number(search) },
        { description: regex },
        { accountName: regex },
        { 'employeeName.employee': regex },
        { 'expenseCategory.expensesCategory': regex },
        { 'accountNameInfo.name': regex },
      ].filter(condition => condition !== null);
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
Route.route("/get-last-saved-expense").get(async(req,res, next)=>{
  try {
    const rawBranchId = req.query.branchId;
    const branchId = Array.isArray(rawBranchId) ? rawBranchId[0] : rawBranchId;
    const query = branchId && branchId !== 'ALL' ? { branchId } : {};
    const last = await expenseSchema.findOne(query).sort({
      _id: -1
    }).exec();
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

// Get single expense
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
// Update single expense
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
// Delete single expense
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

// Delete all expense
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
// -------------get all maintenance-------------------
Route.route("/maintenance", cors(corsOptionsDelegate)).get(
  async (req, res, next) => {
    try {
      const summary = req.query.summary === 'true';
      const projection = summary ? {
        maintenanceNumber: 1, customerName: 1, status: 1,
        subTotal: 1, total: 1, maintenanceDate: 1, createdAt: 1,
      } : {};
      const filter = req.query.branchId && req.query.branchId !== 'ALL' ? { branchId: req.query.branchId } : {};
      const result = await maintenanceSchema.find(filter, projection).sort({ createdAt: -1 });
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
    const query = {};
    if (branchId && branchId !== 'ALL') {
      if (branchId === 'HQ') {
        query.$or = [{ branchId: 'HQ' }, { branchId: { $exists: false } }, { branchId: null }];
      } else {
        query.branchId = branchId;
      }
    }
    if (search) {
      const regex = new RegExp(search.split(' ').join('|'), 'i');
      query.$or = [
        { serviceNumber: isNaN(Number(search)) ? null : Number(search) },
        { technicianAssign: regex },
        { itemDescriptionInfo: regex },
        { status: regex },
        { brand: regex },
        { model: regex },
        { defectDescription: regex },
        { 'items.itemName': regex },
        { 'items.itemBrand': regex },
        { 'items.itemDescription': regex },
        { 'customerName.customerName': regex },
      ].filter(condition => condition !== null);
    }
    if (filterField && filterValue) {
      query[`items.${filterField}`] = new RegExp(filterValue, 'i');
    }
    const itemI = await maintenanceSchema.find(query).sort({ _id: -1 }).skip(skip).limit(Number(limit));
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
    const last = await maintenanceSchema.findOne(query).sort({
      _id: -1
    }).exec();
    res.json(last)
  } catch (error) {
    next(error);
  }
})
// Create maintenance
Route.route("/create-maintenance").post(async (req, res, next) => {
 // await maintenanceSchema
 const { customerName,serviceNumber,action,
  serviceName,serviceDate,laborQty,totalLaborFeesGenerale,
  technicianAssign,note,totalLaborFees,laborPercentage,totalDiscount,laborDiscount,
  visitDate,status,items,itemDescriptionInfo,brand,actionTaken,model,
  warranty,serialNo,defectDescription,adjustment,adjustmentNumber,
  totalInvoice,subTotal,Create,Converted,ReferenceName} = req.body
 try {
  const branchId = req.body.branchId || req.query.branchId;
  const serviceNumberInfo = await maintenanceSchema.findOne(branchId ? { branchId } : {}).sort({
    serviceNumber: -1
  }).exec();0
  if (serviceNumberInfo && serviceNumberInfo.serviceNumber === serviceNumber) {
    const sum = serviceNumber + 1
    await maintenanceSchema.create({ customerName,serviceNumber: sum,
      serviceName: "M-00"+sum ,serviceDate,laborQty,totalLaborFeesGenerale,action,
      technicianAssign,note,totalLaborFees,laborPercentage,totalDiscount,laborDiscount,
      visitDate,status,items,itemDescriptionInfo,brand,actionTaken,model,
      warranty,serialNo,defectDescription,adjustment,adjustmentNumber,
      totalInvoice,subTotal,Create,Converted,ReferenceName,
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
    await maintenanceSchema.create({ customerName,serviceNumber,
      serviceName,serviceDate,laborQty,totalLaborFeesGenerale,action,
      technicianAssign,note,totalLaborFees,laborPercentage,totalDiscount,laborDiscount,
      visitDate,status,items,itemDescriptionInfo,brand,actionTaken,model,
      warranty,serialNo,defectDescription,adjustment,adjustmentNumber,
      totalInvoice,subTotal,Create,Converted,ReferenceName,
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

// Get single maintenance
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
// Update single maintenance
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
// Delete single maintenance
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

// Delete all maintenance
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
// -------------get all itemUnit-------------------
Route.route("/itemUnit", cors(corsOptionsDelegate)).get(
  async (req, res, next) => {
    await itemUnitSchema
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
// Create itemUnit
Route.route("/create-itemUnit").post(async (req, res, next) => {
  await itemUnitSchema
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

// -------------get all expensesCategory-------------------
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
// Create expensesCategory
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

// Get single expensesCategory
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
// Update single expensesCategory
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
// Delete single expensesCategory
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

// Delete all expensesCategory
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
// -------------get all department-------------------
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
// Create department
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

// Get single department
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
// Update single department
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
// Delete single department
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

// Delete all department
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
// -------------get all rate-------------------
Route.route("/rate", cors(corsOptionsDelegate)).get(
  async (req, res, next) => {
    try {
      const rawBranchId = req.query.branchId;
      const branchId = Array.isArray(rawBranchId) ? rawBranchId[0] : rawBranchId;
      const filter = branchId && branchId !== 'ALL' ? { branchId } : {};
      let result = await rateSchema.find(filter);
      if (result.length === 0) {
        const newDoc = await rateSchema.create({
      branchId: req.body.branchId, rate: 0, branchId: branchId && branchId !== 'ALL' ? branchId : 'HQ' });
        result = [newDoc];
      }
      res.json({ data: result, message: "Data successfully fetched!", status: 200 });
    } catch (err) { next(err); }
  }
);
// Create rate
Route.route("/create-rate").post(async (req, res, next) => {
  await rateSchema.create(req.body)
    .then((result) => { res.json({ data: result, message: "Data successfully added.", status: 200 }); })
    .catch((err) => { return next(err); });
});
// Get single rate
Route.route("/get-rate/:id").get(async (req, res, next) => {
  await rateSchema.findById(req.params.id, req.body)
    .then((result) => { res.json({ data: result, message: "Data successfully retrieved.", status: 200 }); })
    .catch((err) => { return next(err); });
});
// Update single rate
Route.route("/update-rate/:id").put(async (req, res, next) => {
  await rateSchema.findByIdAndUpdate(req.params.id, { $set: req.body })
    .then((result) => { res.json({ data: result, msg: "Data successfully updated." }); })
    .catch((err) => { return next(err); });
});
// Delete single rate
Route.route("/delete-rate/:id").delete(async (req, res) => {
  await rateSchema.findByIdAndRemove(req.params.id)
    .then(() => { res.json({ msg: "Data successfully updated." }); })
    .catch((err) => { return res.status(400).json(err); });
});
// Delete all rate
Route.route("/remove-rate").delete(async (req, res) => {
  await rateSchema.findByIdAndRemove(req.params.id)
    .then(() => { res.json({ msg: "Data successfully updated." }); })
    .catch((err) => { return res.status(400).json(err); });
});

// -------------get all rateReturn-------------------
Route.route("/rateReturn", cors(corsOptionsDelegate)).get(
  async (req, res, next) => {
    try {
      const rawBranchId = req.query.branchId;
      const branchId = Array.isArray(rawBranchId) ? rawBranchId[0] : rawBranchId;
      const filter = branchId && branchId !== 'ALL' ? { branchId } : {};
      let result = await RateReturnSchema.find(filter);
      if (result.length === 0) {
        const newDoc = await RateReturnSchema.create({ rateR: 0, branchId: branchId && branchId !== 'ALL' ? branchId : 'HQ' });
        result = [newDoc];
      }
      res.json({ data: result, message: "Data successfully fetched!", status: 200 });
    } catch (err) { next(err); }
  }
);
// Create rateReturn
Route.route("/create-rateReturn").post(async (req, res, next) => {
  await RateReturnSchema.create(req.body)
    .then((result) => { res.json({ data: result, message: "Data successfully added.", status: 200 }); })
    .catch((err) => { return next(err); });
});
// Get single rateReturn
Route.route("/get-rateReturn/:id").get(async (req, res, next) => {
  await RateReturnSchema.findById(req.params.id, req.body)
    .then((result) => { res.json({ data: result, message: "Data successfully retrieved.", status: 200 }); })
    .catch((err) => { return next(err); });
});
// Update single rateReturn
Route.route("/update-rateReturn/:id").put(async (req, res, next) => {
  await RateReturnSchema.findByIdAndUpdate(req.params.id, { $set: req.body })
    .then((result) => { res.json({ data: result, msg: "Data successfully updated." }); })
    .catch((err) => { return next(err); });
});
// Delete single rateReturn
Route.route("/delete-rateReturn/:id").delete(async (req, res) => {
  await RateReturnSchema.findByIdAndRemove(req.params.id)
    .then(() => { res.json({ msg: "Data successfully updated." }); })
    .catch((err) => { return res.status(400).json(err); });
});
// Delete all rateReturn
Route.route("/remove-rateReturn").delete(async (req, res) => {
  await RateReturnSchema.findByIdAndRemove(req.params.id)
    .then(() => { res.json({ msg: "Data successfully updated." }); })
    .catch((err) => { return res.status(400).json(err); });
});

// -------------get all paymentRate-------------------
Route.route("/paymentRate", cors(corsOptionsDelegate)).get(
  async (req, res, next) => {
    try {
      const rawBranchId = req.query.branchId;
      const branchId = Array.isArray(rawBranchId) ? rawBranchId[0] : rawBranchId;
      const filter = branchId && branchId !== 'ALL' ? { branchId } : {};
      let result = await paymentRateSchema.find(filter);
      if (result.length === 0) {
        const newDoc = await paymentRateSchema.create({ paymentRate: 0, branchId: branchId && branchId !== 'ALL' ? branchId : 'HQ' });
        result = [newDoc];
      }
      res.json({ data: result, message: "Data successfully fetched!", status: 200 });
    } catch (err) { next(err); }
  }
);
// Create paymentRate
Route.route("/create-paymentRate").post(async (req, res, next) => {
  await paymentRateSchema.create(req.body)
    .then((result) => { res.json({ data: result, message: "Data successfully added.", status: 200 }); })
    .catch((err) => { return next(err); });
});
// Get single paymentRate
Route.route("/get-paymentRate/:id").get(async (req, res, next) => {
  await paymentRateSchema.findById(req.params.id, req.body)
    .then((result) => { res.json({ data: result, message: "Data successfully retrieved.", status: 200 }); })
    .catch((err) => { return next(err); });
});

// Update single paymentRate
Route.route("/update-paymentRate/:id").put(async (req, res, next) => {
  await paymentRateSchema
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
// Delete single paymentRate
Route.route("/delete-paymentRate/:id").delete(async (req, res) => {
  await paymentRateSchema
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

// Delete all paymentRate
Route.route("/remove-paymentRate").delete(async (req, res) => {
  await paymentRateSchema
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
// -------------get all itemCode-------------------
Route.route("/itemCode", cors(corsOptionsDelegate)).get(
  async (req, res, next) => {
    await itemCodeSchema
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
// Create itemCode
Route.route("/create-itemCode").post(async (req, res, next) => {
  await itemCodeSchema
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

// Get single itemCode
Route.route("/get-itemCode/:id").get(async (req, res, next) => {
  await itemCodeSchema
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
// Update single itemCode
Route.route("/update-itemCode/:id").put(async (req, res, next) => {
  await itemCodeSchema
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
// Delete single itemCode
Route.route("/delete-itemCode/:id").delete(async (req, res) => {
  await itemCodeSchema
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

// Delete all itemCode
Route.route("/remove-itemCode").delete(async (req, res) => {
  await itemCodeSchema
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
// -------------get all itemOut-------------------
Route.route("/itemOut", cors(corsOptionsDelegate)).get(
  async (req, res, next) => {
    await itemOutSchema
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
Route.route("/itemOut-Information").get(async (req, res) => {
  try {
    const { page = 1, limit = 100, search = '', filterField, filterValue, branchId } = req.query;
    const skip = (Number(page) - 1) * Number(limit);

    // Build the query object dynamically based on the filters
    const query = {};
    if (branchId && branchId !== 'ALL') query.branchId = branchId;
    if (search) {
      const regex = new RegExp(search.split(' ').join('|'), 'i');
      query.$or = [
        { outNumber: isNaN(Number(search)) ? null : Number(search) },
        { description: regex },
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
    const itemI = await itemOutSchema.find(query).sort({ itemOutDate: -1 }).skip(skip).limit(Number(limit));
    const totalItem = await itemOutSchema.countDocuments(query);

    res.status(200).json({ itemI, totalItem, totalPages: Math.ceil(totalItem / Number(limit)) });
  } catch (error) {
    console.error("Error fetching itemOut-Information:", error); // Log the error for debugging
    res.status(500).json({ message: error.message });
  }
});
Route.route("/get-last-saved-itemOut").get(async(req,res, next)=>{
  try {
    const rawBranchId = req.query.branchId;
    const branchId = Array.isArray(rawBranchId) ? rawBranchId[0] : rawBranchId;
    const query = branchId && branchId !== 'ALL' ? { branchId } : {};
    const last = await itemOutSchema.findOne(query).sort({
      outNumber: -1
    }).exec();
    res.json(last)
  } catch (error) {
    next(error);
  }
})
// Create itemOut
Route.route("/create-itemOut").post(async (req, res, next) => {
  try {
    const branchId = req.body.branchId;
    const result = await itemOutSchema.create(req.body);
    res.json({ data: result, message: "Data successfully added.", status: 200 });
  } catch (err) {
    return next(err);
  }
});

// Get single itemOut
Route.route("/get-itemOut/:id").get(async (req, res, next) => {
  await itemOutSchema
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
// Update single itemOut
Route.route("/update-itemOut/:id").put(async (req, res, next) => {
  try {
    const result = await itemOutSchema.findByIdAndUpdate(req.params.id, { $set: req.body });
    res.json({ data: result, msg: "Data successfully updated." });
  } catch (err) {
    return next(err);
  }
});
// Delete single itemOut
Route.route("/delete-itemOut/:id").delete(async (req, res, next) => {
  try {
    await itemOutSchema.findByIdAndRemove(req.params.id);
    res.json({ msg: "Data successfully updated." });
  } catch (err) {
    return next(err);
  }
});

// Delete all itemOut
Route.route("/remove-itemOut").delete(async (req, res) => {
  await itemOutSchema
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
// -------------get all purchaseOrder-------------------
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
    const query = {};
    if (branchId && branchId !== 'ALL') query.branchId = branchId;
      if (search) {
        let dateSearchStr = search;
        const dateParts = search.split('/');
        if (dateParts.length === 3) {
            dateSearchStr = `${dateParts[2]}-${dateParts[1]}-${dateParts[0]}`;
        }
        const dateRegex = new RegExp(dateSearchStr, 'i');
        const regex = new RegExp(search.split(' ').join('|'), 'i');
        query.$or = [
          { outNumber: isNaN(Number(search)) ? null : Number(search) },
          { reason: regex },
          { 'itemsQtyArray.itemName': regex },
          { 'itemsQtyArray.itemBrand': regex },
          { 'itemsQtyArray.itemDescription': regex },
          { 'reference.referenceName': regex },
          { itemOutDate: dateRegex },
          { itemOutDate: isNaN(new Date(dateSearchStr).getTime()) ? null : new Date(dateSearchStr) }
        ].filter(condition => condition !== null);
      }
      if (filterField && filterValue) {
        query[`itemsQtyArray.${filterField}`] = new RegExp(filterValue, 'i');
      }
      const itemI = await purchaseOrderSchema.find(query).sort({ itemOutDate: -1 }).skip(skip).limit(Number(limit));
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
  await purchaseOrderSchema
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

// Get single purchaseOrder
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
// Update single purchaseOrder
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
// Delete single purchaseOrder
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

// Delete all purchaseOrder
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
// -------------get all grantAccess-------------------
Route.route("/grantAccess", cors(corsOptionsDelegate)).get(
  async (req, res, next) => {
    await grantAccessSchema
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
Route.route("/get-last-saved-grantAccess").get(async(req,res, next)=>{
  try {
    const rawBranchId = req.query.branchId;
    const branchId = Array.isArray(rawBranchId) ? rawBranchId[0] : rawBranchId;
    const query = branchId && branchId !== 'ALL' ? { branchId } : {};
    const last = await grantAccessSchema.findOne(query).sort({
      _id: -1
    }).exec();
    res.json(last)
  } catch (error) {
    next(error);
  }
})
// Create grantAccess
Route.route("/create-grantAccess").post(async (req, res, next) => {
  const { employeeName, userID, modules, branches, branchId } = req.body;
  await grantAccessSchema
    .create({ employeeName, userID, modules, branches, branchId })
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

// Get single grantAccess
Route.route("/get-grantAccess/:id").get(async (req, res, next) => {
  await grantAccessSchema
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
// Update single grantAccess
Route.route("/update-grantAccess/:id").put(async (req, res, next) => {
  const { employeeName, userID, modules, branches, branchId } = req.body;
  await grantAccessSchema
    .findByIdAndUpdate(
      req.params.id,
      {
        $set: { employeeName, userID, modules, branches, branchId },
      },
      { new: true }
    )
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
// Delete single grantAccess
Route.route("/delete-grantAccess/:id").delete(async (req, res) => {
  await grantAccessSchema
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

// Delete all grantAccess
Route.route("/remove-grantAccess").delete(async (req, res) => {
  await grantAccessSchema
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
// -------------get all itemReturn-------------------
Route.route("/itemReturn", cors(corsOptionsDelegate)).get(
  async (req, res, next) => {
    await itemReturnSchema
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
Route.route("/itemReturn-Information").get(async (req, res) => {
  try {
    const { page = 1, limit = 100, search = '', filterField, filterValue, branchId } = req.query;
    const skip = (Number(page) - 1) * Number(limit);

    // Build the query object dynamically based on the filters
    const query = {};
    if (branchId && branchId !== 'ALL') query.branchId = branchId;
    if (search) {
      const regex = new RegExp(search.split(' ').join('|'), 'i');
      query.$or = [
        { outNumber: isNaN(Number(search)) ? null : Number(search) },
        { description: regex },
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
    const itemI = await itemReturnSchema.find(query).sort({ itemReturnDate: -1 }).skip(skip).limit(Number(limit));
    const totalItem = await itemReturnSchema.countDocuments(query);

    res.status(200).json({ itemI, totalItem, totalPages: Math.ceil(totalItem / Number(limit)) });
  } catch (error) {
    console.error("Error fetching itemOut-Information:", error); // Log the error for debugging
    res.status(500).json({ message: error.message });
  }
});
Route.route("/get-last-saved-itemReturn").get(async(req,res, next)=>{
  try {
    const rawBranchId = req.query.branchId;
    const branchId = Array.isArray(rawBranchId) ? rawBranchId[0] : rawBranchId;
    const query = branchId && branchId !== 'ALL' ? { branchId } : {};
    const last = await itemReturnSchema.findOne(query).sort({
      outNumber: -1
    }).exec();
    res.json(last)
  } catch (error) {
    next(error);
  }
})
// Create itemReturn
Route.route("/create-itemReturn").post(async (req, res, next) => {
  try {
    const branchId = req.body.branchId;
    const result = await itemReturnSchema.create(req.body);
    res.json({ data: result, message: "Data successfully added.", status: 200 });
  } catch (err) {
    return next(err);
  }
});

// Get single itemReturn
Route.route("/get-itemReturn/:id").get(async (req, res, next) => {
  await itemReturnSchema
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
// Update single itemReturn
Route.route("/update-itemReturn/:id").put(async (req, res, next) => {
  try {
    const result = await itemReturnSchema.findByIdAndUpdate(req.params.id, { $set: req.body });
    res.json({ data: result, msg: "Data successfully updated." });
  } catch (err) {
    return next(err);
  }
});
// Delete single itemReturn
Route.route("/delete-itemReturn/:id").delete(async (req, res, next) => {
  try {
    await itemReturnSchema.findByIdAndRemove(req.params.id);
    res.json({ msg: "Data successfully updated." });
  } catch (err) {
    return next(err);
  }
});

// Delete all itemReturn
Route.route("/remove-itemReturn").delete(async (req, res) => {
  await itemReturnSchema
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
// -------------get all comment-------------------
Route.route("/comment", cors(corsOptionsDelegate)).get(
  async (req, res, next) => {
    await commentSchema
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
// Create comment
Route.route("/create-comment").post(async (req, res, next) => {
  await commentSchema
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

// Get single comment
Route.route("/get-comment/:id").get(async (req, res, next) => {
  await commentSchema
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
// Update single comment
Route.route("/update-comment/:id").put(async (req, res, next) => {
  await commentSchema
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
// Delete single comment
Route.route("/delete-comment/:id").delete(async (req, res) => {
  await commentSchema
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

// Delete all comment
Route.route("/remove-comment").delete(async (req, res) => {
  await commentSchema
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
// -------------get all cash-------------------
Route.route("/cash", cors(corsOptionsDelegate)).get(
  async (req, res, next) => {
    await cashSchema
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
Route.route("/get-last-saved-cash").get(async(req,res, next)=>{
  try {
    const rawBranchId = req.query.branchId;
    const branchId = Array.isArray(rawBranchId) ? rawBranchId[0] : rawBranchId;
    const query = branchId && branchId !== 'ALL' ? { branchId } : {};
    const last = await cashSchema.findOne(query).sort({
      _id: -1
    }).exec();
    res.json(last)
  } catch (error) {
    next(error);
  }
})
// Create cash
Route.route("/create-cash").post(async (req, res, next) => {
  await cashSchema
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

// Get single cash
Route.route("/get-cash/:id").get(async (req, res, next) => {
  await cashSchema
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
// Update single cash
Route.route("/update-cash/:id").put(async (req, res, next) => {
  await cashSchema
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
// Delete single cash
Route.route("/delete-cash/:id").delete(async (req, res) => {
  await cashSchema
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

// Delete all cash
Route.route("/remove-cash").delete(async (req, res) => {
  await cashSchema
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
// -------------get all itemPurchase-------------------
Route.route("/itemPurchase", cors(corsOptionsDelegate)).get(
  async (req, res, next) => {
    try {
      const summary = req.query.summary === 'true';
      const projection = summary ? {
        purchaseNumber: 1, supplierName: 1, status: 1, isPaid: 1, payments: 1,
        subTotal: 1, total: 1, tax: 1, purchaseDate: 1, createdAt: 1,
      } : {};
      const filter = req.query.branchId && req.query.branchId !== 'ALL' ? { branchId: req.query.branchId } : {};
      const result = await itemPurchaseSchema.find(filter, projection).sort({ itemPurchaseDate: -1 });
      res.json({ data: result, message: "Data successfully fetched!", status: 200 });
    } catch (err) {
      return next(err);
    }
  }
);
Route.route("/itemPurchase-Information").get(async (req, res) => {
  try {
    const { page = 1, limit = 100, search = '', filterField, filterValue, branchId } = req.query;
    const skip = (Number(page) - 1) * Number(limit);

    // Build the query object dynamically based on the filters
    const query = {};
    if (branchId && branchId !== 'ALL') query.branchId = branchId;
    if (search) {
      const regex = new RegExp(search.split(' ').join('|'), 'i');
      query.$or = [
        { itemPurchaseNumber: isNaN(Number(search)) ? null : Number(search) },
        { manufacturerNumber: regex },
        { manufacturer: regex },
        { reason: regex },
        { status: regex },
        { description: regex },
        { 'items.itemName': regex },
        { 'items.itemBrand': regex },
        { 'items.itemDescription': regex },
        { 'projectName.name': regex },
      ].filter(condition => condition !== null);
    }
    if (filterField && filterValue) {
      query[`items.${filterField}`] = new RegExp(filterValue, 'i');
    }
    const itemI = await itemPurchaseSchema.find(query).sort({ itemPurchaseDate: -1 }).skip(skip).limit(Number(limit));
    const totalItem = await itemPurchaseSchema.countDocuments(query);

    res.status(200).json({ itemI, totalItem, totalPages: Math.ceil(totalItem / Number(limit)) });
  } catch (error) {
    console.error("Error fetching itemOut-Information:", error); // Log the error for debugging
    res.status(500).json({ message: error.message });
  }
});
Route.route("/get-last-saved-itemPurchase").get(async(req,res, next)=>{
  try {
    const rawBranchId = req.query.branchId;
    const branchId = Array.isArray(rawBranchId) ? rawBranchId[0] : rawBranchId;
    const query = branchId && branchId !== 'ALL' ? { branchId } : {};
    const last = await itemPurchaseSchema.findOne(query).sort({
      itemPurchaseNumber: -1
    }).exec();
    res.json(last)
  } catch (error) {
    next(error);
  }
})
// Create itemPurchase
Route.route("/create-itemPurchase").post(async (req, res, next) => {
  const { itemPurchaseDate,POID,itemPurchaseNumber,
    manufacturer,manufacturerNumber,manufacturerID,status,
    description,note,
  Create,totalUSD,total,totalFC,items,reason,projectName} = req.body
   try {
    const branchId = req.body.branchId || req.query.branchId;
    const itemPurchase = await itemPurchaseSchema.findOne(branchId ? { branchId } : {}).sort({
      itemPurchaseNumber: -1
    })
    for( const purchaseItem of items) {
      if (purchaseItem.itemRate !== 0) {
        await itemSchema.updateOne({_id:purchaseItem.itemName._id},{$set: {itemCostPrice : purchaseItem.itemRate}})
      } 
    }
    if (itemPurchase && itemPurchase.itemPurchaseNumber === itemPurchaseNumber) {
      await itemPurchaseSchema.create({ itemPurchaseDate,POID,itemPurchaseNumber:itemPurchaseNumber + 1,
        manufacturer,manufacturerNumber,manufacturerID,status,
        description,note,
      Create,totalUSD,total,totalFC,items,reason,projectName,
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
      await itemPurchaseSchema.create({ itemPurchaseDate,POID,itemPurchaseNumber,
        manufacturer,manufacturerNumber,manufacturerID,
        description,note,status,
       Create,totalUSD,total,totalFC,items,reason,projectName,
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
// Get single itemPurchase
Route.route("/get-itemPurchase/:id").get(async (req, res, next) => {
  await itemPurchaseSchema
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
// Update single itemPurchase
Route.route("/update-itemPurchase/:id").put(async (req, res, next) => {
  const {items} = req.body
  try {
    if (items !== undefined){
      for( const purchaseItem of items) {
        if (purchaseItem.itemRate !== 0) {
          await itemSchema.updateOne({_id:purchaseItem.itemName._id},{$set: {itemCostPrice : purchaseItem.itemRate}})
        } 
      }
    }
    await itemPurchaseSchema
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
  } catch (error) {
    return next(error);
  }

});
// Delete single itemPurchase
const deleteItemPurchaseHandler = async (req, res, next) => {
  try {
    const id = req.body.id || req.params.id;
    await itemPurchaseSchema.findByIdAndRemove(id);
    res.json({ msg: "Data successfully updated." });
  } catch (err) {
    return next(err);
  }
};
Route.route("/delete-itemPurchase/:id").post(deleteItemPurchaseHandler).delete(deleteItemPurchaseHandler);
Route.route("/delete-itemPurchase").post(deleteItemPurchaseHandler).delete(deleteItemPurchaseHandler);

// Delete all itemPurchase
Route.route("/remove-itemPurchase").delete(async (req, res) => {
  await itemPurchaseSchema
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

// -------------get all hidden-------------------
Route.route("/hidden", cors(corsOptionsDelegate)).get(
  async (req, res, next) => {
    await hiddenSchema
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
// Create hidden
Route.route("/create-hidden").post(async (req, res, next) => {
  await hiddenSchema
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

// Delete single hidden
Route.route("/delete-hidden/:id").delete(async (req, res) => {
  await hiddenSchema
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

const storage = multer.memoryStorage();
const upload = multer({storage})

// Post Images
Route.route('/upload-image').post(upload.single('image'), async (req, res)=> {
  try {
    const newImage = await imageSchema.create({
      fileName: req.file.originalname,
      data: req.file.buffer,
      contentType: req.file.mimetype,
      employeeName: req.body.employeeName,
    })
    const imageUrl= `/image/${newImage._id}`;
    res.status(200).json({imageUrl}) 
  } catch (error) {
    res.status(500).send('error')
  }
});
Route.route('/upload-image-item/:id').put(upload.single('image'), async (req, res)=> {
  const contentType = req.file.mimetype
  const data = req.file.buffer
    await itemSchema
    .findByIdAndUpdate(req.params.id,{
      $set:{'contentType':contentType,'data':data},
    })
    .then(() => {
      res.json({
        msg: "Data successfully updated.",
      });
    })
    .catch((err) => {
      return next(err);
    });
});
Route.route("/image", cors(corsOptionsDelegate)).get(
  async (req, res, next) => {
    await imageSchema
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
//get Image 
Route.route("/get-image/:name").get(async (req, res, next) => {
 // await imageSchema
 try {
  const image = await imageSchema.findOne({employeeName: req.params.name});
  res.status(200).json({data:image })
 } catch (error) {
  next(error)
 }
});
// Delete single image
Route.route("/delete-image/:id").delete(async (req, res) => {
  await imageSchema
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

// =====================================================================
// BLOCK FACTORY ROUTES
// =====================================================================
const BlockConfig = require("../model/blockConfigSchema");
const BlockProduction = require("../model/blockProductionSchema");
const BlockDamage = require("../model/blockDamageSchema");
const BlockSales = require("../model/blockSalesSchema");
const BlockMixer = require("../model/blockMixerSchema");

// Helper: build branchId filter
function branchFilter(req) {
  const { branchId } = req.query;
  return branchId && branchId !== 'ALL' ? { branchId } : {};
}

// ---------- block-config ----------
Route.route("/block-config").get(async (req, res, next) => {
  try {
    const filter = branchFilter(req);
    const data = await BlockConfig.find(filter).sort({ lastUpdated: -1 });
    res.json({ data, status: 200 });
  } catch (err) { next(err); }
});
Route.route("/block-config2").get(async (req, res, next) => {
  try {
    const filter = branchFilter(req);
    const data = await BlockConfig.find(filter).sort({ lastUpdated: -1 });
    res.json({ data, status: 200 });
  } catch (err) { next(err); }
});
Route.route("/upsert-block-config").post(async (req, res, next) => {
  try {
    const { blockType, branchId, ...rest } = req.body;
    const filter = blockType ? { blockType, branchId: branchId || 'HQ' } : { branchId: branchId || 'HQ' };
    const doc = await BlockConfig.findOneAndUpdate(
      filter,
      { $set: { ...req.body, lastUpdated: new Date() } },
      { upsert: true, new: true, setDefaultsOnInsert: true }
    );
    res.json({ data: doc, status: 200 });
  } catch (err) { next(err); }
});
// Alias: frontend calls create-block-config to save pricing config
Route.route("/create-block-config").post(async (req, res, next) => {
  try {
    const { blockType, branchId } = req.body;
    const filter = blockType ? { blockType, branchId: branchId || 'HQ' } : { branchId: branchId || 'HQ' };
    const doc = await BlockConfig.findOneAndUpdate(
      filter,
      { $set: { ...req.body, lastUpdated: new Date() } },
      { upsert: true, new: true, setDefaultsOnInsert: true }
    );
    res.json({ data: doc, status: 200, message: "Config saved successfully" });
  } catch (err) { next(err); }
});

// ---------- block-production ----------
Route.route("/block-production").get(async (req, res, next) => {
  try {
    const data = await BlockProduction.find(branchFilter(req)).sort({ date: -1 });
    res.json({ data, status: 200 });
  } catch (err) { next(err); }
});
Route.route("/block-production2").get(async (req, res, next) => {
  try {
    const data = await BlockProduction.find(branchFilter(req)).sort({ date: -1 });
    res.json({ data, status: 200 });
  } catch (err) { next(err); }
});
Route.route("/create-block-production").post(async (req, res, next) => {
  try {
    const branchId = req.body.branchId;
    const doc = await BlockProduction.create(req.body);
    if (req.io) req.io.emit('blockDataChanged');
    res.json({ data: doc, status: 200, message: "Saved successfully" });
  } catch (err) { next(err); }
});
Route.route("/update-block-production/:id").put(async (req, res, next) => {
  try {
    const doc = await BlockProduction.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true });
    if (req.io) req.io.emit('blockDataChanged');
    res.json({ data: doc, status: 200 });
  } catch (err) { next(err); }
});
// POST alias — frontend may POST with id in body
Route.route("/update-block-production").post(async (req, res, next) => {
  try {
    const { id, _id, ...rest } = req.body;
    const docId = id || _id;
    const doc = await BlockProduction.findByIdAndUpdate(docId, { $set: rest }, { new: true });
    if (req.io) req.io.emit('blockDataChanged');
    res.json({ data: doc, status: 200 });
  } catch (err) { next(err); }
});
Route.route("/delete-block-production").post(async (req, res, next) => {
  try {
    const { id } = req.body;
    if (!id || id.length < 10) return res.json({ status: 200, message: "Invalid ID, skipping server delete" });
    await BlockProduction.findByIdAndDelete(id);
    if (req.io) req.io.emit('blockDataChanged');
    res.json({ status: 200, message: "Deleted successfully" });
  } catch (err) { res.status(500).json({ status: 500, message: err.message }); }
});

// ---------- block-damage ----------
Route.route("/block-damage").get(async (req, res, next) => {
  try {
    const data = await BlockDamage.find(branchFilter(req)).sort({ date: -1 });
    res.json({ data, status: 200 });
  } catch (err) { next(err); }
});
Route.route("/block-damage2").get(async (req, res, next) => {
  try {
    const data = await BlockDamage.find(branchFilter(req)).sort({ date: -1 });
    res.json({ data, status: 200 });
  } catch (err) { next(err); }
});
Route.route("/create-block-damage").post(async (req, res, next) => {
  try {
    const branchId = req.body.branchId;
    const doc = await BlockDamage.create(req.body);
    if (req.io) req.io.emit('blockDataChanged');
    res.json({ data: doc, status: 200, message: "Saved successfully" });
  } catch (err) { next(err); }
});
Route.route("/update-block-damage/:id").put(async (req, res, next) => {
  try {
    const doc = await BlockDamage.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true });
    if (req.io) req.io.emit('blockDataChanged');
    res.json({ data: doc, status: 200 });
  } catch (err) { next(err); }
});
// POST alias
Route.route("/update-block-damage").post(async (req, res, next) => {
  try {
    const { id, _id, ...rest } = req.body;
    const docId = id || _id;
    const doc = await BlockDamage.findByIdAndUpdate(docId, { $set: rest }, { new: true });
    if (req.io) req.io.emit('blockDataChanged');
    res.json({ data: doc, status: 200 });
  } catch (err) { next(err); }
});
Route.route("/delete-block-damage").post(async (req, res, next) => {
  try {
    const { id } = req.body;
    if (!id || id.length < 10) return res.json({ status: 200, message: "Invalid ID, skipping server delete" });
    await BlockDamage.findByIdAndDelete(id);
    if (req.io) req.io.emit('blockDataChanged');
    res.json({ status: 200, message: "Deleted successfully" });
  } catch (err) { res.status(500).json({ status: 500, message: err.message }); }
});

// ---------- block-sales ----------
Route.route("/block-sales").get(async (req, res, next) => {
  try {
    const data = await BlockSales.find(branchFilter(req)).sort({ date: -1 });
    res.json({ data, status: 200 });
  } catch (err) { next(err); }
});
Route.route("/block-sales2").get(async (req, res, next) => {
  try {
    const data = await BlockSales.find(branchFilter(req)).sort({ date: -1 });
    res.json({ data, status: 200 });
  } catch (err) { next(err); }
});
Route.route("/create-block-sales").post(async (req, res, next) => {
  try {
    const branchId = req.body.branchId;
    const doc = await BlockSales.create(req.body);
    if (req.io) req.io.emit('blockDataChanged');
    res.json({ data: doc, status: 200, message: "Saved successfully" });
  } catch (err) { next(err); }
});
Route.route("/update-block-sales/:id").put(async (req, res, next) => {
  try {
    const doc = await BlockSales.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true });
    if (req.io) req.io.emit('blockDataChanged');
    res.json({ data: doc, status: 200 });
  } catch (err) { next(err); }
});
// POST alias
Route.route("/update-block-sales").post(async (req, res, next) => {
  try {
    const { id, _id, ...rest } = req.body;
    const docId = id || _id;
    const doc = await BlockSales.findByIdAndUpdate(docId, { $set: rest }, { new: true });
    if (req.io) req.io.emit('blockDataChanged');
    res.json({ data: doc, status: 200 });
  } catch (err) { next(err); }
});
Route.route("/delete-block-sales").post(async (req, res, next) => {
  try {
    const { id } = req.body;
    if (!id || id.length < 10) return res.json({ status: 200, message: "Invalid ID, skipping server delete" });
    await BlockSales.findByIdAndDelete(id);
    if (req.io) req.io.emit('blockDataChanged');
    res.json({ status: 200, message: "Deleted successfully" });
  } catch (err) { res.status(500).json({ status: 500, message: err.message }); }
});

// ---------- block-mixer ----------
Route.route("/block-mixer").get(async (req, res, next) => {
  try {
    const data = await BlockMixer.find(branchFilter(req)).sort({ date: -1 });
    res.json({ data, status: 200 });
  } catch (err) { next(err); }
});
Route.route("/block-mixer2").get(async (req, res, next) => {
  try {
    const data = await BlockMixer.find(branchFilter(req)).sort({ date: -1 });
    res.json({ data, status: 200 });
  } catch (err) { next(err); }
});
Route.route("/create-block-mixer").post(async (req, res, next) => {
  try {
    const branchId = req.body.branchId;
    const doc = await BlockMixer.create(req.body);
    if (req.io) req.io.emit('blockDataChanged');
    res.json({ data: doc, status: 200, message: "Saved successfully" });
  } catch (err) { next(err); }
});
Route.route("/update-block-mixer/:id").put(async (req, res, next) => {
  try {
    const doc = await BlockMixer.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true });
    if (req.io) req.io.emit('blockDataChanged');
    res.json({ data: doc, status: 200 });
  } catch (err) { next(err); }
});
// POST alias
Route.route("/update-block-mixer").post(async (req, res, next) => {
  try {
    const { id, _id, ...rest } = req.body;
    const docId = id || _id;
    const doc = await BlockMixer.findByIdAndUpdate(docId, { $set: rest }, { new: true });
    if (req.io) req.io.emit('blockDataChanged');
    res.json({ data: doc, status: 200 });
  } catch (err) { next(err); }
});
Route.route("/delete-block-mixer").post(async (req, res, next) => {
  try {
    const { id } = req.body;
    if (!id || id.length < 10) return res.json({ status: 200, message: "Invalid ID, skipping server delete" });
    await BlockMixer.findByIdAndDelete(id);
    if (req.io) req.io.emit('blockDataChanged');
    res.json({ status: 200, message: "Deleted successfully" });
  } catch (err) { res.status(500).json({ status: 500, message: err.message }); }
});

// =====================================================================
// IMAGE ENDPOINT — supports lookup by employeeName OR MongoDB _id
// Fixes HTTP 400 errors when worker thumbnails are loaded by _id
// =====================================================================
Route.route("/get-image/:name").get(async (req, res, next) => {
  try {
    const name = req.params.name;
    let image = null;
    // If the param looks like a MongoDB ObjectId, search by _id
    if (/^[a-f\d]{24}$/i.test(name)) {
      image = await imageSchema.findById(name);
    }
    // Fall back to searching by employeeName (original behaviour)
    if (!image) {
      image = await imageSchema.findOne({ employeeName: name });
    }
    res.status(200).json({ data: image });
  } catch (error) {
    next(error);
  }
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



