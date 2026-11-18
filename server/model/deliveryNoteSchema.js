const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const deliveryNoteSchema = new Schema(
  {
    deliveryNumber: {
      type: Number,
      required: true,
      trim: true
    },
    deliveryName: {
      type: String,
      trim: true
    },
    deliveryDate: {
      type: Date,
      required: true
    },
    reason: {
      type: String,
      enum: ["Invoice", "Project"],
      required: true,
      trim: true
    },
    reference: {
      _id: { type: String, trim: true },
      referenceName: { type: String, trim: true },
      referenceNumber: { type: String, trim: true },
      subject: { type: String, trim: true }
    },
    customerName: {
      _id: { type: String, trim: true },
      customerName: { type: String, trim: true },
      phone: { type: String, trim: true },
      address: { type: String, trim: true }
    },
    itemsQtyArray: {
      type: Array,
      default: []
    },
    driverName: {
      type: String,
      trim: true,
      default: ""
    },
    vehicleNumber: {
      type: String,
      trim: true,
      default: ""
    },
    deliveryAddress: {
      type: String,
      trim: true,
      default: ""
    },
    description: {
      type: String,
      trim: true,
      default: ""
    },
    status: {
      type: String,
      enum: ["Dispatched", "Delivered", "Cancelled"],
      default: "Dispatched",
      trim: true
    },
    Create: {},
    branchId: { type: String, default: "HQ" }
  },
  {
    collection: "deliveryNote",
    strict: false,
    timestamps: true
  }
);

deliveryNoteSchema.index({ branchId: 1, deliveryNumber: 1 }, { unique: true });
deliveryNoteSchema.index({ "reference._id": 1 });
deliveryNoteSchema.index({ deliveryDate: -1 });
deliveryNoteSchema.index({ deliveryNumber: -1 });

module.exports = mongoose.model("deliveryNoteSchema", deliveryNoteSchema);
