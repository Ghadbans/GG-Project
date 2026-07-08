const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const itemReturnSchema = new Schema(
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
      collection: "itemReturn" }
  );


  
itemReturnSchema.index({ branchId: 1, outNumber: 1 }, { unique: true });

// Attach stock sync hooks
require('./stockUtils').attachStockHooks(itemReturnSchema);
module.exports = mongoose.model("itemReturnSchema",  itemReturnSchema);
