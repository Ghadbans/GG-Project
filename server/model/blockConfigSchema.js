const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let blockConfigSchema = new Schema({
    branchId: { type: String },
    blockType: { type: String, default: 'GLOBAL' },
    rentPrice: { type: Number },
    taxesPrice: { type: Number },
    sacksTier1: { type: Number },
    sacksTier2: { type: Number },
    sacksTier3: { type: Number },
    sacksTier4: { type: Number },
    rateTier1: { type: Number },
    rateTier2: { type: Number },
    rateTier3: { type: Number },
    rateTier4: { type: Number },
    rateAbove10: { type: Number },
    materialsList: { type: Array }
}, {
    collection: 'blockconfigschemas'
})

module.exports = mongoose.model('BlockConfigSchema', blockConfigSchema)
