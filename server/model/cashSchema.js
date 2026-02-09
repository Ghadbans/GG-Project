const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const cashSchema = new Schema(
  { 
    cashDate: {
        type: Date,
        trim: true,
        required: true
    },
    status:{
        type: String,
        trim: true, 
},
    cashNumber:{
        type: Number,
        trim: true, 
},
totalCash:{
        type: Number,
        trim: true, 
},
 amount:[

 ],
 totalItemPurchaseUSD:{
  type: Number,
  trim: true, 
},
 totalPayrollUSD:{
  type: Number,
  trim: true, 
},
totalExpensesUSD:{
      type: Number,
      trim: true, 
},
totalExpensesFC:{
      type: Number,
      trim: true, 
},
totalCashUSD:{
      type: Number,
      trim: true, 
},
totalCashFC:{
      type: Number,
      trim: true, 
},
returnAmountFC:{
      type: Number,
      trim: true, 
},
returnAmountUSD:{
      type: Number,
      trim: true, 
},
RemainingAmountFC:{
      type: Number,
      trim: true, 
},
RemainingAmountUSD:{
      type: Number,
      trim: true, 
},
totalPaymentFC:{
      type: Number,
      trim: true, 
},
totalPaymentUSD:{
      type: Number,
      trim: true, 
},
totalPayRollDailyFC:{
      type: Number,
      trim: true, 
},
    Create:{

    }
  },
  {
    collection: "cash",
  }
);

module.exports = mongoose.model("cashSchema", cashSchema);