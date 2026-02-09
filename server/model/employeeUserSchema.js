const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');

const employeeUserSchema = new Schema(
  {
    employeeName: {
      type: String,
      required: true,
      unique: true,
    },
    employeeEmail: {
      type: String,
      required: true,
      unique: true,
    },
   
    role: {
      type: String,
      enum: ["Admin", "User","CEO"],
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    verificationCode: {
      type: String,
    },
    codeExpiration : {
      type: Date,
      default: Date.now()+3600000,
      
    },


  },
  { timestamps: true },
  
);

// // Hash the password before saving it to the database
// employeeUserSchema.pre('save', async function (next) {
//   const user = this;
//   if (!user.isModified('password')) return next();

//   try {
//     const salt = await bcrypt.genSalt(10);
//     user.password = await bcrypt.hash(user.password, salt);
//     next();
//   } catch (error) {
//     return next(error);
//   }
// });

// // Compare the given password with the hashed password in the database
// employeeUserSchema.methods.comparePassword = async function (password) {
//   return bcrypt.compare(password, this.password);
// };



module.exports = mongoose.model("employeeUserSchema", employeeUserSchema);
