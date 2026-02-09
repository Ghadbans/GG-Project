const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const projectSchema = new Schema(
  {
   
    projectName: {
      type: String,
      required: true,
      trim: true,
      unique:true
    },  
    customerName: {
    },
    status: {
      type: String,
      trim: true,
    },
    phase:[],
    description: {
      type: String,
      trim: true,
    },
    projectNumber: {
        type: Number,
        required: true,
        trim: true,
        unique:true
    },
    startDate: {
      type: Date,
      trim: true,
    },
    budget: {
      type: Number,
      trim: true,
      unique:true
  },
    visitDate: {
      type: Date,
      trim: true,
    },Create: {
    },
  },
  {
    collection: "projects",
  }
);

module.exports = mongoose.model("projectSchema", projectSchema);
