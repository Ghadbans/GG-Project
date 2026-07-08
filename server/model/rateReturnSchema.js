
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const rateReturnSchema = new Schema({
    rateR: {
        type: Number,
        trim: true,
      },
    branchId: { type: String, default: 'HQ' },
}
  ,
  {
    collection:"RateReturn"
  }
  );
  
  module.exports = mongoose.model("rateReturnSchema", rateReturnSchema);