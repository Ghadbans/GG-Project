const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const blockProductionSchema = new Schema({
    date: { type: String, required: true },
    machineNo: String,
    operatorName: String,
    blockType: String,
    sacksUsed: Number,
    sackDetails: [Number],
    totalBlocks: Number,
    laborPot: Number,
    overheadSnapshot: Number,
    totalCost: Number,
    branchId: { type: String, default: 'HQ' },
}, { strict: false, collection: "blockProduction" });

if (mongoose.models && mongoose.models.blockProductionSchema) {
  delete mongoose.models.blockProductionSchema;
}
module.exports = mongoose.model('blockProductionSchema', blockProductionSchema);
