const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const maintenanceSchema= new Schema(
    {
      customerName:{},
      serviceNumber: {
        type: Number,
        required: true,
        trim: true,
      },
      serviceName: {
        type: String,
        required: true,
        trim: true,
        },
      serviceDate: {
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
          if (typeof v === 'object' && Object.keys(v).length === 0) return new Date();
          const d = new Date(v);
          return isNaN(d.getTime()) ? new Date() : d;
        }
      },
      technicianAssign:{
        type: String,
        trim: true,
      },
      visitDate: {
        type: Date,
        trim: true,
        set: (v) => {
          if (!v) return null;
          if (v instanceof Date && !isNaN(v.getTime())) return v;
          if (typeof v === 'object') {
            if (v.$d instanceof Date && !isNaN(v.$d.getTime())) return v.$d;
            if (v['$y'] !== undefined) {
              const d = new Date(Number(v['$y']), Number(v['$M'] !== undefined ? v['$M'] : 0), Number(v['$D'] !== undefined ? v['$D'] : 1), Number(v['$H'] !== undefined ? v['$H'] : 0), Number(v['$m'] !== undefined ? v['$m'] : 0), Number(v['$s'] !== undefined ? v['$s'] : 0));
              if (!isNaN(d.getTime())) return d;
            }
          }
          if (typeof v === 'object' && Object.keys(v).length === 0) return null;
          const d = new Date(v);
          return isNaN(d.getTime()) ? null : d;
        }
      },
      status: {
        type: String,
        trim: true,
        set: (v) => {
          if (!v) return 'Open';
          const upper = String(v).toUpperCase().trim();
          if (upper === 'OPEN') return 'Open';
          if (upper === 'RESCHEDULE') return 'Reschedule';
          if (upper === 'CANCEL') return 'Cancel';
          if (upper === 'PENDING') return 'Pending';
          if (upper === 'CLOSE' || upper === 'CLOSED') return 'Close';
          if (upper === 'CONVERTED') return 'Converted';
          return v;
        },
        enum: ['Open', 'Reschedule','Cancel','Pending','Close', 'Converted', 'OPEN', 'RESCHEDULE', 'CANCEL', 'PENDING', 'CLOSE', 'CLOSED', 'CONVERTED'],
        default: 'Open'
      },
      itemDescriptionInfo: {
        type: String,
        trim: true,
      },
      brand: {
        type: String,
        trim: true,
      },
      action: {
        type: String,
        trim: true,
      },
      actionTaken: {
        type: String,
        trim: true,
      },
      note: {
        type: String,
        trim: true,
      },
      model: {
        type: String,
        trim: true,
      },
      warranty: {
        type: String,
        trim: true,
      },
      serialNo: {
        type: String,
        trim: true,
      },
      defectDescription: {
        type: String,
        trim: true,
      },
      items:[  ],
      adjustment: {
        type: String,
        trim: true,
      },
      adjustmentNumber: {
        type: Number,
        trim: true,
      },
      laborDiscount: {
        type: Number,
        trim: true,
      },
      totalDiscount: {
        type: Number,
        trim: true,
      },
      laborQty: {
        type: Number,
        trim: true,
      },
      totalLaborFeesGenerale: {
        type: Number,
        trim: true,
      },
      laborPercentage: {
        type: Number,
        trim: true,
      },
      totalInvoice: {
        type: Number,
        trim: true,
      },  
      totalLaborFees: {
        type: Number,
        trim: true,
      },  
      subTotal: {
        type: Number,
        trim: true,
        required: true
      },
      Create: {
        type: String,
        trim: true,
      },
      Converted:{
        type: Boolean,
        trim: true,
      },ReferenceName: {
        type: String,
        trim: true,
       },
       includeAssetControl: {
         type: Boolean,
         default: false
       },
       assetControlReport: {
         type: Object,
         default: {}
       },
        branchId: { type: String, default: 'HQ' },
},
    {
      collection:"maintenance"
    }
  );
  

  
maintenanceSchema.index({ branchId: 1, serviceName: 1 }, { unique: true });
maintenanceSchema.index({ serviceDate: -1 });
maintenanceSchema.index({ serviceNumber: -1 });
module.exports = mongoose.model("maintenanceSchema", maintenanceSchema);
