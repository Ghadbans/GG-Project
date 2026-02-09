const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const itemPurchaseSchema = new Schema(
  {   
    itemPurchaseDate: {
        type: Date,
        trim: true,
        required: true
    },
    itemPurchaseNumber: {
        type: Number,
        trim: true,
        unique:true
    },
    manufacturer: {
        type: String,
        trim: true,
    },
    manufacturerNumber: {
        type: String,
        trim: true,
    },
    manufacturerID: {
        type: String,
        trim: true,
    },
    items:[],
    description: {
        type: String,
        trim: true,
      },
      status: {
        type: String,
        trim: true,
      },
      reason: {
        type: String,
        trim: true,
      },
      note: {
        type: String,
        trim: true,
      },
      POID: {
        type: String,
        trim: true,
      },
      totalUSD: {
        type: Number,
        trim: true,
      },
    total: {
        type: Number,
        trim: true,
      },
      totalFC: {
        type: Number,
        trim: true,
      },
      projectName: {
      },
      Create: {
      }
  },
  {
    collection: "itemPurchase",
  }
);
module.exports = mongoose.model("itemPurchaseSchema",  itemPurchaseSchema);