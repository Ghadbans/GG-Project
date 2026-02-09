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
        unique:true
      },
      serviceDate: {
      type: Date,
      trim: true,
      required: true
      },
      technicianAssign:{
        type: String,
        trim: true,
      },
      visitDate: {
      type: Date,
      trim: true,
      },
      status: {
        type: String,
        trim: true,
        enum: ['Open', 'Reschedule','Cancel','Pending','Close'],
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
       }
    },
    {
      collection:"maintenance"
    }
  );
  
  module.exports = mongoose.model("maintenanceSchema", maintenanceSchema);