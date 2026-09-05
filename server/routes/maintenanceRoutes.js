const express = require("express");
const mongoose = require("mongoose");
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
let maintenanceSchema = require("../model/maintenanceSchema");
let itemOutSchema = require("../model/itemOutSchema");
let itemReturnSchema = require("../model/itemReturnSchema");
let planingSchema = require("../model/planingSchema");
let invoiceSchema = require("../model/invoiceSchema");
let commentSchema = require("../model/commentSchema");
let notificationSchema = require("../model/notificationSchema");
let expenseSchema = require("../model/ExpenseSchema");

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

Route.route("/maintenance", cors(corsOptionsDelegate)).get(
  async (req, res, next) => {
    try {
      const summary = req.query.summary === 'true';
      const projection = {};
      const filter = req.query.branchId && req.query.branchId !== 'ALL' ? { branchId: req.query.branchId } : {};
      if (req.query.customerId) {
        let objectId = null;
        try { objectId = new mongoose.Types.ObjectId(req.query.customerId); } catch (e) {}
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


Route.route('/technician-maintenance-Information').get(async (req, res) => {
  try {
    const { page = 1, limit = 100, search = '', technician, isOffice } = req.query;
    const skip = (Number(page) - 1) * Number(limit);

    const query = { status: { $nin: ['Close', 'Converted', 'Cancel'] } };
    if (isOffice !== 'true' && technician) {
      query.technicianAssign = technician;
    }
    
    if (search) {
      const escapedSearch = search.trim().replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      const regex = new RegExp(escapedSearch, 'i');
      query.$or = [
        ...(!isNaN(Number(search)) ? [{ serviceNumber: Number(search) }] : []),
        { serviceName: regex },
        { status: regex },
        { brand: regex },
        { model: regex },
        { serialNo: regex },
        { note: regex },
        { actionTaken: regex },
        { defectDescription: regex },
        { 'customerName.customerName': regex },
        { 'customerName.customerPhone': regex },
      ].filter(condition => condition !== null);
    }
    
    const itemI = await maintenanceSchema.find(query).sort({ _id: -1 }).allowDiskUse(true).skip(skip).limit(Number(limit)).lean();
    const totalItem = await maintenanceSchema.countDocuments(query);

    res.status(200).json({ itemI, totalItem, totalPages: Math.ceil(totalItem / Number(limit)) });
  } catch (error) {
    console.error('Error fetching technician-maintenance-Information:', error);
    res.status(500).json({ message: error.message });
  }
});

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
    res.json(last);
  } catch (error) {
    next(error);
  }
});

// Create maintenance
Route.route("/create-maintenance").post(async (req, res, next) => {
  const { customerName,serviceNumber,action,
    serviceName,serviceDate,laborQty,totalLaborFeesGenerale,
    technicianAssign,note,totalLaborFees,laborPercentage,totalDiscount,laborDiscount,
    visitDate,status,items,itemDescriptionInfo,brand,actionTaken,model,
    warranty,serialNo,defectDescription,adjustment,adjustmentNumber,
    totalInvoice,subTotal,Create,Converted,ReferenceName,
    includeAssetControl, assetControlReport} = req.body;
  try {
    const branchId = req.body.branchId || req.query.branchId;
    const matchStage = branchId ? { branchId } : {};

    // Use $max aggregation
    const aggResult = await maintenanceSchema.aggregate([
      { $match: matchStage },
      { $group: { _id: null, maxNum: { $max: '$serviceNumber' } } }
    ]);
    const maxServiceNumber = aggResult.length > 0 ? (aggResult[0].maxNum || 0) : 0;

    const finalServiceNumber = (serviceNumber && serviceNumber > maxServiceNumber)
      ? serviceNumber
      : maxServiceNumber + 1;

    const digits = String(finalServiceNumber).padStart(6, '0');
    const finalServiceName = 'M-' + digits;

    const result = await maintenanceSchema.create({
      customerName, serviceNumber: finalServiceNumber,
      serviceName: finalServiceName, serviceDate, laborQty, totalLaborFeesGenerale, action,
      technicianAssign, note, totalLaborFees, laborPercentage, totalDiscount, laborDiscount,
      visitDate, status, items, itemDescriptionInfo, brand, actionTaken, model,
      warranty, serialNo, defectDescription, adjustment, adjustmentNumber,
      totalInvoice, subTotal, Create, Converted, ReferenceName,
      includeAssetControl: !!includeAssetControl,
      assetControlReport: assetControlReport || {},
      branchId
    });
    res.json({ data: result, message: "Data successfully added.", status: 200 });
  } catch (error) {
    next(error);
  }
});

Route.route("/get-maintenance/:id").get(async (req, res, next) => {
  await maintenanceSchema
    .findById(req.params.id)
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


// TECHNICIAN RESTRICTED UPDATE
Route.route('/technician-update-maintenance/:id').put(async (req, res, next) => {
  try {
    const mongoose = require('mongoose');
    const maintenanceModel = mongoose.model('maintenanceSchema');

    const existing = await maintenanceModel.findById(req.params.id);
    if (!existing) {
      return res.status(404).json({ msg: 'Maintenance not found' });
    }
    if (existing.status === 'Close' || existing.Converted) {
      return res.status(403).json({ msg: 'Cannot edit closed or converted maintenance order' });
    }

    // Take items directly from the form — the form already has proper item structure
    // loaded from the DB, so we trust it rather than re-looking-up by ID (which can fail
    // due to branch isolation or collection naming differences).
    const { actionTaken, note, items, status, action } = req.body;

    // Only allow Open or Pending status from tech
    const allowedStatus = (status === 'Pending' || status === 'Open') ? status : 'Open';

    // Build clean items array — preserve real items (with itemName._id) and custom text rows
    const savedItems = [];
    if (Array.isArray(items)) {
      for (const reqItem of items) {
        // Skip completely blank rows (no name and no description)
        const hasName = reqItem.itemName && (reqItem.itemName._id || reqItem.itemName.itemName);
        const hasDesc = reqItem.newDescription !== undefined && reqItem.newDescription !== null;
        if (!hasName && !hasDesc) continue;

        const itemToSave = {
          idRow: reqItem.idRow,
          itemName: reqItem.itemName || { _id: '', itemName: '' },
          itemDescription: reqItem.itemDescription || '',
          itemQty: parseFloat(reqItem.itemQty) || 0,
          itemRate: parseFloat(reqItem.itemRate) || 0,
          itemCost: parseFloat(reqItem.itemCost) || 0,
          itemAmount: parseFloat(reqItem.itemAmount) || 0,
          totalAmount: parseFloat(reqItem.totalAmount) || 0,
          discount: parseFloat(reqItem.discount) || 0,
          percentage: parseFloat(reqItem.percentage) || 0,
          itemBuy: parseFloat(reqItem.itemBuy) || parseFloat(reqItem.itemQty) || 0,
          stock: parseFloat(reqItem.stock) || 0,
        };
        // Only include newDescription if it's actually set (not null/undefined)
        // so the form doesn't mistake real items as blank-description rows
        if (hasDesc) {
          itemToSave.newDescription = reqItem.newDescription;
        }
        savedItems.push(itemToSave);
      }
    }

    const updateData = {
      status: allowedStatus,
      action: action || existing.action,
      actionTaken: actionTaken !== undefined ? actionTaken : existing.actionTaken,
      note: note !== undefined ? note : existing.note,
      items: savedItems,
    };

    const result = await maintenanceModel.findByIdAndUpdate(
      req.params.id,
      { $set: updateData },
      { new: true }
    );

    res.json({
      data: result,
      msg: 'Data successfully updated by Technician.',
    });
  } catch (error) {
    console.error('Technician update error:', error);
    next(error);
  }
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
    const maintenanceData = await maintenanceSchema.findOne({ _id: id }).lean();
    const refName = maintenanceData ? maintenanceData.ReferenceName : null;
    let objectId = null;
    try {
      if (mongoose.Types.ObjectId.isValid(id)) {
        objectId = new mongoose.Types.ObjectId(id);
      }
    } catch (e) {}

    const refQuery = objectId ? { $or: [{ "reference._id": id }, { "reference._id": objectId }] } : { "reference._id": id };
    const projectQuery = objectId ? { $or: [{ "projectName._id": id }, { "projectName._id": objectId }] } : { "projectName._id": id };
    const expenseQuery = objectId ? { $or: [{ "accountNameInfo._id": id }, { "accountNameInfo._id": objectId }] } : { "accountNameInfo._id": id };
    const [itemOuts, itemReturns, planings, invoices, comments, notifications, expenses] = await Promise.all([
      itemOutSchema.find(refQuery).lean(),
      itemReturnSchema.find(refQuery).lean(),
      planingSchema.find(projectQuery).lean(),
      refName ? invoiceSchema.find({ $or: [{ invoiceName: refName }, { ReferenceName: id }] }).lean() : invoiceSchema.find({ ReferenceName: id }).lean(),
      commentSchema.find({ "CommentInfo.idInfo": id }).lean(),
      notificationSchema.find({ idInfo: id }).lean(),
      expenseSchema.find(expenseQuery).lean()
    ]);
    res.json({
      data: {
        itemOuts: itemOuts || [],
        itemReturns: itemReturns || [],
        planings: planings || [],
        invoices: invoices || [],
        comments: comments || [],
        notifications: notifications || [],
        expenses: expenses || []
      },
      message: "Data successfully retrieved.",
      status: 200,
    });
  } catch (error) {
    return next(error);
  }
});

module.exports = Route;
