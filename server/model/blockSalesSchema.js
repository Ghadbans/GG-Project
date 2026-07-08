const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const blockSalesSchema = new Schema({
    date: String,
    clientName: String,
    blockType: String,
    quantity: Number,
    totalAmount: Number,
    branchId: { type: String, default: 'HQ' },
}, { strict: false, collection: "blockSales" });

if (mongoose.models && mongoose.models.blockSalesSchema) {
  delete mongoose.models.blockSalesSchema;
}
module.exports = mongoose.model('blockSalesSchema', blockSalesSchema);
