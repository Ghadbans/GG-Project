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
    branchId: { type: String, default: 'HQ' },
},
  {
    collection: "notification",
  }
);

module.exports = mongoose.model("notificationSchema", notificationSchema);
