const mongoose = require('mongoose');

/**
 * Invoice WhatsApp Dispatch History Schema
 * Preserves a 3-month rolling audit log of sent invoices.
 * Native MongoDB TTL index automatically removes records older than 90 days (7,776,000 seconds).
 */
const invoiceWhatsAppHistorySchema = new mongoose.Schema(
  {
    invoiceId: { type: String, required: true },
    invoiceNumber: { type: Number, required: true },
    customerName: { type: String, default: '' },
    phone: { type: String, default: '' },
    amount: { type: Number, default: 0 },
    caption: { type: String, default: '' },
    status: { type: String, default: 'sent' },
    sentBy: { type: String, default: 'GG' },
    sentAt: {
      type: Date,
      default: Date.now,
      expires: 7776000, // 90 days (3 months) TTL retention
    },
  },
  { timestamps: true, collection: 'invoicewhatsapphistories' }
);

invoiceWhatsAppHistorySchema.index({ invoiceId: 1, sentAt: -1 });
invoiceWhatsAppHistorySchema.index({ invoiceNumber: 1 });

module.exports =
  mongoose.models.InvoiceWhatsAppHistory ||
  mongoose.model('InvoiceWhatsAppHistory', invoiceWhatsAppHistorySchema);
