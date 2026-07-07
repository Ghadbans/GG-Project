const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const imageSchema= new Schema(
    {
      fileName:String,
      data: Buffer, 
      contentType:String,
      employeeName: String,
        branchId: { type: String, default: 'HQ' },
},
    {
      collection:"image"
    }
  );
  
  module.exports = mongoose.model("imageSchema", imageSchema);