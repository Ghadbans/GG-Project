const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const grantAccessSchema = new Schema({
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
      modules:[
        
      ]
  }
  ,
  {
    collection:"Grant-Access"
  }
  );
  
  module.exports = mongoose.model("grantAccessSchema", grantAccessSchema);