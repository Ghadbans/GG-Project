
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
      unique:true
    },
    referenceNumber:[],
    TotalAmount:[],
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
  }
  ,
  {
    collection:"payment"
  }
  );
  
  module.exports = mongoose.model("paymentSchema", paymentSchema);