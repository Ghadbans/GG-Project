const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const attachmentSchema = new Schema(
  {
    documentId: {
      type: String,
      required: true,
      index: true,
      trim: true
    },
    documentType: {
      type: String,
      required: true,
      enum: ['Invoice', 'Estimation', 'PurchaseOrder'],
      index: true,
      trim: true
    },
    documentNumber: {
      type: String,
      trim: true
    },
    fileName: {
      type: String,
      required: true,
      trim: true
    },
    fileSize: {
      type: Number,
      required: true
    },
    contentType: {
      type: String,
      required: true,
      trim: true
    },
    data: {
      type: Buffer,
      required: true
    },
    uploadedBy: {
      type: String,
      trim: true,
      default: ''
    },
    branchId: {
      type: String,
      default: 'HQ',
      trim: true
    },
    createdAt: {
      type: Date,
      default: Date.now
    }
  },
  {
    collection: "attachments"
  }
);

attachmentSchema.index({ documentId: 1, createdAt: -1 });

module.exports = mongoose.model("attachmentSchema", attachmentSchema);
