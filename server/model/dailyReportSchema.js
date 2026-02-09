const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const dailyReportSchema = new Schema({
    employeeID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Employee',
      required: true
    },
    reportDate: {
      type: Date,
      required: true
    },
    hoursWorked: {
      type: Number,
      required: true
    },
    tasksCompleted: {
      type: String
    },
    comments: {
      type: String
    }
  }
  ,
  {
    collection:"dailyReport"
  }
  );

  module.exports = mongoose.model("dailyReportSchema", dailyReportSchema);