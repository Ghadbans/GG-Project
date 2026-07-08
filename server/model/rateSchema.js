
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const rateSchema = new Schema({
    rate: {
        type: Number,
        trim: true,
      },
    branchId: { type: String, default: 'HQ' },
}
  ,
  {
    collection:"Rate"
  }
  );
  
  module.exports = mongoose.model("rateSchema", rateSchema);