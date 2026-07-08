const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const paymentRateSchema = new Schema({
    paymentRate: {
        type: Number,
        trim: true,
      },
    branchId: { type: String, default: 'HQ' },
}
  ,
  {
    collection:"paymentRate"
  }
  );
  
  module.exports = mongoose.model("paymentRateSchema", paymentRateSchema);