
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
      enum: [ 'Bank Transfer', 'Cash','Credit','Credit-Account'],
      default: 'Cash'
    },
    paymentDate: {
      type: Date,
      required: true
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
    description: {
      type: String,
      trim: true
    },
    remaining: {
      type: Number,
      trim: true
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