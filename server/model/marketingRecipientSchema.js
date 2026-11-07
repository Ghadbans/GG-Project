const mongoose = require('mongoose');

// Saved list of customers selected as WhatsApp flyer recipients (shared company-wide, one document).
const marketingRecipientSchema = new mongoose.Schema(
  {
    key: { type: String, default: 'whatsapp', unique: true },
    customerIds: { type: [String], default: [] },
    updatedBy: { type: String, default: '' },
  },
  { timestamps: true, collection: 'marketingrecipients' }
);

module.exports =
  mongoose.models.MarketingRecipient || mongoose.model('MarketingRecipient', marketingRecipientSchema);
