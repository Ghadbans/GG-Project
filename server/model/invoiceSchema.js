const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const invoiceSchema= new Schema(
    {
      branchId: {
        type: String,
        trim: true,
        default: 'HQ'
      },
      customerName:{},
      invoiceNumber: {
      type: Number,
      required: true,
      trim: true },
      invoiceName: {
        type: String,
        required: true,
        trim: true,
        unique:true
      },
      invoiceDate: {
      type: Date,
      trim: true,
      required: true
      },
      invoiceDueDate: {
        type: Date,
        trim: true,
        required: true },
      invoiceSubject: {
        type: String,
        trim: true },
      overdue: {
        type: Boolean,
        trim: true },
      daysPastDue: {
        type: Number,
        trim: true },
      invoiceStatus: {
        type: String,
        trim: true },
      invoicePurchase: {
        type: String,
        trim: true },
      invoiceDefect: {
        type: String,
        trim: true },
      status: {
        type: String,
        trim: true,
        enum: ['Draft', 'Sent', 'Decline','Pending','Paid','Partially-Paid','Void','Free of Charge'],
        default: 'Draft'
      },
      items:[  ], 
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
        trim: true },
      terms: {
        type: String,
        trim: true },
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
    }, Ref: {
      _id : {
         type: String,
         trim: true },
    projectName: {
         type: String,
         trim: true }
     },ReferenceName: {
      type: String,
      trim: true },ReferenceName2: {
        type: String,
        trim: true },
       actionTaken: {
        type: String,
        trim: true },
       Position: {
        type: String,
        trim: true }
    },
    {
      collection:"invoice"
    }
  );
  

  
invoiceSchema.index({ branchId: 1, invoiceNumber: 1 }, { unique: true });
invoiceSchema.index({ invoiceDate: -1 });
invoiceSchema.index({ invoiceNumber: -1 });
module.exports = mongoose.model("invoiceSchema", invoiceSchema);