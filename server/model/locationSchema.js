const mongoose = require("mongoose");
const locationSchema = new mongoose.Schema({
  locationName: { type: String, required: true },
  address: { type: String },
  contactPerson: { type: String },
  contactNumber: { type: String },
  status: { type: String, default: 'Active' },
  description: { type: String },
  branchId: { type: String, default: 'HQ' }
}, { collection: 'locations' });
module.exports = mongoose.models.Location || mongoose.model("Location", locationSchema);