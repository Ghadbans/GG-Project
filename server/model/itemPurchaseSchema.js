const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const itemPurchaseSchema = new Schema(
  {   
    itemPurchaseDate: { type: Date, required: true },
    itemPurchaseNumber: { type: Number },
    manufacturer: { type: String },
    manufacturerNumber: { type: String },
    manufacturerID: { type: String },
    items: [],
    description: { type: String },
    status: { type: String, default: 'UNPAID' },
    isPaid: { type: Boolean, default: false },
    reason: { type: String },
    note: { type: String },
    POID: { type: String },
    totalUSD: { type: Number },
    total: { type: Number },
    totalFC: { type: Number },
    projectName: {},
    CheckTvA: { type: Boolean, default: false },
    tax: { type: Number, default: 0 },
    Create: {
      userName: { type: String },
      date: { type: Date },
      person: { type: String },
      dateComment: { type: String }
    },
    // THIS IS THE MISSING KEY PART:
    payments: [
      {
        amount: { type: Number },
        amountFC: { type: Number },
        rate: { type: Number },
        totalUSD: { type: Number },
        date: { type: Date },
        mode: { type: String },
        reference: { type: String },
        note: { type: String },
        id: { type: String }
      }
    ],
    totalAmountFC: { type: String },
    branchId: { type: String, default: 'HQ' } },
  {
    collection: "itemPurchase"
  }
);



itemPurchaseSchema.index({ branchId: 1, itemPurchaseNumber: 1 }, { unique: true });

// Attach stock sync hooks
require('./stockUtils').attachStockHooks(itemPurchaseSchema);
module.exports = mongoose.model("itemPurchaseSchema", itemPurchaseSchema);
