const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const itemReturnSchema = new Schema(
    {   
      outNumber:{
        type:Number,
        trim: true,
        unique:true
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
      description: {
          type: String,
          trim: true,
        },
        Create: {
        }
    },
    {
      collection: "itemReturn",
    }
  );
  module.exports = mongoose.model("itemReturnSchema",  itemReturnSchema);