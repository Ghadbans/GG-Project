const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const hiddenSchema = new Schema(
  { 
    idRow: {
        type: String,
        trim: true,
        unique: true
        },
    hiddenByCEO:{
      type: Boolean,
      trim: true,
        }
  },
  {
    collection: "hidden",
  }
);

module.exports = mongoose.model("hiddenSchema", hiddenSchema);