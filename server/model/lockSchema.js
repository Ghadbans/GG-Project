const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let lockSchema = new Schema({
    documentId: {
        type: String,
        required: true,
        index: true
    },
    collectionName: {
        type: String,
        required: true
    },
    lockedBy: {
        type: String, // Username or User ID
        required: true
    },
    lockedAt: {
        type: Date,
        default: Date.now
    },
    expiresAt: {
        type: Date,
        required: true,
        index: { expires: 0 } // TTL index: MongoDB automatically deletes document when expiresAt is reached
    }
}, {
    collection: 'locks'
});

// Compound unique index so only one lock per document exists
lockSchema.index({ documentId: 1, collectionName: 1 }, { unique: true });

module.exports = mongoose.model('Lock', lockSchema);
