const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const blockMixerSchema = new Schema({
    date: String,
    workerName: String,
    halfDay: Boolean,
    branchId: { type: String, default: 'HQ' },
}, { strict: false, collection: "blockMixer" });

if (mongoose.models && mongoose.models.blockMixerSchema) {
  delete mongoose.models.blockMixerSchema;
}
module.exports = mongoose.model('blockMixerSchema', blockMixerSchema);
