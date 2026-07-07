const mongoose = require("mongoose");
const Schema = mongoose.Schema;

dailyExpensesMonthlyTotalSchema = new Schema({
    expensesMonth: {
        type: String,
        trim: true,
        required: true
      },
    expensesYear: {
        type: Date,
        trim: true
      },
      totalAmount: {
        type: Number,
        required: true
      },
      branchId: { type: String, default: 'HQ' },
}  ,
{
  collection:"DailyExpensesMonthlyTotal"
}
)
module.exports = mongoose.model("dailyExpensesMonthlyTotalSchema", dailyExpensesMonthlyTotalSchema);