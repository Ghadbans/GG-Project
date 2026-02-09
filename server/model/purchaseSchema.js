const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const purchaseSchema = new Schema(
  { 
    customerName: {
    },
   purchaseNumber: {
      type: Number,
      unique: true,
      trim: true,
    },
    purchaseName: {
      type: String,
      required: true,
      trim: true,
      unique:true
    },
      projectName: {
      _id:{
        type: String,
        trim: true,
      },
      projectName:{
       type: String,
       trim: true,
       unique:true
      }
    },
    purchaseDate: {
      type: Date,
      trim: true,
      require: true
      },
      statusInfo: {
        type: String,
        trim: true,
      },
      items:[  ],
      status: {
        type: String,
        trim: true,
      },
      description: {
        type: String,
        trim: true,
       },
      purchaseAmount1: {
        type: Number,
        trim: true,
        minimum: 0,
      },
      purchaseAmount2: {
        type: Number,
        trim: true,
        minimum: 0,
      },
      Create: {
      },ReferenceName: {
        type: String,
        trim: true,
       },ReferenceName2: {
        type: String,
        trim: true,
       }, noteInfo: {
        type: String,
        trim: true,
      },estimateDefect: {
        type: String,
        trim: true,
      },estimateSubject: {
        type: String,
        trim: true,
      }, Position: {
        type: String,
        trim: true,
       }
   
  },
  {
    collection: "purchase",
  }
);

module.exports = mongoose.model("purchaseSchema", purchaseSchema);
