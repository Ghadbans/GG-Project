const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const employeeSchema = new Schema({
  joinDate: {
    type: Date,
    trim: true,
  },
  expireDate: {
    type: Date,
    trim: true,
  },
  employeeName: {
      type: String,
      trim: true,
      required: true,
      unique: true
    },
    employeeAddress: {
      type: String,
      trim: true,
    },
    employeeEmail: {
      type: String,
      trim: true,
      required: true,
    },
    employeePhone: {
      type: String,
      trim: true,
    },
    employeeRole: {
      type: String,
      trim: true,
      required: true
    },
    department: {
      type: String,
      trim: true,
      required: true
    },
    dateOfBirth: {
      type: Date,
      trim: true,
    },
    Gender: {
      type: String,
      trim: true,
    },
    images: {
      type: String,
      trim: true,
    },
    statusMarital: {
      type: String,
      trim: true,
    },
    identifier: {
      type: String,
      trim: true,
    },
    other:{
      type:Number,
      trim: true,
    },
    status:{
      type:String,
      trim: true,
    },
    employeeId: {
      type: String,
      trim: true,
      unique: true
    }, bounceAllowances:{
      type:Number,
      trim: true,
    },  foodBasic:{
      type:Number,
      trim: true,
    },basicTransport:{
      type:Number,
      trim: true,
    },
    bankAccountNumber: {
      type: String,
      trim: true,
    },
    bankName: {
      type: String,
      trim: true,
    },
    identifierNumber: {
      type: String,
      trim: true,
    },
    salary: {
      type: Number,
      trim: true,
    },
    description: {
      type: String,
      trim: true,
    },
    reason1: {
      type: String,
      trim: true,
    }
    ,Create: {
    },
  },
  {
    collection:"employee"
  }
  );

  module.exports = mongoose.model("employeeSchema", employeeSchema);