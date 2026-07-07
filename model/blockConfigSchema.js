const mongoose = require("mongoose");
const blockConfigSchema = new mongoose.Schema({
  blockType: { type: String, required: false }, // Made optional for global pricing
  cementPrice: { type: Number },
  concassePrice: { type: Number },
  gravelPrice: { type: Number },
  sandPrice: { type: Number },
  wheelbarrowPerM3: { type: Number },
  rentPrice: { type: Number },
  taxesPrice: { type: Number },
  fuelPrice: { type: Number },
  transportPrice: { type: Number },
  commissionPrice: { type: Number },
  supervisorSalary: { type: Number },
  staffWages: { type: Number },
  damageRate: { type: Number },
  // Deprecated: frontend now uses `mixerRatePerSack` (per-sack rate)
  // Kept for backward compatibility with older documents
  mixerCapUnder4: { type: Number, default: 13500 },
  // New per-sack mixer rate introduced by frontend. Default 300.
  mixerRatePerSack: { type: Number, default: 300 },
  laborRates: { type: mongoose.Schema.Types.Mixed }, // Matches frontend object structure
  branchId: { type: String, default: 'HQ' },
  lastUpdated: { type: Date, default: Date.now }
}, { strict: false, collection: 'blockConfig' });

module.exports = mongoose.models.BlockConfig || mongoose.model("BlockConfig", blockConfigSchema);