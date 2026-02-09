const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const itemUnitSchema = new Schema(
  {   
    itemUnit: {
        type: String,
        unique: true,
        trim: true,
      },
  },
  {
    collection: "itemUnit",
  }
);
module.exports = mongoose.model("itemUnitSchema",  itemUnitSchema);