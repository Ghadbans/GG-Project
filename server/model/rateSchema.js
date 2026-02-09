
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const rateSchema = new Schema({
    rate: {
        type: Number,
        trim: true,
      },
  }
  ,
  {
    collection:"Rate"
  }
  );
  
  module.exports = mongoose.model("rateSchema", rateSchema);