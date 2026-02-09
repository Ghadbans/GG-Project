const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const estimationSchema = new Schema(
  {
    customerName:{},
    estimateNumber: {
      type: Number,
      required: true,
      trim: true,
      unique:true
    },
    estimateName: {
      type: String,
      required: true,
      trim: true,
      unique:true
    },
    estimateStatus: {
      type: String,
      required: true,
      trim: true,
    },
    estimateDate: {
      type: Date,
      trim: true,
      required: true
    },
    estimateSubject: {
      type: String,
      trim: true,
    }, 
    estimateStatus: {
      type: String,
      trim: true,
    },
    status: {
      type: String,
      trim: true,
      enum: ['Draft', 'Sent', 'Decline','Approved','Invoiced','Pending','Converted'],
      default: 'Draft'
    },
    items:[ ], 
    subTotal: {
      type: Number,
      trim: true,
      required: true
    },
   
    total: {
      type: Number,
      trim: true,
    },
    shipping: {
      type: Number,
      trim: true,
    },
    adjustmentNumber: {
      type: Number,
      trim: true,
    },
    totalInvoice: {
      type: Number,
      trim: true,
    },
    balanceDue: {
      type: Number,
      trim: true,
    },
    totalW: {
      type: String,
      trim: true,
    },
    adjustment: {
      type: String,
      trim: true,
    },  terms: {
      type: String,
      trim: true,
    },
    estimateDefect: {
      type: String,
      trim: true,
    },
    totalW: {
      type: String,
      trim: true,
    },
    Ref: {
     _id : {
        type: String,
        trim: true,
      },
   projectName: {
        type: String,
        trim: true,
      }
    }
    ,
    note: {
      type: String,
      trim: true,
    },
    noteInfo: {
      type: String,
      trim: true,
    },
    Create: {
    },ReferenceName: {
      type: String,
      trim: true,
     }
  },
  {
    collection: "estimation",
  }
);
module.exports = mongoose.model("estimationSchema",  estimationSchema);