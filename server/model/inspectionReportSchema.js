const mongoose = require('mongoose');

const inspectionReportSchema = new mongoose.Schema(
  {
    reportNumber: {
      type: Number,
      required: true
    },
    reportCode: {
      type: String,
      required: true,
      unique: true
    },
    reportTitle: {
      type: String,
      default: 'Technical Inspection & Corrective Action Report',
      trim: true
    },
    subject: {
      type: String,
      required: true,
      trim: true
    },
    date: {
      type: Date,
      default: Date.now
    },
    location: {
      type: String,
      required: true,
      trim: true
    },
    preparedBy: {
      type: String,
      default: 'Global Gate Technical Team',
      trim: true
    },
    customerId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Customer'
    },
    customerName: {
      type: String,
      default: '',
      trim: true
    },
    customerAddress: {
      type: String,
      default: '',
      trim: true
    },
    customerPhone: {
      type: String,
      default: '',
      trim: true
    },
    branchId: {
      type: String,
      default: 'HQ',
      trim: true
    },

    // Section 1: Findings & Current Situation
    findingsIntro: {
      type: String,
      default: '',
      trim: true
    },
    findings: [
      {
        title: { type: String, required: true, trim: true },
        description: { type: String, required: true, trim: true }
      }
    ],
    photosSection1: [
      {
        url: { type: String, required: true },
        figure: { type: String, default: 'Figure 1', trim: true },
        caption: { type: String, default: '', trim: true }
      }
    ],

    // Section 2: Recommended Solution & Action Plan Table
    solutionIntro: {
      type: String,
      default: '',
      trim: true
    },
    actionItems: [
      {
        actionItem: { type: String, required: true, trim: true },
        scope: { type: String, required: true, trim: true }
      }
    ],
    photosSection2: [
      {
        url: { type: String, required: true },
        figure: { type: String, default: 'Figure 3', trim: true },
        caption: { type: String, default: '', trim: true }
      }
    ],

    // Next Steps & Status
    nextSteps: {
      type: String,
      default: 'Upon review and approval of this technical recommendation, Global Gate SARL will submit a detailed quotation covering the required materials, custom fabrications, and installation labor.',
      trim: true
    },
    status: {
      type: String,
      enum: ['DRAFT', 'COMPLETED', 'SENT', 'CONVERTED TO QUOTE'],
      default: 'DRAFT'
    },
    linkedQuotationId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Estimate'
    },
    createdBy: {
      type: String,
      default: 'GG',
      trim: true
    }
  },
  {
    timestamps: true,
    collection: 'Inspection-Reports'
  }
);

// Indexes for fast search
inspectionReportSchema.index({ reportCode: 1 });
inspectionReportSchema.index({ branchId: 1, createdAt: -1 });
inspectionReportSchema.index({ customerId: 1 });

module.exports = mongoose.model('InspectionReport', inspectionReportSchema);
