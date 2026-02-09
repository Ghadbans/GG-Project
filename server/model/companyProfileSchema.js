
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const companyProfileSchema = new Schema({
    companyName: {
      type: String,
      trim: true,
      required: true
    },
    logo: {
      type: String,
      trim: true,
      required: true,
    },
    rccm: {
      type: String,
      trim: true,
      required: true
    },
    natId: {
      type: String,
      trim: true,
      required: true
    },
    address: {
      type: String,
      trim: true,
      required: true
    },
    province: {
      type: String,
      trim: true,
      required: true
    },
    country: {
      type: String,
      trim: true,
      required: true
    },
    bankName: {
      type: String,
      trim: true,
      required: true
    },
    entitled: {
      type: String,
      trim: true,
      required: true
    },
    bankAccount: {
      type: String,
      trim: true,
      required: true
    },
    codeSwift: {
      type: String,
      trim: true,
      required: true
    },
    termsCondition: {
      type: String,
      trim: true,
      required: true
    },
    website: {
      type: String,
      trim: true,
      required: true
    },
   
    email: {
      type: String,
      trim: true,
      required: true,
    },
    phone: {
      type: String,
      trim: true,
      required: true
    },
   
  },
  {
    collection:"companyProfile"
  });
module.exports = mongoose.model("companyProfileSchema", companyProfileSchema);