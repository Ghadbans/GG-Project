const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const retainerInvoiceSchema= new Schema(
    {
     customerID: {
      type: String,
      required: true,
      trim: true,
      },
      invoiceNumber: {
        type: String,
        required: true,
        unique: true,
        trim: true,
      },
      referenceNumber: {
        type: String,
        trim: true,
      },
      invoiceDate: {
        type: Date,
        required: true
      },
      invoiceSubject: {
        type: String,
        trim: true,
      },
      invoiceStatus: {
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
        enum: ['Paid-Partially', 'Paid'],
        default: 'Paid-Partially'
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
      },

    },
    {
      collection:"retainerInvoice"
    }
  );

  module.exports = mongoose.model("retainerInvoiceSchema", retainerInvoiceSchema);