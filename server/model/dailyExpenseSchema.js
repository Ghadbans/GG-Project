
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const dailyExpenseSchema = new Schema({
  customerName:{},
  expenseDate: {
      type: Date,
      trim: true,
      required: true
    },
    expenseType: {
      type: String,
      trim: true,
    },
    description: {
      type: String,
      trim: true,
    },
    expenseCategory: {
      type: String,
      trim: true,
    },
    expenseOption: {      type: String,
      trim: true,
    },
    amount: {
      type: Number,
      trim: true, 
    },
    referenceNumber: {
      type: Number,
      trim: true, 
    },
    projectName: {
      type: String,
      trim: true,
    },
    items:[
    ], 
    subTotal: {
      type: Number,
      trim: true,
    },
    rate: {
      type: Number,
      trim: true,
    },
    total: {
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
    },      shipping: {
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
    },adjustment: {
      type: String,
      trim: true,
    },
    CheckTvA: {
      type: Boolean,
      default: false
    },
    tax: {
      type: Number,
      default: 0
    },
    branchId: { type: String, default: 'HQ' },
},
  {
    collection:"dailyExpense"
  }
  );
  module.exports = mongoose.model("dailyExpenseSchema", dailyExpenseSchema);
