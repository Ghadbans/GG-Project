const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const itemCodeSchema = new Schema(
  {   
  itemCode: {
    type: String,
    unique: true,
    trim: true,
  },
    itemCategory: {
        type: String,
        unique: true,
        trim: true,
      },
  },
  {
    collection: "itemCode",
  }
);
module.exports = mongoose.model("itemCodeSchema",  itemCodeSchema);