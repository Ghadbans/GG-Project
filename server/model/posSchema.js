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
      set: (v) => {
        if (!v) return 'Draft';
        const upper = String(v).toUpperCase().trim();
        if (upper === 'DRAFT') return 'Draft';
        if (upper === 'SENT') return 'Sent';
        if (upper === 'DECLINE') return 'Decline';
        if (upper === 'PENDING') return 'Pending';
        if (upper === 'PAID') return 'Paid';
        if (upper === 'PARTIALLY-PAID' || upper === 'PARTIALLY_PAID') return 'Partially-Paid';
        if (upper === 'VOID') return 'Void';
        if (upper === 'FREE OF CHARGE') return 'Free of Charge';
        if (upper === 'REFUNDED') return 'Refunded';
        if (upper === 'PARTIALLY-REFUNDED' || upper === 'PARTIALLY_REFUNDED') return 'Partially-Refunded';
        return v;
      },
      enum: [
        'Draft', 'Sent', 'Decline','Pending','Paid','Partially-Paid','Void','Free of Charge','Refunded','Partially-Refunded',
        'DRAFT', 'SENT', 'DECLINE', 'PENDING', 'PAID', 'PARTIALLY-PAID', 'VOID', 'FREE OF CHARGE', 'REFUNDED', 'PARTIALLY-REFUNDED'
      ],
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
      refundedAmountFC: {
        type: Number,
        default: 0
      },
      refundedAmountUSD: {
        type: Number,
        default: 0
      },
      refundedCashFC: {
        type: Number,
        default: 0
      },
      refundedCashUSD: {
        type: Number,
        default: 0
      },
      branchId: { type: String, default: 'HQ' } },
    {
      collection:"pos"
    }
  );
  

  
posSchema.index({ branchId: 1, factureNumber: 1 }, { unique: true });

// Attach stock sync hooks
require('./stockUtils').attachStockHooks(posSchema);
posSchema.index({ invoiceDate: -1 });
posSchema.index({ factureNumber: -1 });
module.exports = mongoose.model("posSchema", posSchema);
