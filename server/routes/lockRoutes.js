const express = require('express');
const Route = express.Router();
const cors = require('cors');
const lockSchema = require('../model/lockSchema');

// Cross-Origin configuration
const corsOptionsDelegate = function (req, callback) {
    const corsOptions = { origin: true };
    callback(null, corsOptions);
};

// Acquire a lock
Route.route("/acquire").post(cors(corsOptionsDelegate), async (req, res) => {
    const { documentId, collectionName, lockedBy } = req.body;
    
    if (!documentId || !collectionName || !lockedBy) {
        return res.status(400).json({ error: "Missing required fields" });
    }

    try {
        // Expiration time: 60 seconds from now
        const expiresAt = new Date(Date.now() + 60000);

        // Check if an active lock exists
        const existingLock = await lockSchema.findOne({ documentId, collectionName });
        
        if (existingLock) {
            // If the same user holds the lock, just extend it
            if (existingLock.lockedBy === lockedBy) {
                existingLock.expiresAt = expiresAt;
                await existingLock.save();
                return res.status(200).json({ msg: "Lock extended", lock: existingLock });
            } else {
                return res.status(409).json({ error: `This document is currently being edited by ${existingLock.lockedBy}.` });
            }
        }

        // Create new lock
        const newLock = await lockSchema.create({ documentId, collectionName, lockedBy, expiresAt });
        res.status(200).json({ msg: "Lock acquired", lock: newLock });

    } catch (err) {
        // If duplicate key error (11000) occurs, someone else just grabbed it
        if (err.code === 11000) {
            return res.status(409).json({ error: "This document is currently being edited by another user." });
        }
        res.status(500).json({ error: err.message });
    }
});

// Heartbeat to extend a lock
Route.route("/heartbeat").post(cors(corsOptionsDelegate), async (req, res) => {
    const { documentId, collectionName, lockedBy } = req.body;

    try {
        const expiresAt = new Date(Date.now() + 60000);
        
        // Find the exact lock
        const lock = await lockSchema.findOneAndUpdate(
            { documentId, collectionName, lockedBy },
            { $set: { expiresAt: expiresAt } },
            { new: true }
        );

        if (!lock) {
            // Lock was either lost, expired and deleted by TTL, or taken by someone else
            const existingLock = await lockSchema.findOne({ documentId, collectionName });
            if (existingLock) {
                return res.status(409).json({ error: `Lock lost. Document is now being edited by ${existingLock.lockedBy}.` });
            } else {
                return res.status(404).json({ error: "Lock expired or not found." });
            }
        }

        res.status(200).json({ msg: "Heartbeat successful", lock });

    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Release a lock
Route.route("/release").post(cors(corsOptionsDelegate), async (req, res) => {
    const { documentId, collectionName, lockedBy, force } = req.body;

    try {
        if (force === true) {
            // Force release: Admin clears any lock on this document regardless of who holds it
            await lockSchema.findOneAndDelete({ documentId, collectionName });
            return res.status(200).json({ msg: "Lock force released" });
        }
        await lockSchema.findOneAndDelete({ documentId, collectionName, lockedBy });
        res.status(200).json({ msg: "Lock released" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Force-release any lock on a document (Admin only - no auth check here, frontend controls access)
Route.route("/force-release").post(cors(corsOptionsDelegate), async (req, res) => {
    const { documentId, collectionName } = req.body;
    try {
        await lockSchema.deleteMany({ documentId, collectionName });
        res.status(200).json({ msg: "All locks force released" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = Route;
