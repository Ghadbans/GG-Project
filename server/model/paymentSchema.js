
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const paymentSchema = new Schema({
  customerName: {},
  PaymentReceivedFC: {
      type: Number,
      required: true
    },
    PaymentReceivedUSD: {
      type: Number,
      required: true
    },
    amount: {
      type: Number,
      required: true
    },
    // VAT tax amount paid with this payment (frontend now sends proportional tax)
    tax: {
      type: Number,
      default: 0
    },
    bankCharge: {
      type: String,
      trim: true,
    },
    modes: {
      type: String,
      set: (v) => {
        if (!v) return 'Cash';
        const upper = String(v).toUpperCase().trim();
        if (upper === 'CASH') return 'Cash';
        if (upper === 'BANK TRANSFER') return 'Bank Transfer';
        if (upper === 'CREDIT') return 'Credit';
        if (upper === 'CREDIT-ACCOUNT' || upper === 'CREDIT_ACCOUNT') return 'Credit-Account';
        return v;
      },
      enum: ['Bank Transfer', 'Cash','Credit','Credit-Account', 'BANK TRANSFER', 'CASH', 'CREDIT', 'CREDIT-ACCOUNT'],
      default: 'Cash'
    },
    paymentDate: {
      type: Date,
      required: true,
      set: (v) => {
        if (!v) return new Date();
        if (v instanceof Date && !isNaN(v.getTime())) return v;
        if (typeof v === 'object') {
          if (v.$d instanceof Date && !isNaN(v.$d.getTime())) return v.$d;
          if (v['$y'] !== undefined) {
            const d = new Date(Number(v['$y']), Number(v['$M'] !== undefined ? v['$M'] : 0), Number(v['$D'] !== undefined ? v['$D'] : 1), Number(v['$H'] !== undefined ? v['$H'] : 0), Number(v['$m'] !== undefined ? v['$m'] : 0), Number(v['$s'] !== undefined ? v['$s'] : 0));
            if (!isNaN(d.getTime())) return d;
          }
        }
        const d = new Date(v);
        return isNaN(d.getTime()) ? new Date() : d;
      }
    },
    paymentNumber: {
      type: Number,
      trim: true,
      required: true,
      },
    referenceNumber:[],
    TotalAmount:[new Schema({
      prefix: {
        type: String,
        trim: true
      }
    }, { _id: false, strict: false })],
    reason: {
      type: String,
      trim: true
    },
    transactionType: {
      type: String,
      set: (v) => {
        if (!v) return 'Payment';
        const upper = String(v).toUpperCase().trim();
        if (upper === 'PAYMENT') return 'Payment';
        if (upper === 'REFUND') return 'Refund';
        return v;
      },
      enum: ['Payment', 'Refund', 'PAYMENT', 'REFUND'],
      default: 'Payment'
    },
    status: {
      type: String,
      set: (v) => {
        if (!v) return 'Cleared';
        const upper = String(v).toUpperCase().trim();
        if (upper === 'CLEARED') return 'Cleared';
        if (upper === 'PENDING') return 'Pending';
        if (upper === 'VOIDED') return 'Voided';
        return v;
      },
      enum: ['Cleared', 'Pending', 'Voided', 'CLEARED', 'PENDING', 'VOIDED'],
      default: 'Cleared'
    },
    description: {
      type: String,
      trim: true
    },
    remaining: {
      type: Number,
      trim: true,
    },
    excessAction: {
      type: String,
      set: (v) => {
        if (!v) return 'Credit';
        const upper = String(v).toUpperCase().trim();
        if (upper === 'CREDIT') return 'Credit';
        if (upper === 'RETURN') return 'Return';
        return v;
      },
      enum: ['Credit', 'Return', 'CREDIT', 'RETURN'],
      default: 'Credit'
    },
    returnUSD: {
      type: Number,
      default: 0
    },
    returnFC: {
      type: Number,
      default: 0
    },Create: {
    },
    branchId: { type: String, default: 'HQ' },
}
  ,
  {
    collection:"payment"
  }
  );
  
  
paymentSchema.index({ branchId: 1, paymentNumber: 1 }, { unique: true });
paymentSchema.index({ paymentDate: -1 });
paymentSchema.index({ paymentNumber: -1 });
module.exports = mongoose.model("paymentSchema", paymentSchema);