const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const departmentSchema = new Schema(
  {  
    department: {
        type: String,
        trim: true,
      },
    branchId: { type: String, default: 'HQ' },
},
  {
    collection: "department",
  }
);
departmentSchema.index({ branchId: 1, department: 1 }, { unique: true });
module.exports = mongoose.model("departmentSchema",  departmentSchema);