const mongoose = require("mongoose");
const Schema = mongoose.Schema;
let customerSchema = new Schema(
  {
    customerType: {
      type: String,
      trim: true,
    },
    designation: {
      type: String,
      trim: true,
    },
    customerFirstName: {
      type: String,
      trim: true,
    },
    customerLastName: {
      type: String,
      trim: true,
    },
    customerFullName: {
      type: String,
      trim: true
    },
    Customer: {
      type: String,
      trim: true,
      unique:true
    },
    companyName: {
      type: String,
      trim: true,
    },
    customerCompanyPhone: {
      type: String,
      trim: true,
    },
    customerPhone: {
      type: String,
      trim: true,
    },
   credit: {
      type: Number,
      trim: true,
    },
    currency: {
      type: String,
      trim: true,
    },
    paymentTerms: {
      type: String,
      trim: true,
    },
    billingAddress: {
      type: String,
      required: true,
      trim: true,
    },
    billingCity: {
      type: String,
      required: true,
      trim: true,
    },
    shippingAddress: {
      type: String,
      required: true,
      trim: true,
    },
    shippingCity: {
      type: String,
      required: true,
      trim: true,
    },

    customerEmail: {
      type: String,
      trim: true,
    },
    customerDescription:{
      type: String,
      trim: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    Create: {
    }
  },
  {
    collection: "customer",
  }
);

module.exports = mongoose.model("customerSchema", customerSchema);
