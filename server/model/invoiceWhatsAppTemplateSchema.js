const mongoose = require('mongoose');

// Default WhatsApp Invoice Dispatch Message (in English)
const DEFAULT_INVOICE_WHATSAPP_MESSAGE =
  'Dear Valued Customer, please find attached your official invoice from Global Gate SARL. Thank you for your business!';

const invoiceWhatsAppTemplateSchema = new mongoose.Schema(
  {
    key: { type: String, default: 'invoice_whatsapp_message', unique: true },
    templateMessage: {
      type: String,
      default: DEFAULT_INVOICE_WHATSAPP_MESSAGE,
    },
    updatedBy: { type: String, default: 'GG' },
  },
  { timestamps: true, collection: 'invoicewhatsapptemplates' }
);

module.exports =
  mongoose.models.InvoiceWhatsAppTemplate ||
  mongoose.model('InvoiceWhatsAppTemplate', invoiceWhatsAppTemplateSchema);
module.exports.DEFAULT_INVOICE_WHATSAPP_MESSAGE = DEFAULT_INVOICE_WHATSAPP_MESSAGE;
