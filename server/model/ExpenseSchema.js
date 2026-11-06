const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const expenseSchema = new Schema(
  {
    expenseDate: {
      type: Date,
      trim: true,
      required: true,
    },
    expenseNumber: {
      type: Number,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      trim: true,
    },
    expenseCategory: {
      type: Schema.Types.Mixed,
    },
    expenseOption: {
      type: String,
      trim: true,
    },
    accountName: {
      type: String,
      trim: true,
      set: (v) => {
        if (!v) return v;
        const upper = String(v).toUpperCase().trim();
        if (upper === 'EMPLOYEE') return 'Employee';
        if (upper === 'OFFICE') return 'Office';
        if (upper === 'PROJECT') return 'Project';
        if (upper === 'MAINTENANCE') return 'Maintenance';
        if (upper === 'RECEIVABLES') return 'Receivables';
        return v;
      },
    },
    accountNameInfo: {
      type: Schema.Types.Mixed,
      default: {},
    },
    reason: {
      type: String,
      trim: true,
      default: '',
    },
    employeeName: {
      type: Array,
      default: [],
    },
    amount: {
      type: Number,
      default: 0,
    },
    rate: {
      type: Number,
      default: 0,
    },
    total: {
      type: Number,
      default: 0,
    },
    Create: {
      type: Schema.Types.Mixed,
    },
    CheckTvA: {
      type: Boolean,
      default: false,
    },
    checkTvA: {
      type: Boolean,
      default: false,
    },
    CheckTva: {
      type: Boolean,
      default: false,
    },
    hasTVA: {
      type: Boolean,
      default: false,
    },
    tva: {
      type: Boolean,
      default: false,
    },
    TVA: {
      type: Boolean,
      default: false,
    },
    tax: {
      type: Number,
      default: 0,
    },
    taxUSD: {
      type: Number,
      default: 0,
    },
    branchId: {
      type: String,
      default: 'HQ',
    },
    synced: {
      type: Boolean,
      default: false,
    },
  },
  {
    collection: "expenseSchema",
    strict: false,
  }
);

expenseSchema.index({ branchId: 1, expenseNumber: 1 }, { unique: true });
expenseSchema.index({ expenseDate: -1 });
expenseSchema.index({ expenseNumber: -1 });

module.exports = mongoose.model("expenseSchema", expenseSchema);
