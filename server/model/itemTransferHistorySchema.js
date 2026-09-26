const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const itemTransferHistorySchema = new Schema(
  {
    itemId: {
      type: Schema.Types.ObjectId,
      ref: "itemSchema",
      required: true,
    },
    itemName: {
      type: String,
      trim: true,
      required: true,
    },
    fromBranchId: {
      type: String,
      required: true,
      trim: true,
    },
    toItemId: {
      type: Schema.Types.ObjectId,
      ref: "itemSchema",
    },
    toBranchId: {
      type: String,
      required: true,
      trim: true,
    },
    quantity: {
      type: Number,
      required: true,
      min: 0,
    },
    reason: {
      type: String,
      trim: true,
    },
    userId: {
      type: String,
      trim: true,
    },
    userName: {
      type: String,
      trim: true,
    },
    date: {
      type: Date,
      default: Date.now,
    },
    branchId: { type: String, default: 'HQ' }
  },
  {
    collection: "itemTransferHistory",
  }
);



// Attach stock sync hooks
require('./stockUtils').attachStockHooks(itemTransferHistorySchema);
module.exports = mongoose.model("itemTransferHistorySchema", itemTransferHistorySchema);
