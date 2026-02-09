const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const imageSchema= new Schema(
    {
      fileName:String,
      data: Buffer, 
      contentType:String,
      employeeName: String,
    },
    {
      collection:"image"
    }
  );
  
  module.exports = mongoose.model("imageSchema", imageSchema);