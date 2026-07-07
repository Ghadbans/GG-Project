const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const quotationSchema = new Schema(
  {
    customerName: {},
    quotationNumber: {
      type: Number,
      required: true,
      trim: true,
      },
    quotationName: {
      type: String,
      required: true,
      trim: true,
      },
    quotationDate: {
      type: Date,
      trim: true,
      required: true
    },
    quotationSubject: {
      type: String,
      trim: true,
    },
    quotationDefect: {
      type: String,
      trim: true,
    },
    status: {
      type: String,
      trim: true,
      enum: ['Draft', 'Sent', 'Decline', 'Approved', 'Invoiced', 'Pending', 'Converted'],
      default: 'Draft'
    },
    items: [],
    subTotal: {
      type: Number,
      trim: true,
      required: true
    },
    total: {
      type: Number,
      trim: true,
    },
    shipping: {
      type: Number,
      trim: true,
    },
    adjustmentNumber: {
      type: Number,
      trim: true,
    },
    totalInvoice: {
      type: Number,
      trim: true,
    },
    balanceDue: {
      type: Number,
      trim: true,
    },
    totalW: {
      type: String,
      trim: true,
    },
    adjustment: {
      type: String,
      trim: true,
    },
    terms: {
      type: String,
      trim: true,
    },
    note: {
      type: String,
      trim: true,
    },
    noteInfo: {
      type: String,
      trim: true,
    },
    attachedLetter: {
      type: String,
      trim: true,
    },
    includeLetter: {
      type: Boolean,
      default: false
    },
    CheckTvA: {
      type: Boolean,
      default: false
    },
    tax: {
      type: Number,
      default: 0
    },
    Create: {},
    Ref: {
      _id: {
        type: String,
        trim: true,
      },
      projectName: {
        type: String,
        trim: true,
      }
    },
    ReferenceName: {
      type: String,
      trim: true,
    },
    branchId: { type: String, trim: true },
    estimateNumber: { type: Number, trim: true },
    estimateSubject: { type: String, trim: true },
    estimateDefect: { type: String, trim: true },
    estimateName: { type: String, trim: true },
  },
  {
    collection: "estimation",
  }
);


quotationSchema.index({ branchId: 1, quotationNumber: 1 }, { unique: true });
quotationSchema.index({ branchId: 1, quotationName: 1 }, { unique: true });
module.exports = mongoose.model("quotationSchema", quotationSchema);
