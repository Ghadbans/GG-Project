const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const notificationSchema = new Schema(
  { 
    idInfo:{
      type: String,
      trim: true,
    },
    person:{
      type: String,
      trim: true,
    },
    reason:{
      type: String,
      trim: true,
    },
    dateNotification: {
      type: Date,
      default: Date.now,
      set: (v) => {
        if (!v) return new Date();
        const d = new Date(v);
        return isNaN(d.getTime()) ? new Date() : d;
      }
    },
    branchId: { type: String, default: 'HQ' },
},
  {
    collection: "notification",
  }
);

module.exports = mongoose.model("notificationSchema", notificationSchema);
