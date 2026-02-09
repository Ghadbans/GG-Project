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
    dateNotification:{
    type: Date,
    trim: true,
    }
  },
  {
    collection: "notification",
  }
);

module.exports = mongoose.model("notificationSchema", notificationSchema);