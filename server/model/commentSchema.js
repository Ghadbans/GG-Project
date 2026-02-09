const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const commentSchema = new Schema(
  { 
    CommentInfo: {
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

},
dateComment:{
  type: Date,
  trim: true,
}
  },
  {
    collection: "Comment",
  }
);

module.exports = mongoose.model("commentSchema", commentSchema);