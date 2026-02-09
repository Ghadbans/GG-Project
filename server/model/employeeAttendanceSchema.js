const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const employeeAttendanceSchema = new Schema({
  timeIn: {
      type: Date,
      trim: true,
      required: true
    },
    timeOut: {
      type: Date,
      trim: true,
      required: true
    },
    id: {
      type: String,
      trim: true,
    },
    name: {
      type: String,
      trim: true,
    },
    observation: {
      type: String,
      trim: true,
    },
    note: {
      type: String,
      trim: true,
    },
    daysWN: {
      type: Number,
      trim: true,
    },
  },
  {
    collection:"employeeAttendance"
  }
  );
  
  module.exports = mongoose.model("employeeAttendanceSchema", employeeAttendanceSchema);