const Fleet = require('../model/fleetSchema');
const maintenanceSchema = require('../model/maintenanceSchema');

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

        // --- Maintenance Aggregate Summary ---
        let fleetsWithMaint = fleets;
        try {
            const fleetIds = fleets.map(f => f._id);
            const maintAgg = await maintenanceSchema.aggregate([
                { $match: { fleetId: { $in: fleetIds } } },
                { $group: {
                    _id: "$fleetId",
                    totalCost: { $sum: { $ifNull: ["$totalInvoice", "$subTotal", 0] } },
                    count: { $sum: 1 },
                    lastDate: { $max: "$serviceDate" }
                }}
            ]);
            const maintMap = {};
            maintAgg.forEach(item => {
                if (item && item._id) {
                    maintMap[item._id.toString()] = item;
                }
            });

            fleetsWithMaint = fleets.map(car => {
                const carObj = car.toObject ? car.toObject() : { ...car };
                const m = maintMap[car._id.toString()];
                carObj.totalMaintenanceCost = m ? m.totalCost : 0;
                carObj.maintenanceCount = m ? m.count : 0;
                carObj.lastMaintenanceDate = m ? m.lastDate : null;
                return carObj;
            });
        } catch (maintErr) {
            console.error("Error aggregating fleet maintenance costs:", maintErr);
        }

        res.status(200).json({
            itemI: fleetsWithMaint,
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

// --- Maintenance Linkage & History ---

// Get active fleet vehicles for dropdowns in other modules (e.g. Maintenance)
exports.getActiveFleets = async (req, res) => {
    try {
        const vehicles = await Fleet.find({})
            .select('_id plateNumber carMake carModel vehicleColor status branchId')
            .sort({ plateNumber: 1 })
            .lean();
        res.status(200).json({ success: true, data: vehicles });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

// Get all maintenance orders linked to this vehicle
exports.getFleetMaintenance = async (req, res) => {
    try {
        const fleet = await Fleet.findById(req.params.id);
        if (!fleet) {
            return res.status(404).json({ message: "Vehicle not found" });
        }

        // Find all maintenance orders linked by fleetId
        const orders = await maintenanceSchema.find({ fleetId: fleet._id })
            .sort({ serviceDate: -1, _id: -1 })
            .lean();

        let totalMaintenanceCost = 0;
        let closedOrdersCount = 0;
        let openOrdersCount = 0;

        orders.forEach(order => {
            const cost = Number(order.totalInvoice || order.subTotal || 0);
            totalMaintenanceCost += isNaN(cost) ? 0 : cost;

            const st = (order.status || '').toLowerCase();
            if (st === 'close' || st === 'closed' || order.Converted === true || order.Converted === 'true') {
                closedOrdersCount++;
            } else {
                openOrdersCount++;
            }
        });

        res.status(200).json({
            success: true,
            fleet: {
                _id: fleet._id,
                plateNumber: fleet.plateNumber,
                carMake: fleet.carMake,
                carModel: fleet.carModel,
                vehicleColor: fleet.vehicleColor,
                status: fleet.status
            },
            orders,
            summary: {
                totalMaintenanceCost,
                totalOrdersCount: orders.length,
                closedOrdersCount,
                openOrdersCount,
                lastServiceDate: orders[0]?.serviceDate || null
            }
        });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

// Get unlinked maintenance orders that likely belong to this vehicle (smart plate detection)
exports.getFleetMaintenanceSuggestions = async (req, res) => {
    try {
        const fleet = await Fleet.findById(req.params.id);
        if (!fleet) {
            return res.status(404).json({ message: "Vehicle not found" });
        }

        const rawPlate = (fleet.plateNumber || '').trim();
        const cleanPlate = rawPlate.replace(/[^a-zA-Z0-9]/g, '');

        if (!cleanPlate || cleanPlate.length < 3) {
            return res.status(200).json({ success: true, suggestions: [] });
        }

        // Build flexible regex that matches plate with or without spaces/dashes (e.g. "5370AE05" matches "5370 AE 05" or "5370-AE-05")
        const flexPattern = cleanPlate.split('').map(c => c.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('[\\s\\-_]*');
        const plateRegex = new RegExp(flexPattern, 'i');

        // Search unlinked orders where plate is in itemDescriptionInfo, model, brand, or defectDescription
        const suggestions = await maintenanceSchema.find({
            $or: [
                { fleetId: null },
                { fleetId: { $exists: false } }
            ],
            $and: [
                {
                    $or: [
                        { itemDescriptionInfo: { $regex: plateRegex } },
                        { model: { $regex: plateRegex } },
                        { brand: { $regex: plateRegex } },
                        { defectDescription: { $regex: plateRegex } }
                    ]
                }
            ]
        })
        .sort({ serviceDate: -1 })
        .limit(30)
        .lean();

        res.status(200).json({ success: true, suggestions, matchPlate: cleanPlate });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

// Link one or more maintenance orders to a vehicle
exports.linkMaintenanceToFleet = async (req, res) => {
    try {
        const fleet = await Fleet.findById(req.params.id);
        if (!fleet) {
            return res.status(404).json({ message: "Vehicle not found" });
        }

        const { maintenanceId, maintenanceIds, serviceName } = req.body;
        let queryFilter = null;

        if (maintenanceIds && Array.isArray(maintenanceIds) && maintenanceIds.length > 0) {
            queryFilter = { _id: { $in: maintenanceIds } };
        } else if (maintenanceId) {
            queryFilter = { _id: maintenanceId };
        } else if (serviceName && String(serviceName).trim()) {
            const raw = String(serviceName).trim();
            const cleanNum = parseInt(raw.replace(/[^0-9]/g, ''), 10);
            
            const orConditions = [
                { serviceName: { $regex: `^${raw.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}$`, $options: 'i' } }
            ];
            if (!isNaN(cleanNum)) {
                orConditions.push({ serviceNumber: cleanNum });
                orConditions.push({ serviceName: `M-${String(cleanNum).padStart(6, '0')}` });
            }
            queryFilter = { $or: orConditions };
        } else {
            return res.status(400).json({ message: "Please provide a maintenance order ID, IDs array, or Service Number." });
        }

        const vehicleLabel = `${fleet.carMake} ${fleet.carModel} (${fleet.plateNumber})`.trim();

        const updateResult = await maintenanceSchema.updateMany(
            queryFilter,
            {
                $set: {
                    fleetId: fleet._id,
                    fleetPlateNumber: fleet.plateNumber,
                    fleetVehicleName: vehicleLabel
                }
            }
        );

        if (updateResult.matchedCount === 0) {
            return res.status(404).json({ message: "No matching maintenance order found to link." });
        }

        res.status(200).json({
            success: true,
            message: `Successfully linked ${updateResult.modifiedCount} maintenance order(s) to ${fleet.plateNumber}`,
            matchedCount: updateResult.matchedCount,
            modifiedCount: updateResult.modifiedCount
        });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

// Unlink a maintenance order from a vehicle
exports.unlinkMaintenanceFromFleet = async (req, res) => {
    try {
        const { id, maintenanceId } = req.params;
        const fleet = await Fleet.findById(id);
        if (!fleet) {
            return res.status(404).json({ message: "Vehicle not found" });
        }

        const updated = await maintenanceSchema.findOneAndUpdate(
            { _id: maintenanceId, fleetId: fleet._id },
            {
                $set: {
                    fleetId: null,
                    fleetPlateNumber: '',
                    fleetVehicleName: ''
                }
            },
            { new: true }
        );

        if (!updated) {
            return res.status(404).json({ message: "Maintenance order not found or not linked to this vehicle." });
        }

        res.status(200).json({
            success: true,
            message: `Order ${updated.serviceName} unlinked from ${fleet.plateNumber}`
        });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};
