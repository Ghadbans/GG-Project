
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const recurringInvoiceSchema = new Schema(
    {
      customerID: {
        type: String,
      required: true,
      trim: true,
      },
      customerProfile: {
        type: String,
        trim: true,
      },
      invoiceNumber: {
        type: String,
        required: true,
        trim: true,
      },
      repeat: {
        type: String,
        required: true,
        trim: true,
      },
      invoiceDate: {
        type: Date,
        required: true
      },
      invoiceDueDate: {
        type: Date,
        required: true
      },
      payTerms: {
        type: String,
        trim: true,
      },
      invoiceStatus: {
        type: String,
        trim: true,
      },
      invoiceSubject: {
        type: String,
        trim: true,
      },
      invoiceDefect: {
        type: String,
        trim: true,
      },
      projectName: {
        type: String,
        trim: true,
      },
      status: {
        type: String,
        enum: [ 'Active', 'Close'],
        default: 'Active'
      },
      items:[  ], 
      subTotal: {
        type: Number,
        trim: true,
        required: true
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
        required: true
      },
    },
    {
      collection:"recurringInvoice"
    }
  
  );
  
  module.exports = mongoose.model("recurringInvoiceSchema", recurringInvoiceSchema);