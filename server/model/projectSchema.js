const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const projectSchema = new Schema(
  {
    projectName: {
      type: String,
      required: true,
      trim: true
    },
    customerName: {},
    status: {
      type: String,
      trim: true,
      set: (v) => {
        if (!v) return 'Pending';
        const upper = String(v).toUpperCase().trim();
        if (upper === 'PENDING') return 'Pending';
        if (upper === 'ON-GOING' || upper === 'ONGOING') return 'On-Going';
        if (upper === 'STOPPED') return 'Stopped';
        if (upper === 'COMPLETED') return 'Completed';
        return v;
      },
      default: 'Pending'
    },
    phase: {
      type: Array,
      default: []
    },
    description: {
      type: String,
      trim: true,
      default: ''
    },
    ReferenceName: {
      type: String,
      trim: true
    },
    ReferenceName2: {
      type: String,
      trim: true
    },
    projectNumber: {
      type: Number,
      required: true,
      trim: true
    },
    startDate: {
      type: Date,
      trim: true
    },
    budget: {
      type: Number,
      trim: true,
      unique: true
    },
    visitDate: {
      type: Date,
      trim: true
    },
    Create: {},
    updateS: {
      type: Boolean,
      default: false
    },
    branchId: { type: String, default: 'HQ' }
  },
  {
    collection: "projects",
    strict: false
  }
);

projectSchema.index({ branchId: 1, projectNumber: 1 }, { unique: true });
projectSchema.index({ branchId: 1, projectName: 1 }, { unique: true });
projectSchema.index({ projectNumber: -1 });
module.exports = mongoose.model("projectSchema", projectSchema);
