const express = require("express");
const Route = express.Router();
const deliveryNoteSchema = require("../model/deliveryNoteSchema");
const { isValidObjectId, cleanParamString } = require("../utils/objectIdUtils");

function branchFilter(req) {
  const { branchId } = req.query;
  if (!branchId || branchId === "ALL") return {};
  if (branchId === "HQ") {
    return {
      $or: [
        { branchId: "HQ" },
        { branchId: { $exists: false } },
        { branchId: null },
        { branchId: "" }
      ]
    };
  }
  return { branchId };
}

Route.route("/deliveryNote").get(async (req, res, next) => {
  try {
    const filter = branchFilter(req);
    const cleanRefId = cleanParamString(req.query.referenceId);
    if (cleanRefId) {
      filter["reference._id"] = cleanRefId;
    }
    const result = await deliveryNoteSchema
      .find(filter)
      .sort({ deliveryNumber: -1, _id: -1 })
      .lean();
    res.json({ data: result, message: "Data successfully fetched!", status: 200 });
  } catch (err) {
    return next(err);
  }
});

Route.route("/get-last-saved-deliveryNote").get(async (req, res, next) => {
  try {
    const filter = branchFilter(req);
    const last = await deliveryNoteSchema
      .findOne(filter, { deliveryNumber: 1 })
      .sort({ deliveryNumber: -1 })
      .lean();
    res.json({
      deliveryNumber: last ? Number(last.deliveryNumber || 0) : 0,
      data: last || null
    });
  } catch (err) {
    return next(err);
  }
});

Route.route("/deliveryNote-Information").get(async (req, res, next) => {
  try {
    const {
      page = 1,
      limit = 100,
      search = "",
      status = "ALL",
      branchId
    } = req.query;
    const pageNum = Math.max(1, parseInt(page, 10) || 1);
    const limitNum = Math.max(1, Math.min(200, parseInt(limit, 10) || 100));
    const skip = (pageNum - 1) * limitNum;

    const baseQuery = branchFilter({ query: { branchId } });
    const andConditions = [];
    if (Object.keys(baseQuery).length > 0) {
      andConditions.push(baseQuery);
    }

    if (status && status !== "ALL") {
      const escapedStatus = String(status).trim().replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      andConditions.push({ status: new RegExp("^" + escapedStatus + "$", "i") });
    }

    if (search && String(search).trim()) {
      const trimmed = String(search).trim();
      const escaped = trimmed.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      const rgx = new RegExp(escaped, "i");
      const numClean = trimmed.replace(/^DN[-_\s]*/i, "");
      const searchNum =
        !isNaN(Number(numClean)) && numClean !== "" ? Number(numClean) : null;

      const searchOr = [
        ...(searchNum !== null ? [{ deliveryNumber: searchNum }] : []),
        { deliveryName: rgx },
        { reason: rgx },
        { "reference.referenceName": rgx },
        { "reference.referenceNumber": rgx },
        { "reference.subject": rgx },
        { "customerName.customerName": rgx },
        { driverName: rgx },
        { vehicleNumber: rgx },
        { deliveryAddress: rgx },
        { description: rgx },
        { status: rgx },
        { "itemsQtyArray.itemName.itemName": rgx },
        { "itemsQtyArray.itemDescription": rgx }
      ];
      andConditions.push({ $or: searchOr });
    }

    const finalQuery =
      andConditions.length === 0
        ? {}
        : andConditions.length === 1
        ? andConditions[0]
        : { $and: andConditions };

    const [totalItem, itemI, allCount, dispatchedCount, deliveredCount, cancelledCount] =
      await Promise.all([
        deliveryNoteSchema.countDocuments(finalQuery),
        deliveryNoteSchema
          .find(finalQuery)
          .sort({ deliveryNumber: -1, _id: -1 })
          .skip(skip)
          .limit(limitNum)
          .lean(),
        deliveryNoteSchema.countDocuments(baseQuery),
        deliveryNoteSchema.countDocuments(
          Object.keys(baseQuery).length > 0
            ? { $and: [baseQuery, { status: /^dispatched$/i }] }
            : { status: /^dispatched$/i }
        ),
        deliveryNoteSchema.countDocuments(
          Object.keys(baseQuery).length > 0
            ? { $and: [baseQuery, { status: /^delivered$/i }] }
            : { status: /^delivered$/i }
        ),
        deliveryNoteSchema.countDocuments(
          Object.keys(baseQuery).length > 0
            ? { $and: [baseQuery, { status: /^cancelled$/i }] }
            : { status: /^cancelled$/i }
        )
      ]);

    res.json({
      itemI,
      currentPage: pageNum,
      totalPages: Math.max(1, Math.ceil(totalItem / limitNum)),
      totalItem,
      statusCounts: {
        all: allCount,
        dispatched: dispatchedCount,
        delivered: deliveredCount,
        cancelled: cancelledCount
      }
    });
  } catch (err) {
    return next(err);
  }
});

Route.route("/get-deliveryNote/:id").get(async (req, res, next) => {
  try {
    if (!isValidObjectId(req.params.id)) {
      return res.status(400).json({ message: "Invalid Delivery Note ID." });
    }
    const result = await deliveryNoteSchema.findById(req.params.id).lean();
    if (!result) {
      return res.status(404).json({ message: "Delivery Note not found." });
    }
    res.json({ data: result, message: "Data successfully retrieved.", status: 200 });
  } catch (err) {
    return next(err);
  }
});

Route.route("/create-deliveryNote").post(async (req, res, next) => {
  try {
    const branchId = req.body.branchId || req.query.branchId || "HQ";
    const matchStage =
      branchId === "HQ"
        ? {
            $or: [
              { branchId: "HQ" },
              { branchId: { $exists: false } },
              { branchId: null },
              { branchId: "" }
            ]
          }
        : { branchId };

    const aggResult = await deliveryNoteSchema.aggregate([
      { $match: matchStage },
      { $group: { _id: null, maxNum: { $max: "$deliveryNumber" } } }
    ]);
    const maxNum = aggResult.length > 0 ? Number(aggResult[0].maxNum || 0) : 0;
    const requestedNum = Number(req.body.deliveryNumber || 0);
    const finalNumber = requestedNum > maxNum ? requestedNum : maxNum + 1;
    const deliveryName = "DN-" + String(finalNumber).padStart(6, "0");

    const payload = {
      ...req.body,
      deliveryNumber: finalNumber,
      deliveryName,
      branchId
    };
    delete payload._id;

    const result = await deliveryNoteSchema.create(payload);
    res.json({ data: result, message: "Data successfully added.", status: 200 });
  } catch (err) {
    return next(err);
  }
});

Route.route("/update-deliveryNote/:id").put(async (req, res, next) => {
  try {
    if (!isValidObjectId(req.params.id)) {
      return res.status(400).json({ message: "Invalid Delivery Note ID." });
    }
    const updatePayload = { ...req.body };
    delete updatePayload._id;
    delete updatePayload.__v;
    const result = await deliveryNoteSchema.findByIdAndUpdate(
      req.params.id,
      { $set: updatePayload },
      { new: true }
    );
    res.json({ data: result, msg: "Data successfully updated." });
  } catch (err) {
    return next(err);
  }
});

Route.route("/delete-deliveryNote/:id").delete(async (req, res, next) => {
  try {
    if (!isValidObjectId(req.params.id)) {
      return res.status(400).json({ message: "Invalid Delivery Note ID." });
    }
    await deliveryNoteSchema.findByIdAndDelete(req.params.id);
    res.json({ msg: "Data successfully deleted." });
  } catch (err) {
    return next(err);
  }
});

module.exports = Route;
