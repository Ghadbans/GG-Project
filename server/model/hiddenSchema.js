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
        },
    branchId: { type: String, default: 'HQ' },
},
  {
    collection: "hidden",
  }
);

module.exports = mongoose.model("hiddenSchema", hiddenSchema);
