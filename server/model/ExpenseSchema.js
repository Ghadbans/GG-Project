
const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const expenseSchema = new Schema({
    expenseDate: {
        type: Date,
        trim: true,
        required: true
      },
    expenseNumber: {
      type: Number,
      required: true,
      trim: true,
      unique:true
      },
      description: {
        type: String,
        trim: true,
      },
      expenseCategory: {
      },
      expenseOption: {      
        type: String,
        trim: true,
      },
      accountName: {      
        type: String,
        trim: true,
      },
      reason: {      
        type: String,
        trim: true,
      },
      accountNameInfo: {    
      },
      employeeName:[]
      ,
      amount: {
        type: Number,
        trim: true, 
      },
      rate: {
        type: Number,
        trim: true,
      },
      total: {
        type: Number,
        trim: true,
      },Create: {
      },
    },
    {
      collection:"expenseSchema"
    }
    );
    module.exports = mongoose.model("expenseSchema", expenseSchema);