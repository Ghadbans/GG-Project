const mongoose = require('mongoose');
const blockInventoryCountSchema = mongoose.Schema({
    blockType: {
        type: String,
        required: true,
        unique: true
    },
    physicalCount: {
        type: Number,
        required: true
    },
    dateUpdated: {
        type: String
    },
    synced: {
        type: Boolean,
        default: true
    },
    updateS: {
        type: Boolean,
        default: true
    },
    branchId: { type: String, default: 'HQ' }
}, { timestamps: true });
module.exports = mongoose.model("BlockInventoryCount", blockInventoryCountSchema);
