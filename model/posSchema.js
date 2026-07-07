const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const posSchema= new Schema(
    {
      customerName:{},
      factureNumber: {
      type: Number,
      required: true,
      trim: true },
      invoiceDate: {
      type: Date,
      trim: true,
      required: true
      },
      time: {
        type: Date,
        trim: true,
        required: true },
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
        trim: true },
      tax: {
        type: Number,
        trim: true },
      totalUSD: {
        type: Number,
        trim: true },
      rate: {
        type: Number,
        trim: true },
      totalInvoice: {
        type: Number,
        trim: true },
      balanceDue: {
        type: Number,
        trim: true },
      CheckTvA: {
        type: Boolean,
        default: false
      },
      TotalAmountPaid: {
        type: Number,
        trim: true },
      remaining: {
        type: Number,
        trim: true },
      credit: {
        type: Number,
        trim: true },
      creditUsd: {
        type: Number,
        trim: true },
      creditFC: {
        type: Number,
        trim: true },
      note: {
        type: String,
        trim: true },
      Create: {
        type: String,
        trim: true },
        branchId: { type: String, default: 'HQ' } },
    {
      collection:"pos"
    }
  );
  

  
posSchema.index({ branchId: 1, factureNumber: 1 }, { unique: true });

// Attach stock sync hooks
require('./stockUtils').attachStockHooks(posSchema);
module.exports = mongoose.model("posSchema", posSchema);
