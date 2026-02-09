
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const planingSchema = new Schema({
    employeeName:{
      type: String,
      trim: true,
    },
    employeeID:{
      type: String,
      trim: true,
    },
    reason: {
      type: String,
      trim: true
  },
    planingDate: {
        type: Date,
        trim: true,
        required: true
      },
      dayPayUSd: {
        type: Number,
        trim: true, 
      },
      projectName: {
    },
    status: {
        type: String,
        trim: true,
        default: 'Full-Day'
      },
      workNumber: {
        type: Number,
        trim: true, 
      },
      planingDescription: {
        type: String,
        trim: true,
      },
      planingTask: {
        type: String,
        trim: true,
      },
  }
  ,
  {
    collection:"Planing"
  }
  );
  
  module.exports = mongoose.model("planingSchema", planingSchema);