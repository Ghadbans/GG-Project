
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const SupplierSchema = new Schema({
    supplierName:{
      type: String,
      trim: true,
    },
    storeName:{
      type: String,
      trim: true,
      required: true,
      unique: true
    },
    customerPhone1: {
        type: String,
        trim: true,
      },
    customerPhone2: {
        type: String,
        trim: true,
      },
    address: {
        type: String,
        required: true,
        trim: true,
      },
    description:{
        type: String,
        trim: true,
      },
  }
  ,
  {
    collection:"Supplier"
  }
  );
  
  module.exports = mongoose.model("SupplierSchema", SupplierSchema);