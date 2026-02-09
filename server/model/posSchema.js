const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const posSchema= new Schema(
    {
      customerName:{},
      factureNumber: {
      type: Number,
      required: true,
      trim: true,
      unique:true
      },
      invoiceDate: {
      type: Date,
      trim: true,
      required: true
      },
      time: {
        type: Date,
        trim: true,
        required: true,
      },
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
      totalFC: {
        type: Number,
        trim: true,
      },
      tax: {
        type: Number,
        trim: true,
      },
      totalUSD: {
        type: Number,
        trim: true,
      },
      rate: {
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
      TotalAmountPaid: {
        type: Number,
        trim: true,
      },
      remaining: {
        type: Number,
        trim: true,
      },
      credit: {
        type: Number,
        trim: true,
      },
      creditUsd: {
        type: Number,
        trim: true,
      },
      creditFC: {
        type: Number,
        trim: true,
      },
      note: {
        type: String,
        trim: true,
      },
      Create: {
        type: String,
        trim: true,
      }
    },
    {
      collection:"pos"
    }
  );
  
  module.exports = mongoose.model("posSchema", posSchema);