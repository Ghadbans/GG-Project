const lockSchema = require('../model/lockSchema');

const verifyLock = async (req, res, next) => {
    // We expect the frontend to send the lock owner's ID in a custom header
    const lockedBy = req.headers['x-lock-user'];
    const documentId = req.params.id; // For update routes, the ID is usually in req.params.id
    
    // Determine collection name from the originalUrl. E.g. /endpoint/update-invoice/123 -> invoice
    let collectionName = 'unknown';
    if (req.originalUrl.includes('update-estimation')) collectionName = 'estimation';
    else if (req.originalUrl.includes('update-invoice')) collectionName = 'invoice';
    else if (req.originalUrl.includes('update-project')) collectionName = 'project';
    else if (req.originalUrl.includes('update-maintenance')) collectionName = 'maintenance';
    else if (req.originalUrl.includes('update-purchaseOrder')) collectionName = 'purchaseOrder';
    else if (req.originalUrl.includes('update-purchase')) collectionName = 'purchase';
    else if (req.originalUrl.includes('update-itemOut')) collectionName = 'itemOut';
    else if (req.originalUrl.includes('update-itemReturn')) collectionName = 'itemReturn';
    else if (req.originalUrl.includes('update-itemPurchase')) collectionName = 'itemPurchase';

    // If it's not a known tracked collection, just continue
    if (collectionName === 'unknown' || !documentId) {
        return next();
    }

    if (!lockedBy) {
        // If frontend doesn't send x-lock-user, we reject it to be safe, or we could just skip if the frontend hasn't been updated yet.
        // Let's reject it to force the frontend to adopt locking.
        return res.status(403).json({ error: "Lock verification failed: Missing x-lock-user header." });
    }

    try {
        const lock = await lockSchema.findOne({ documentId, collectionName });
        
        if (!lock) {
            return res.status(409).json({ error: "Your session expired. This document is no longer locked by you." });
        }

        if (lock.lockedBy !== lockedBy) {
            return res.status(409).json({ error: `Your session expired and another user (${lock.lockedBy}) is now editing this document.` });
        }

        // Lock is valid, proceed
        next();
    } catch (err) {
        res.status(500).json({ error: "Error verifying lock: " + err.message });
    }
};

module.exports = verifyLock;
