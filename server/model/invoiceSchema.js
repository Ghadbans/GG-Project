const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const invoiceSchema = new Schema(
  {
    branchId: {
      type: String,
      trim: true,
      default: 'HQ'
    },
    customerName: {},
    invoiceNumber: {
      type: Number,
      required: true,
      trim: true
    },
    invoiceName: {
      type: String,
      required: true,
      trim: true,
      unique: true
    },
    invoiceDate: {
      type: Date,
      trim: true,
      required: true,
      set: (v) => {
        if (!v) return new Date();
        if (v instanceof Date && !isNaN(v.getTime())) return v;
        if (typeof v === 'object') {
          if (v.$d instanceof Date && !isNaN(v.$d.getTime())) return v.$d;
          if (v['$y'] !== undefined) {
            const d = new Date(Number(v['$y']), Number(v['$M'] !== undefined ? v['$M'] : 0), Number(v['$D'] !== undefined ? v['$D'] : 1), Number(v['$H'] !== undefined ? v['$H'] : 0), Number(v['$m'] !== undefined ? v['$m'] : 0), Number(v['$s'] !== undefined ? v['$s'] : 0));
            if (!isNaN(d.getTime())) return d;
          }
        }
        const d = new Date(v);
        return isNaN(d.getTime()) ? new Date() : d;
      }
    },
    invoiceDueDate: {
      type: Date,
      trim: true,
      set: (v) => {
        if (!v) return new Date();
        if (v instanceof Date && !isNaN(v.getTime())) return v;
        if (typeof v === 'object') {
          if (v.$d instanceof Date && !isNaN(v.$d.getTime())) return v.$d;
          if (v['$y'] !== undefined) {
            const d = new Date(Number(v['$y']), Number(v['$M'] !== undefined ? v['$M'] : 0), Number(v['$D'] !== undefined ? v['$D'] : 1), Number(v['$H'] !== undefined ? v['$H'] : 0), Number(v['$m'] !== undefined ? v['$m'] : 0), Number(v['$s'] !== undefined ? v['$s'] : 0));
            if (!isNaN(d.getTime())) return d;
          }
        }
        const d = new Date(v);
        return isNaN(d.getTime()) ? new Date() : d;
      }
    },
    invoiceSubject: {
      type: String,
      trim: true
    },
    overdue: {
      type: Boolean,
      trim: true
    },
    daysPastDue: {
      type: Number,
      trim: true
    },
    invoiceStatus: {
      type: String,
      trim: true
    },
    invoicePurchase: {
      type: String,
      trim: true
    },
    invoiceDefect: {
      type: String,
      trim: true
    },
    status: {
      type: String,
      trim: true,
      set: (v) => {
        if (!v) return 'Sent';
        const upper = String(v).toUpperCase().trim();
        if (upper === 'DRAFT') return 'Draft';
        if (upper === 'SENT') return 'Sent';
        if (upper === 'DECLINE') return 'Decline';
        if (upper === 'PENDING') return 'Pending';
        if (upper === 'PAID') return 'Paid';
        if (upper === 'PARTIALLY-PAID' || upper === 'PARTIALLY_PAID') return 'Partially-Paid';
        if (upper === 'VOID') return 'Void';
        if (upper === 'FREE OF CHARGE') return 'Free of Charge';
        return v;
      },
      enum: [
        'Draft', 'Sent', 'Decline', 'Pending', 'Paid', 'Partially-Paid', 'Void', 'Free of Charge',
        'DRAFT', 'SENT', 'DECLINE', 'PENDING', 'PAID', 'PARTIALLY-PAID', 'VOID', 'FREE OF CHARGE'
      ],
      default: 'Draft'
    },
    items: [],
    subTotal: {
      type: Number,
      trim: true
    },
    total: {
      type: Number,
      trim: true
    },
    shipping: {
      type: Number,
      trim: true
    },
    adjustmentNumber: {
      type: Number,
      trim: true
    },
    totalInvoice: {
      type: Number,
      trim: true
    },
    balanceDue: {
      type: Number,
      trim: true
    },
    totalW: {
      type: String,
      trim: true
    },
    adjustment: {
      type: String,
      trim: true
    },
    terms: {
      type: String,
      trim: true
    },
    note: {
      type: String,
      trim: true
    },
    noteInfo: {
      type: String,
      trim: true
    },
    CheckTvA: {
      type: Boolean,
      default: false
    },
    tax: {
      type: Number,
      default: 0
    },
    Create: {},
    Ref: {
      _id: {
        type: String,
        trim: true
      },
      projectName: {
        type: String,
        trim: true
      }
    },
    ReferenceName: {
      type: String,
      trim: true
    },
    ReferenceName2: {
      type: String,
      trim: true
    },
    projectId: {
      type: String,
      trim: true
    },
    actionTaken: {
      type: String,
      trim: true
    },
    Position: {
      type: String,
      trim: true
    }
  },
  {
    collection: "invoice"
  }
);

invoiceSchema.index({ branchId: 1, invoiceNumber: 1 }, { unique: true });
invoiceSchema.index({ invoiceDate: -1 });
invoiceSchema.index({ invoiceNumber: -1 });
module.exports = mongoose.model("invoiceSchema", invoiceSchema);
