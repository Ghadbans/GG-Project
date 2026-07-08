const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let blockSalesSchema = new Schema({
    branchId: { type: String },
    date: { type: String },
    clientName: { type: String },
    blockType: { type: String },
    quantity: { type: Number },
    unitPrice: { type: Number }
}, {
    collection: 'blocksalesschemas'
})

module.exports = mongoose.model('BlockSalesSchema', blockSalesSchema)
