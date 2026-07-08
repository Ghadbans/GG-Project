const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let blockDamageSchema = new Schema({
    branchId: { type: String },
    date: { type: String },
    machine: { type: String },
    blockType: { type: String },
    quantity: { type: Number }
}, {
    collection: 'blockdamageschemas'
})

module.exports = mongoose.model('BlockDamageSchema', blockDamageSchema)
