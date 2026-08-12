const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const documentHistorySchema = new Schema({
    documentName: { type: String, required: true },
    year: { type: String, required: true },
    startDate: { type: Date, required: true },
    expiryDate: { type: Date, required: true },
    amountPaid: { type: Number, default: 0 },
    isPaid: { type: Boolean, default: false },
    notes: { type: String }
});

const oilChangeSchema = new Schema({
    date: { type: Date, required: true },
    kilometers: { type: Number, required: true },
    notes: { type: String }
});

const fleetSchema = new Schema({
    carMake: { type: String, required: true },
    carModel: { type: String, required: true },
    plateNumber: { type: String, required: true, unique: true },
    chassisNumber: { type: String },
    status: {
        type: String,
        enum: ['Running', 'Stopped', 'Sold', 'Damaged'],
        default: 'Running'
    },
    branchId: { type: String, default: 'HQ' },
    documents: [documentHistorySchema],
    oilChanges: [oilChangeSchema]
}, {
    timestamps: true,
    collection: "Fleet"
});

module.exports = mongoose.model("Fleet", fleetSchema);
