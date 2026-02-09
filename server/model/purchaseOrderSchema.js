const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const purchaseOrderSchema = new Schema(
  {   
    outNumber:{
      type:Number,
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
    itemOutDate: {
        type: Date,
        trim: true,
        required: true
    },
    reason: {
        type: String,
        trim: true,
        required: true
    },
    reference: {
      },  
      itemsQtyArray:[

    ],  
   manufacturer: {
      type: String,
      trim: true,
  },
   status: {
      type: String,
      trim: true,
  },
   Converted: {
      type: Boolean
  },
  manufacturerNumber: {
      type: String,
      trim: true,
  },
    description: {
        type: String,
        trim: true,
      },
      IpRelated: {
      },
      Create: {
      }
  },
  {
    collection: "PurchaseOrder",
  }
);
module.exports = mongoose.model("purchaseOrderSchema",  purchaseOrderSchema);