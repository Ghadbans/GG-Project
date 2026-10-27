const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const grantAccessSchema = new Schema(
  {
    employeeName: {
      type: String,
      required: true,
      unique: true,
    },
    userID: {
      type: String,
      required: true,
      unique: true,
    },
    modules: [],
    branches: [{ type: String }],
    costVisibility: { type: Boolean, default: false },
    notificationVisibility: { type: Boolean, default: false },
    messageVisibility: { type: Boolean, default: false },
    backupVisibility: { type: Boolean, default: false },
    branchId: { type: String, default: 'HQ' },
  },
  {
    collection: "Grant-Access"
  }
);

module.exports = mongoose.model("grantAccessSchema", grantAccessSchema);
