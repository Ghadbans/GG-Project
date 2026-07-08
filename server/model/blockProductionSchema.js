const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let blockProductionSchema = new Schema({
    branchId: { type: String },
    date: { type: String },
    machine: { type: String },
    operator: { type: String },
    blockType: { type: String },
    sacks: { type: Number },
    totalBlocks: { type: Number },
    helpers: { type: Array }
}, {
    collection: 'blockproductionschemas'
})

module.exports = mongoose.model('BlockProductionSchema', blockProductionSchema)
