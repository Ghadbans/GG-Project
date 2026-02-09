const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const departmentSchema = new Schema(
  {  
    department: {
        type: String,
        unique: true,
        trim: true,
      },
  },
  {
    collection: "department",
  }
);
module.exports = mongoose.model("departmentSchema",  departmentSchema);