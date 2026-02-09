const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const paymentRateSchema = new Schema({
    paymentRate: {
        type: Number,
        trim: true,
      },
  }
  ,
  {
    collection:"paymentRate"
  }
  );
  
  module.exports = mongoose.model("paymentRateSchema", paymentRateSchema);