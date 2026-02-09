const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const payRollSchema = new Schema(
    {  
    payNumber:{
            type:Number,
            trim: true,
          },
      payDate: {
          type: Date,
          trim: true,
          required: true
      },
      month: {
          type: Date,
          trim: true,
          required: true
      },
      daysW:{
          type:Number,
          trim: true,
        },
        daysOpen:{
          type:Number,
          trim: true,
        },
        Lops:{
          type:Number,
          trim: true,
        },
        basicSalary:{
          type:Number,
          trim: true,
        },
        earningSalary:{
          type:Number,
          trim: true,
        },
        advancedSalary:{
          type:Number,
          trim: true,
        },
        basicTransport:{
          type:Number,
          trim: true,
        },
        transportEarning:{
          type:Number,
          trim: true,
        },
        transportDeduction:{
          type:Number,
          trim: true,
        },
        foodBasic:{
          type:Number,
          trim: true,
        },
        foodEarning:{
          type:Number,
          trim: true,
        },
        itemLost:{
          type:Number,
          trim: true,
        },
        foodDeduction:{
          type:Number,
          trim: true,
        },
        bounceAllowances:{
          type:Number,
          trim: true,
        },
        bounceAllowancesEarning:{
          type:Number,
          trim: true,
        },
        other:{
          type:Number,
          trim: true,
        },
        otherEarning:{
          type:Number,
          trim: true,
        },
        loan:{
          type:Number,
          trim: true,
        },
        bonus:{
          type:Number,
          trim: true,
        },
        totalActualSalary:{
          type:Number,
          trim: true,
        },
        totalActualEarning:{
          type:Number,
          trim: true,
        },
        totalActualDeduction:{
          type:Number,
          trim: true,
        },
        totalNet:{
          type:Number,
          trim: true,
        },
        totalPaid:{
          type:Number,
          trim: true,
        },
        rate:{
          type:Number,
          trim: true,
        },
        totalPaidDollars:{
          type:Number,
          trim: true,
        },
        amountPayUSD:{
          type:Number,
          trim: true,
        },
        amountPayFC:{
          type:Number,
          trim: true,
        },
        CreditUSD:{
          type:Number,
          trim: true,
        },
        CreditFC:{
          type:Number,
          trim: true,
        },
        status:{
          type:String,
          trim: true,
        },
        words:{
          type:String,
          trim: true,
        },
        employeeName: {
        },
        Create: {
        }
    },
    {
      collection: "payRoll",
    }
  );
  module.exports = mongoose.model("payRollSchema",  payRollSchema);