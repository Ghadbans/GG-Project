
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
    branchId: { type: String, default: 'HQ' },
}
  ,
  {
    collection:"expensesCategory"
  }
  );
  
  module.exports = mongoose.model("dailyExpensesCategorySchema", dailyExpensesCategorySchema);