const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const itemOutSchema = new Schema(
  {   
    outNumber:{
      type:Number,
      trim: true },

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
    description: {
        type: String,
        trim: true },
      Create: {
      },
    branchId: { type: String, default: 'HQ' } },
  {
    collection: "itemOut" }
);



itemOutSchema.index({ branchId: 1, outNumber: 1 });

// Attach stock sync hooks
require('./stockUtils').attachStockHooks(itemOutSchema);
module.exports = mongoose.model("itemOutSchema",  itemOutSchema);
