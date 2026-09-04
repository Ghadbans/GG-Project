const express = require("express");
const Route = express.Router();

function branchFilter(req) {
  const { branchId } = req.query;
  return branchId && branchId !== 'ALL' ? { branchId } : {};
}
const { authenticate } = require("../Middleware/auth");
const cors = require("cors");
const multer = require("multer");
const storage = multer.memoryStorage();
const upload = multer({storage});

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
    const query = branchFilter(req);
    if (branchId && branchId !== 'ALL') query.branchId = branchId;
    if (search.trim()) {
      const rawTerms = search.trim().split(/\s+/);
      query.$and = rawTerms.map(rawTerm => {
        const term = new RegExp(rawTerm, 'i');
        const numTerm = isNaN(Number(rawTerm)) ? null : Number(rawTerm);
        return {
          $or: [
            { itemName: term },
            { itemBrand: term },
            { itemDescription: term },
            { itemCategory: term },
            { itemManufacturer: term },
            { 'itemUpc.newCode': term },
            { 'itemUpc.itemNumber': numTerm },
          ],
        };
      });
    }
    if (filterField && filterValue) {
      query[filterField] = new RegExp(filterValue, 'i');
    }

    const isSummary = req.query.summary === 'true';
    const projection = isSummary ? { itemName: 1, itemCategory: 1, unit: 1, itemSellingPrice: 1, itemCostPrice: 1, itemUpc: 1, _id: 1, itemDescription: 1, itemBrand: 1, itemManufacturer: 1, typeItem: 1 } : {};

    const [itemI, totalItem] = await Promise.all([
      itemSchema.find(query, projection).sort({ _id: -1 }).allowDiskUse(true).skip(skip).limit(Number(limit)),
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
  if (typeItem === "Product") {
    const matchStage = branchId ? { branchId, itemCategory } : { itemCategory };
    const aggResult = await itemSchema.aggregate([
      { $match: matchStage },
      { $group: { _id: null, maxNum: { $max: '$itemUpc.itemNumber' } } }
    ]);
    const maxNum = aggResult.length > 0 ? (aggResult[0].maxNum || 0) : 0;
    const itemNumberInt = parseInt(itemUpc.itemNumber) || 0;
    const finalNumber = (itemNumberInt > maxNum) ? itemNumberInt : maxNum + 1;
    req.body.itemUpc = req.body.itemUpc || {};
    req.body.itemUpc.itemNumber = finalNumber;
  
  
        await itemSchema.create({
          typeItem,itemName,itemStore,unit,itemDimension,
          itemWeight,itemCategory,itemUpc:{
            itemNumber: finalNumber ,
            newCode: itemUpc.newCode
          },itemManufacturer,
          itemBrand,itemCostPrice,
          itemQuantity,itemSellingPrice,itemDescription,
          stockOnHand,Creates,
          branchId
        }).then((result)=>{
          res.json({ data: result, message: "Data successfully added.", status: 200 });
        }).catch((err)=>{
          return next(err);
        });

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

Route.route("/itemOut", cors(corsOptionsDelegate)).get(
  async (req, res, next) => {
    try {
      const filter = req.query.branchId && req.query.branchId !== 'ALL' ? { branchId: req.query.branchId } : {};

      if (req.query.itemId) {
        let objectId = null;
        try { objectId = new mongoose.Types.ObjectId(req.query.itemId); } catch (e) {}
        
        if (objectId) {
          filter['itemsQtyArray'] = { $elemMatch: { 'itemName._id': { $in: [req.query.itemId, objectId] } } };
        } else {
          filter['itemsQtyArray'] = { $elemMatch: { 'itemName._id': req.query.itemId } };
        }
      }

      const result = await itemOutSchema.find(filter).sort({ _id: -1 });
      res.json({ data: result, message: "Data successfully fetched!", status: 200 });
    } catch (err) {
      return next(err);
    }
  }
);

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
    const branchId = req.body.branchId || 'HQ';
    let newOutNumber = req.body.outNumber;
    
    if (newOutNumber !== undefined) {
      const existing = await itemOutSchema.findOne({ branchId, outNumber: newOutNumber }).exec();
      if (existing) {
        const last = await itemOutSchema.findOne({ branchId }).sort({ outNumber: -1 }).exec();
        newOutNumber = last && last.outNumber ? parseInt(last.outNumber) + 1 : 1;
        req.body.outNumber = newOutNumber;
      }
    }

    const result = await itemOutSchema.create(req.body);
    res.json({ data: result, message: "Data successfully added.", status: 200 });
  } catch (err) {
    if (err.code === 11000) {
      return res.status(500).json({ message: "Duplicate Item Out number detected. Please refresh and try again.", error: err });
    }
    return next(err);
  }
});

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

Route.route("/update-itemOut/:id").put(async (req, res, next) => {
  try {
    const result = await itemOutSchema.findByIdAndUpdate(req.params.id, { $set: req.body });
    res.json({ data: result, msg: "Data successfully updated." });
  } catch (err) {
    return next(err);
  }
});

Route.route("/delete-itemOut/:id").delete(async (req, res, next) => {
  try {
    await itemOutSchema.findByIdAndRemove(req.params.id);
    res.json({ msg: "Data successfully updated." });
  } catch (err) {
    return next(err);
  }
});

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

Route.route("/itemReturn", cors(corsOptionsDelegate)).get(
  async (req, res, next) => {
    try {
      const filter = req.query.branchId && req.query.branchId !== 'ALL' ? { branchId: req.query.branchId } : {};

      if (req.query.itemId) {
        let objectId = null;
        try { objectId = new mongoose.Types.ObjectId(req.query.itemId); } catch (e) {}
        
        if (objectId) {
          filter['itemsQtyArray'] = { $elemMatch: { 'itemName._id': { $in: [req.query.itemId, objectId] } } };
        } else {
          filter['itemsQtyArray'] = { $elemMatch: { 'itemName._id': req.query.itemId } };
        }
      }

      const result = await itemReturnSchema.find(filter).sort({ _id: -1 });
      res.json({ data: result, message: "Data successfully fetched!", status: 200 });
    } catch (err) {
      return next(err);
    }
  }
);

Route.route("/itemReturn-Information").get(async (req, res) => {
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
    const itemI = await itemReturnSchema.find(query).sort({ _id: -1 }).allowDiskUse(true).skip(skip).limit(Number(limit)).lean();
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
    const branchId = req.body.branchId || 'HQ';
    let newNumber = req.body.outNumber;
    
    if (newNumber !== undefined) {
      const existing = await itemReturnSchema.findOne({ branchId, outNumber: newNumber }).exec();
      if (existing) {
        const last = await itemReturnSchema.findOne({ branchId }).sort({ outNumber: -1 }).exec();
        newNumber = last && last.outNumber ? parseInt(last.outNumber) + 1 : 1;
        req.body.outNumber = newNumber;
      }
    }

    const result = await itemReturnSchema.create(req.body);
    res.json({ data: result, message: "Data successfully added.", status: 200 });
  } catch (err) {
    if (err.code === 11000) {
      return res.status(500).json({ message: "Duplicate number detected. Please refresh and try again.", error: err });
    }
    return next(err);
  }
});

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

Route.route("/update-itemReturn/:id").put(async (req, res, next) => {
  try {
    const result = await itemReturnSchema.findByIdAndUpdate(req.params.id, { $set: req.body });
    res.json({ data: result, msg: "Data successfully updated." });
  } catch (err) {
    return next(err);
  }
});

Route.route("/delete-itemReturn/:id").delete(async (req, res, next) => {
  try {
    await itemReturnSchema.findByIdAndRemove(req.params.id);
    res.json({ msg: "Data successfully updated." });
  } catch (err) {
    return next(err);
  }
});

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

Route.route("/itemPurchase", cors(corsOptionsDelegate)).get(
  async (req, res, next) => {
    try {
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

        if (req.query.supplierId) {
          let objectId = null;
          try { objectId = new mongoose.Types.ObjectId(req.query.supplierId); } catch (e) {}
          let conditions = [{ manufacturerID: req.query.supplierId }];
          if (objectId) conditions.push({ manufacturerID: objectId });
          if (req.query.supplierName && req.query.supplierName !== 'undefined' && req.query.supplierName.trim()) {
            const rawName = req.query.supplierName.trim();
            const escapedName = rawName.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
            conditions.push({ manufacturer: rawName });
            conditions.push({ manufacturer: new RegExp('^' + escapedName + '$', 'i') });
            conditions.push({ manufacturer: new RegExp(escapedName, 'i') });
          }
          if (req.query.shortName && req.query.shortName !== 'undefined' && req.query.shortName.trim()) {
            const rawShort = req.query.shortName.trim();
            const escapedShort = rawShort.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
            conditions.push({ manufacturer: rawShort });
            conditions.push({ manufacturer: new RegExp('^' + escapedShort + '$', 'i') });
            conditions.push({ manufacturer: new RegExp('^' + escapedShort + '(\\b|[\\s\\.\\,\\-\\_\\/])', 'i') });
            conditions.push({ manufacturer: new RegExp(escapedShort, 'i') });
          }
          filter['$or'] = conditions;

          // Lazy reconciliation: if a valid supplierName is passed, ensure matching itemPurchase records carry the latest storeName and ID
          if (req.query.supplierName && req.query.supplierName !== 'undefined' && req.query.supplierName.trim()) {
            const targetStoreName = req.query.supplierName.trim();
            itemPurchaseSchema.updateMany(
              {
                $and: [
                  { $or: conditions },
                  { $or: [{ manufacturer: { $ne: targetStoreName } }, { manufacturerID: { $ne: String(req.query.supplierId) } }] }
                ]
              },
              { $set: { manufacturer: targetStoreName, manufacturerID: String(req.query.supplierId) } }
            ).catch(err => console.error("Auto sync supplier purchase error:", err));
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

      if (req.query.targetDate) {
        const tDate = new Date(req.query.targetDate);
        const nextDate = new Date(tDate);
        nextDate.setDate(tDate.getDate() + 1);
        filter.payments = {
          $elemMatch: {
            date: { $gte: tDate, $lt: nextDate }
          }
        };
      }
      const result = await itemPurchaseSchema.find(filter, projection).sort({ _id: -1 }).allowDiskUse(true).lean();

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
    const query = branchFilter(req);
    if (branchId && branchId !== 'ALL') query.branchId = branchId;
    if (search) {
      const escapedSearch = search.trim().replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      const regex = new RegExp(escapedSearch, 'i');
      const orConditions = [
        { description: regex },
        { manufacturer: regex },
        { manufacturerNumber: regex },
        { status: regex },
        { note: regex },
        { 'items.itemName': regex },
        { 'items.itemDescription': regex },
        { 'projectName.name': regex },
        { reason: regex }
      ];
      if (!isNaN(Number(search))) {
        orConditions.push({ itemPurchaseNumber: Number(search) });
      }
      query.$or = orConditions;
    }
    if (filterField && filterValue) {
      query[`items.${filterField}`] = new RegExp(filterValue, 'i');
    }
    const itemI = await itemPurchaseSchema.find(query).sort({ _id: -1 }).allowDiskUse(true).skip(skip).limit(Number(limit)).lean();
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
    
      const matchStage = branchId ? { branchId } : {};
      const aggResult = await itemPurchaseSchema.aggregate([
        { $match: matchStage },
        { $group: { _id: null, maxNum: { $max: '$itemPurchaseNumber' } } }
      ]);
      const maxNum = aggResult.length > 0 ? (aggResult[0].maxNum || 0) : 0;
      const finalNumber = (itemPurchaseNumber && itemPurchaseNumber > maxNum) ? itemPurchaseNumber : maxNum + 1;
      req.body.itemPurchaseNumber = finalNumber;

    for( const purchaseItem of items) {
      if (purchaseItem.itemRate !== 0 && purchaseItem.itemName && purchaseItem.itemName._id) {
        await itemSchema.updateOne({_id:purchaseItem.itemName._id},{$set: {itemCostPrice : purchaseItem.itemRate}})
      } 
    }
    
      await itemPurchaseSchema.create(req.body).then((result)=>{
        res.json({ data: result, message: "Data successfully added.", status: 200 });
      }).catch((err)=>{
        return next(err);
      });



   } catch (error) {
    next(error);
   }

});

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

Route.route("/update-itemPurchase/:id").put(async (req, res, next) => {
  const {items} = req.body
  try {
    if (items !== undefined){
      for( const purchaseItem of items) {
        if (purchaseItem.itemRate !== 0 && purchaseItem.itemName && purchaseItem.itemName._id) {
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

Route.route("/delete-itemPurchase/:id").post(deleteItemPurchaseHandler).delete(deleteItemPurchaseHandler);

Route.route("/delete-itemPurchase").post(deleteItemPurchaseHandler).delete(deleteItemPurchaseHandler);

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

Route.route("/itemOut-Information").get(async (req, res) => {
  try {
    const { page = 1, limit = 100, search = '', filterField, filterValue } = req.query;
    const skip = (Number(page) - 1) * Number(limit);

    // Build the query object dynamically based on the filters
    const query = branchFilter(req);
    if (search) {
      const escapedSearch = search.trim().replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      const regex = new RegExp(escapedSearch, 'i');
      query.$or = [
        ...(!isNaN(Number(search)) ? [{ outNumber: Number(search) }] : []),
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
    const itemI = await itemOutSchema.find(query).sort({ _id: -1 }).skip(skip).limit(Number(limit)).lean();
    const totalItem = await itemOutSchema.countDocuments(query);

    res.status(200).json({ itemI, totalItem, totalPages: Math.ceil(totalItem / Number(limit)) });
  } catch (error) {
    console.error("Error fetching itemOut-Information:", error); // Log the error for debugging
    res.status(500).json({ message: error.message });
  }
});


async function deleteItemPurchaseHandler(req, res, next) {
  try {
    const id = req.body.id || req.params.id;
    await itemPurchaseSchema.findByIdAndRemove(id);
    res.json({ msg: "Data successfully updated." });
  } catch (err) {
    return next(err);
  }
};

module.exports = Route;
