const Fleet = require('../model/fleetSchema');

// Create a new car
exports.createFleet = async (req, res) => {
    try {
        const { carMake, carModel, plateNumber, chassisNumber, vehicleColor, vehicleImage, status, branchId } = req.body;
        
        const newFleet = new Fleet({
            carMake,
            carModel,
            plateNumber,
            chassisNumber,
            vehicleColor: vehicleColor || '',
            vehicleImage: vehicleImage || '',
            status,
            branchId
        });

        const savedFleet = await newFleet.save();
        res.status(201).json(savedFleet);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get all cars with pagination and search
exports.getAllFleets = async (req, res) => {
    try {
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 100;
        const search = req.query.search || "";
        const branchId = req.query.branchId || "HQ"; // or whatever branch logic
        
        let query = {};
        
        if (search && search.trim()) {
            const raw = search.trim();
            const cleanAlphanumeric = raw.replace(/[^a-zA-Z0-9]/g, '');
            const tokens = raw.split(/\s+/).filter(Boolean);

            // Every token must match at least one field (AND of ORs) for multi-term searches like "ALPHARD BLACK"
            const tokenConditions = tokens.map(t => {
                const escaped = t.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
                return {
                    $or: [
                        { carMake: { $regex: escaped, $options: "i" } },
                        { carModel: { $regex: escaped, $options: "i" } },
                        { plateNumber: { $regex: escaped, $options: "i" } },
                        { vehicleColor: { $regex: escaped, $options: "i" } },
                        { chassisNumber: { $regex: escaped, $options: "i" } },
                        { branchId: { $regex: escaped, $options: "i" } },
                        { status: { $regex: escaped, $options: "i" } }
                    ]
                };
            });

            const orConditions = [
                { $and: tokenConditions },
                { plateNumber: { $regex: raw.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), $options: "i" } }
            ];

            if (cleanAlphanumeric.length >= 3) {
                // Allows searching "6091AA24" to match "6091 AA 24" or searching "6091 AA 24" to match "6091AA24"
                const flexPattern = cleanAlphanumeric.split('').map(c => c.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('[\\s\\-_]*');
                orConditions.push({ plateNumber: { $regex: flexPattern, $options: "i" } });
            }

            query = { $or: orConditions };
        }

        const fleets = await Fleet.find(query)
            .skip((page - 1) * limit)
            .limit(limit)
            .sort({ createdAt: -1 });

        const total = await Fleet.countDocuments(query);

        // Auto-backfill vehicleColor if empty or more specific in chassisNumber (e.g. "OLIVE GREEN")
        const COLOR_REGEX = /^(olive\s*green|navy\s*blue|dark\s*(blue|grey|gray|green|red)|light\s*(blue|grey|gray|green)|pearl\s*white|matte\s*black|black|white|grey|gray|silver|red|blue|green|yellow|brown|gold|orange|beige|olive|navy|charcoal|burgundy|bronze|champagne|noir|blanc|gris|rouge|bleu|vert|jaune)$/i;
        for (let car of fleets) {
            if (car.chassisNumber && COLOR_REGEX.test(car.chassisNumber.trim())) {
                const detected = car.chassisNumber.trim();
                const cur = (car.vehicleColor || '').trim();
                if (!cur || cur.toUpperCase() === 'N/A' || (detected.toLowerCase().includes(cur.toLowerCase()) && detected.length > cur.length)) {
                    car.vehicleColor = detected;
                    Fleet.findByIdAndUpdate(car._id, { vehicleColor: detected }).catch(err => console.error("Color backfill error:", err));
                }
            }
        }

        // --- Notifications Check ---
        const Notification = require('../model/notificationSchema');
        const now = new Date();
        const next7Days = new Date();
        next7Days.setDate(now.getDate() + 7);

        for (let car of fleets) {
            if (car.status === 'Running' && car.documents && car.documents.length > 0) {
                for (let doc of car.documents) {
                    if (!doc.isPaid && new Date(doc.expiryDate) <= next7Days) {
                        // Check if notification already exists to prevent spam
                        const exists = await Notification.findOne({
                            idInfo: car._id,
                            reason: `Document ${doc.documentName} is expiring soon!`
                        });
                        
                        if (!exists) {
                            const newNotif = new Notification({
                                idInfo: car._id,
                                person: `FLEET ${car.plateNumber}`,
                                reason: `Document ${doc.documentName} is expiring soon!`,
                                dateNotification: new Date(),
                                branchId: car.branchId
                            });
                            await newNotif.save();
                            if (req.io) {
                                req.io.emit('newNotification', newNotif);
                            }
                        }
                    }
                }
            }
        }
        // ---------------------------

        res.status(200).json({
            itemI: fleets,
            totalItems: total,
            totalPages: Math.ceil(total / limit),
            currentPage: page
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get a single car
exports.getFleetById = async (req, res) => {
    try {
        const fleet = await Fleet.findById(req.params.id);
        if (!fleet) {
            return res.status(404).json({ message: "Car not found" });
        }

        const COLOR_REGEX = /^(olive\s*green|navy\s*blue|dark\s*(blue|grey|gray|green|red)|light\s*(blue|grey|gray|green)|pearl\s*white|matte\s*black|black|white|grey|gray|silver|red|blue|green|yellow|brown|gold|orange|beige|olive|navy|charcoal|burgundy|bronze|champagne|noir|blanc|gris|rouge|bleu|vert|jaune)$/i;
        if (fleet.chassisNumber && COLOR_REGEX.test(fleet.chassisNumber.trim())) {
            const detected = fleet.chassisNumber.trim();
            const cur = (fleet.vehicleColor || '').trim();
            if (!cur || cur.toUpperCase() === 'N/A' || (detected.toLowerCase().includes(cur.toLowerCase()) && detected.length > cur.length)) {
                fleet.vehicleColor = detected;
                Fleet.findByIdAndUpdate(fleet._id, { vehicleColor: detected }).catch(err => console.error("Color backfill error:", err));
            }
        }

        res.status(200).json(fleet);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Update a car (including status, etc)
exports.updateFleet = async (req, res) => {
    try {
        const body = { ...req.body };
        if (body.vehicleColor) {
            body.vehicleColor = body.vehicleColor.trim();
        }
        const COLOR_REGEX = /^(olive\s*green|navy\s*blue|dark\s*(blue|grey|gray|green|red)|light\s*(blue|grey|gray|green)|pearl\s*white|matte\s*black|black|white|grey|gray|silver|red|blue|green|yellow|brown|gold|orange|beige|olive|navy|charcoal|burgundy|bronze|champagne|noir|blanc|gris|rouge|bleu|vert|jaune)$/i;
        if (body.chassisNumber && COLOR_REGEX.test(body.chassisNumber.trim())) {
            const detected = body.chassisNumber.trim();
            if (!body.vehicleColor || body.vehicleColor === '' || detected.toLowerCase().includes(body.vehicleColor.toLowerCase())) {
                body.vehicleColor = detected;
            }
        }
        const updatedFleet = await Fleet.findByIdAndUpdate(req.params.id, body, { new: true });
        if (!updatedFleet) {
            return res.status(404).json({ message: "Car not found" });
        }
        res.status(200).json(updatedFleet);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Delete a car
exports.deleteFleet = async (req, res) => {
    try {
        const deletedFleet = await Fleet.findByIdAndDelete(req.params.id);
        if (!deletedFleet) {
            return res.status(404).json({ message: "Car not found" });
        }
        res.status(200).json({ message: "Car deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Delete multiple cars
exports.deleteMultipleFleets = async (req, res) => {
    try {
        const { ids } = req.body;
        await Fleet.deleteMany({ _id: { $in: ids } });
        res.status(200).json({ message: "Cars deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// --- Documents ---

// Add a document record
exports.addDocument = async (req, res) => {
    try {
        const fleet = await Fleet.findById(req.params.id);
        if (!fleet) return res.status(404).json({ message: "Car not found" });

        fleet.documents.push(req.body);
        await fleet.save();
        res.status(201).json(fleet);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Update a document record
exports.updateDocument = async (req, res) => {
    try {
        const fleet = await Fleet.findOneAndUpdate(
            { "_id": req.params.id, "documents._id": req.params.docId },
            { "$set": { "documents.$": req.body } },
            { new: true }
        );
        res.status(200).json(fleet);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Delete a document record
exports.deleteDocument = async (req, res) => {
    try {
        const fleet = await Fleet.findByIdAndUpdate(
            req.params.id,
            { "$pull": { "documents": { "_id": req.params.docId } } },
            { new: true }
        );
        res.status(200).json(fleet);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// --- Oil Changes ---

// Add an oil change record
exports.addOilChange = async (req, res) => {
    try {
        const fleet = await Fleet.findById(req.params.id);
        if (!fleet) return res.status(404).json({ message: "Car not found" });

        fleet.oilChanges.push(req.body);
        await fleet.save();
        res.status(201).json(fleet);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Update an oil change record
exports.updateOilChange = async (req, res) => {
    try {
        const fleet = await Fleet.findOneAndUpdate(
            { "_id": req.params.id, "oilChanges._id": req.params.oilId },
            { "$set": { "oilChanges.$": req.body } },
            { new: true }
        );
        res.status(200).json(fleet);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Delete an oil change record
exports.deleteOilChange = async (req, res) => {
    try {
        const fleet = await Fleet.findByIdAndUpdate(
            req.params.id,
            { "$pull": { "oilChanges": { "_id": req.params.oilId } } },
            { new: true }
        );
        res.status(200).json(fleet);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
