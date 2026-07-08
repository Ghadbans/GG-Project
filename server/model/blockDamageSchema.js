const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const blockDamageSchema = new Schema({
    date: String,
    machineNo: String,
    blockType: String,
    damagedBlocks: Number,
    totalCost: Number,
    branchId: { type: String, default: 'HQ' },
}, { strict: false, collection: "blockDamage" });

if (mongoose.models && mongoose.models.blockDamageSchema) {
  delete mongoose.models.blockDamageSchema;
}
module.exports = mongoose.model('blockDamageSchema', blockDamageSchema);
