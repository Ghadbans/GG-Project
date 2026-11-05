const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const estimationSchema = new Schema(
  {
    customerName:{},
    estimateNumber: {
      type: Number,
      required: true,
      trim: true },
    estimateName: {
      type: String,
      required: true,
      trim: true
    },
    estimateStatus: {
      type: String,
      required: true,
      trim: true },
    estimateDate: {
      type: Date,
      trim: true,
      required: true
    },
    estimateSubject: {
      type: String,
      trim: true }, 
    estimateStatus: {
      type: String,
      trim: true },
    status: {
      type: String,
      trim: true,
      set: (v) => {
        if (!v) return 'Draft';
        const upper = String(v).toUpperCase().trim();
        if (upper === 'DRAFT') return 'Draft';
        if (upper === 'SENT') return 'Sent';
        if (upper === 'DECLINE') return 'Decline';
        if (upper === 'APPROVED') return 'Approved';
        if (upper === 'INVOICED') return 'Invoiced';
        if (upper === 'PENDING') return 'Pending';
        if (upper === 'CONVERTED') return 'Converted';
        return v;
      },
      enum: ['Draft', 'Sent', 'Decline','Approved','Invoiced','Pending','Converted', 'DRAFT', 'SENT', 'DECLINE', 'APPROVED', 'INVOICED', 'PENDING', 'CONVERTED'],
      default: 'Draft'
    },
    items:[ ], 
    subTotal: {
      type: Number,
      trim: true,
      required: true
    },
   
    total: {
      type: Number,
      trim: true },
    shipping: {
      type: Number,
      trim: true },
    adjustmentNumber: {
      type: Number,
      trim: true },
    totalInvoice: {
      type: Number,
      trim: true },
    balanceDue: {
      type: Number,
      trim: true },
    totalW: {
      type: String,
      trim: true },
    adjustment: {
      type: String,
      trim: true },  terms: {
      type: String,
      trim: true },
    estimateDefect: {
      type: String,
      trim: true },
    totalW: {
      type: String,
      trim: true },
    Ref: {
     _id : {
        type: String,
        trim: true },
   projectName: {
        type: String,
        trim: true }
    }
    ,
    note: {
      type: String,
      trim: true },
    noteInfo: {
      type: String,
      trim: true },
    CheckTvA: {
      type: Boolean,
      default: false
    },
    tax: {
      type: Number,
      default: 0
    },
    Create: {
    },ReferenceName: {
      type: String,
      trim: true },
    attachedLetter: {
      type: String,
      trim: true },
    includeLetter: {
      type: Boolean,
      default: false
    },
    branchId: { type: String, default: 'HQ' } },
  {
    collection: "estimation" }
);

estimationSchema.index({ branchId: 1, estimateNumber: 1 }, { unique: true });
estimationSchema.index({ branchId: 1, estimateName: 1 }, { unique: true });
module.exports = mongoose.model("estimationSchema",  estimationSchema);
