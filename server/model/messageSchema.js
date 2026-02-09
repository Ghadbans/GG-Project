const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const messageSchema = new Schema(
  { 
    userName:{
      type: String,
      trim: true,
    },
    nowDate:{
      type: Date,
      trim: true,
    },
    nowTime:{
      type: String,
      trim: true,
    },
    message:{
      type: String,
      trim: true,
    }
  },
  {
    collection: "Message",
  }
);

module.exports = mongoose.model("messageSchema", messageSchema);