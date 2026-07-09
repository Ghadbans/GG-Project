const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const projectSchema = new Schema(
  {
   
    projectName: {
      type: String,
      required: true,
      trim: true },  
    customerName: {
    },
    status: {
      type: String,
      trim: true },
    phase:[],
    description: {
      type: String,
      trim: true },
    projectNumber: {
        type: Number,
        required: true,
        trim: true },
    startDate: {
      type: Date,
      trim: true },
    budget: {
      type: Number,
      trim: true
  },
    visitDate: {
      type: Date,
      trim: true },Create: {
    },
    branchId: { type: String, default: 'HQ' } },
  {
    collection: "projects" }
);


projectSchema.index({ branchId: 1, projectNumber: 1 }, { unique: true });

module.exports = mongoose.model("projectSchema", projectSchema);
