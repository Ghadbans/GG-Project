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


// Create customer



// Get single customer


// Update single customer


// Delete single customer



// Delete all customer



// Get all daily expenses




// Create daily expenses



// Get single daily expense


// Update single dailyexpense


// Delete single dailyexpense



// Delete all dailyexpense



// Get all Supplier



// Create Supplier



// Get single Supplier


// Update single Supplier


// Delete single Supplier



// Delete all Supplier



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



// Create employeeattendance



// Get single employeeattendance


// Update single employeeattendance


// Delete single employeeattendance



// Delete all employeeattendance


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




// Get single payRoll


// Update single payRoll


// Delete single payRoll



// Delete all payRoll



// get all employee



// Create employeeattendance



// Get single employee


// Update single employee


// Delete single employee



// Delete all employee



// get all employeeuser



// Create employeeuser





// Get single employeeuser


// Update single employeeuser


// Delete single employeeuser



// Delete all employeeuser



// get all invoice



// Get single invoice


// Update single invoice


// Delete single invoice



// Delete all invoice



// get all item



// Get single item


//Get Item that are less than 30%


// Delete single item



// Delete all item



// get all payment


Route.route("/payment", cors(corsOptionsDelegate)).get(
    async (req, res, next) => {
      const filter = {};
      if (req.query.branchId && req.query.branchId !== 'ALL') filter.branchId = req.query.branchId;
      if (req.query.customerId) {
        try {
          const mongoose = require('mongoose');
          const objectId = new mongoose.Types.ObjectId(req.query.customerId);
          filter['customerName._id'] = { $in: [req.query.customerId, objectId] };
        } catch(e) {
          filter['customerName._id'] = req.query.customerId;
        }
      }
      await paymentSchema
        .find(filter)
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




// Get single purchase


// Update single purchase


// Delete single purchase



// Delete all purchase



// get all recurringinvoice



// Create recurringinvoice



// Get single recurringinvoice


// Update single recurringinvoice


// Delete single recurringinvoice



// Delete all recurringinvoice



// get all retainerinvoice



// Create retainerinvoice



// Get single retainerinvoice


// Update single retainerinvoice


// Delete single retainerinvoice



// Delete all retainerinvoice



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




// Get single estimation


// Update single estimation


// Delete single estimation



// Delete all estimation


// -------------get all pos-------------------


Route.route("/pos", cors(corsOptionsDelegate)).get(
  async (req, res, next) => {
    try {
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


      if (req.query.itemId) {
        let objectId = null;
        try { objectId = new mongoose.Types.ObjectId(req.query.itemId); } catch (e) {}
        
        if (objectId) {
          filter['items'] = { $elemMatch: { 'itemName._id': { $in: [req.query.itemId, objectId] } } };
        } else {
          filter['items'] = { $elemMatch: { 'itemName._id': req.query.itemId } };
        }
      }

      const result = await posSchema.find(filter, projection).sort({ _id: -1 }).allowDiskUse(true).lean();
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



  // Refund POS
  Route.route("/refund-pos/:id").post(async (req, res, next) => {
    try {
      const posId = req.params.id;
      const { items, TotalAmountPaid, remaining, status, subTotal, totalFC, totalUSD, tax, balanceDue } = req.body;
      
      const posSchema = require('../model/posSchema');
      const posDoc = await posSchema.findById(posId);
      
      if (!posDoc) {
        return res.status(404).json({ message: "POS Invoice not found" });
      }

      posDoc.items = items;
      posDoc.TotalAmountPaid = TotalAmountPaid;
      posDoc.remaining = remaining;
      posDoc.status = status;
      posDoc.subTotal = subTotal;
      posDoc.totalFC = totalFC;
      posDoc.totalUSD = totalUSD;
      posDoc.tax = tax;
      posDoc.balanceDue = balanceDue;
      if (req.body.totalInvoice !== undefined) posDoc.totalInvoice = req.body.totalInvoice;
      if (req.body.refundedAmountFC !== undefined) posDoc.refundedAmountFC = req.body.refundedAmountFC;
      if (req.body.refundedAmountUSD !== undefined) posDoc.refundedAmountUSD = req.body.refundedAmountUSD;
      if (req.body.refundedCashFC !== undefined) posDoc.refundedCashFC = req.body.refundedCashFC;
      if (req.body.refundedCashUSD !== undefined) posDoc.refundedCashUSD = req.body.refundedCashUSD;
      
      await posDoc.save(); // Triggers the stock hook

      res.status(200).json({
        data: posDoc,
        message: "Refund processed successfully.",
        status: 200
      });
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



// Create expensesMonthlyTotal



// Get single expensesMonthlyTotal


// Update single expensesMonthlyTotal


// Delete single expensesMonthlyTotal



// Delete all expensesMonthlyTotal




// -------------get all projects-------------------



// Update single projects


// Delete single projects



// Delete all projects


// -------------get all expense-------------------




// Get single expense


// Update single expense


// Delete single expense



// Delete all expense


// -------------get all maintenance-------------------



// Get single maintenance


// Update single maintenance


// Delete single maintenance



// Delete all maintenance


// -------------get all itemUnit-------------------


// Create itemUnit



// -------------get all expensesCategory-------------------


// Create expensesCategory



// Get single expensesCategory


// Update single expensesCategory


// Delete single expensesCategory



// Delete all expensesCategory


// -------------get all department-------------------


// Create department



// Get single department


// Update single department


// Delete single department



// Delete all department


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


// Create itemCode



// Get single itemCode


// Update single itemCode


// Delete single itemCode



// Delete all itemCode


// -------------get all itemOut-------------------



// Get single itemOut


// Update single itemOut


// Delete single itemOut



// Delete all itemOut


// -------------get all purchaseOrder-------------------



// Get single purchaseOrder


// Update single purchaseOrder


// Delete single purchaseOrder



// Delete all purchaseOrder


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
    const last = await grantAccessSchema.findOne(query).sort({ _id: -1 }).exec();
    res.json(last)
  } catch (error) {
    next(error);
  }
})
// Create grantAccess
Route.route("/create-grantAccess").post(async (req, res, next) => {
  const { employeeName, userID, modules, branches, costVisibility, branchId } = req.body;
  await grantAccessSchema
    .create({ employeeName, userID, modules, branches, costVisibility, branchId })
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
  const { employeeName, userID, modules, branches, costVisibility, branchId } = req.body;
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



// Get single itemReturn


// Update single itemReturn


// Delete single itemReturn



// Delete all itemReturn


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
    const last = await cashSchema.findOne(query).sort({ cashDate: -1 }).exec();
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


// Get single itemPurchase


// Update single itemPurchase


// Delete single itemPurchase




// Delete all itemPurchase



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
    const data = await BlockProduction.find(branchFilter(req)).sort({ date: -1 }).allowDiskUse(true).lean();
    res.json({ data, status: 200 });
  } catch (err) { next(err); }
});
Route.route("/block-production2").get(async (req, res, next) => {
  try {
    const data = await BlockProduction.find(branchFilter(req)).sort({ date: -1 }).allowDiskUse(true).lean();
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

// POST alias â€” frontend may POST with id in body

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
    const data = await BlockDamage.find(branchFilter(req)).sort({ date: -1 }).allowDiskUse(true).lean();
    res.json({ data, status: 200 });
  } catch (err) { next(err); }
});
Route.route("/block-damage2").get(async (req, res, next) => {
  try {
    const data = await BlockDamage.find(branchFilter(req)).sort({ date: -1 }).allowDiskUse(true).lean();
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
    const data = await BlockSales.find(branchFilter(req)).sort({ date: -1 }).allowDiskUse(true).lean();
    res.json({ data, status: 200 });
  } catch (err) { next(err); }
});
Route.route("/block-sales2").get(async (req, res, next) => {
  try {
    const data = await BlockSales.find(branchFilter(req)).sort({ date: -1 }).allowDiskUse(true).lean();
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
    const data = await BlockMixer.find(branchFilter(req)).sort({ date: -1 }).allowDiskUse(true).lean();
    res.json({ data, status: 200 });
  } catch (err) { next(err); }
});
Route.route("/block-mixer2").get(async (req, res, next) => {
  try {
    const data = await BlockMixer.find(branchFilter(req)).sort({ date: -1 }).allowDiskUse(true).lean();
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
// IMAGE ENDPOINT â€” supports lookup by employeeName OR MongoDB _id
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
Route.route("/estimate-Information").get(async (req, res) => {
  try {
    const { page = 1, limit = 100, search = '' } = req.query;
    const skip = (Number(page) - 1) * Number(limit);
    const query = branchFilter(req);
    if (search) {
      const escapedSearch = search.trim().replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      const regex = new RegExp(escapedSearch, 'i');
      query.$or = [{ 'customerName.customerName': regex }, { estimateSubject: regex }];
    }
    const itemI = await estimateSchema.find(query).sort({ _id: -1 }).skip(skip).limit(Number(limit)).lean();
    const totalItem = await estimateSchema.countDocuments(query);
    res.status(200).json({ itemI, totalItem, totalPages: Math.ceil(totalItem / Number(limit)) });
  } catch (error) { res.status(500).json({ message: error.message }); }
});
Route.route("/pos-Information").get(async (req, res) => {
  try {
    const { page = 1, limit = 10, search = '' } = req.query;
    const skip = (Number(page) - 1) * Number(limit);
    const query = branchFilter(req);
    if (search) {
      const escapedSearch = search.trim().replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      const regex = new RegExp(escapedSearch, 'i');
      query.$or = [{ factureNumber: regex }, { status: regex }];
    }
    const itemI = await posSchema.find(query).sort({ _id: -1 }).skip(skip).limit(Number(limit)).populate('customerName');
    const totalItem = await posSchema.countDocuments(query);
    res.status(200).json({ itemI, totalItem, totalPages: Math.ceil(totalItem / Number(limit)) });
  } catch (error) { res.status(500).json({ message: error.message }); }
});
Route.route("/payment-Information").get(async (req, res) => {
  try {
    const { page = 1, limit = 100, search = '' } = req.query;
    const skip = (Number(page) - 1) * Number(limit);
    const query = branchFilter(req);
    if (search) {
      const escapedSearch = search.trim().replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      const regex = new RegExp(escapedSearch, 'i');
      query.$or = [{ description: regex }, { paymentNumber: regex }];
    }
    const itemI = await paymentSchema.find(query).sort({ _id: -1 }).skip(skip).limit(Number(limit)).populate('customerName');
    const totalItem = await paymentSchema.countDocuments(query);
    res.status(200).json({ itemI, totalItem, totalPages: Math.ceil(totalItem / Number(limit)) });
  } catch (error) { res.status(500).json({ message: error.message }); }
});



// ─── SECURE BACKUP EXPORT ENDPOINT ─────────────────────────────────────────
// Called by the daily laptop backup script. Returns all DB collections as JSON.
const BACKUP_SECRET = 'GG_BACKUP_2026_SECURE';
const mongoose_backup = require('mongoose');

Route.get('/backup-export', async (req, res) => {
  try {
    const { secret, col } = req.query;
    if (secret !== BACKUP_SECRET) {
      return res.status(403).json({ error: 'Forbidden' });
    }
    const db = mongoose_backup.connection.db;
    
    if (col) {
      const data = await db.collection(col).find({}).toArray();
      return res.status(200).json({ data });
    }
    
    const collectionsRaw = await db.listCollections().toArray();
    const collections = collectionsRaw.map(c => c.name);
    
    res.status(200).json({
      exportedAt: new Date().toISOString(),
      collections
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


module.exports = Route;


// Trigger Railway restart after MongoDB upgrade

