
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const dailyExpensesCategorySchema = new Schema({
    expensesCategory: {
        type: String,
        trim: true,
        required: true,
        unique:true
      },
    expensesRate: {
        type: Number,
        trim: true,
      },
  }
  ,
  {
    collection:"expensesCategory"
  }
  );
  
  module.exports = mongoose.model("dailyExpensesCategorySchema", dailyExpensesCategorySchema);