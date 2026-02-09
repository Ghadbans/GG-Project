require('dotenv').config();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const crypto =require("crypto");
const nodemailer=require("nodemailer");
const User = require("../model/employeeUserSchema");
const { setgroups } = require('process');


// Register a new user
const register = async (req, res, next) => {
    const { employeeName, employeeEmail, password, role} = req.body;
    const existingUser = await User.findOne({  employeeName});
    const existingUserEmail=await User.findOne({employeeEmail});

    if (existingUser || existingUserEmail) {
      return res.status(400).json({ message: 'User already exists' });
    }
    try {
      const hashedPassword = await bcrypt.hash(password, 10);
      const user = new User({ employeeName, employeeEmail, password: hashedPassword, role });
      await user.save();
      res.json({ message: 'Registration successful' });
    } catch (error) {
      next(error);
    }
  };
  
  // Login with an existing user
  const login = async (req, res, next) => {
    const { employeeName, password } = req.body;
    try {
      // Finding a user in the database based on the provided employeeName
      const user = await User.findOne({ employeeName });
      // If no user is found with the provided employeeName, return a 404 error
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
      // Compare the provided password with the hashed password stored in the database
      const passwordMatch = await bcrypt.compare(password,user.password);
     if (!passwordMatch) {   
      return res.status(401).json({ message: 'Incorrect password' });
    }
    const token = jwt.sign({ userId: user._id }, process.env.SECRET_KEY, {
      expiresIn: '1 hour'
    });
    res.json({ token });
    } catch (error) {
      // If an error occurs during the login process, pass the error to the error-handling middleware
      next(error);
    }
  };
  // Request for password
  const requestPasswordReset = async (req, res, next) => {
    try {
      const { employeeEmail } = req.body;
      const user = await User.findOne({ employeeEmail });
  
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
      // Generate reset code and set expiration
      const resetToken = crypto.randomBytes(20).toString('hex');
      const generatecode=()=> {
        return Math.random().toString(36).substring(7);
      }
      const verificationCode = generatecode();
      const codeExpiration = new Date(Date.now() + 3600000);
      user.verificationCode = verificationCode;
      user.codeExpiration = codeExpiration; // code expiration in 1 hour
      await user.save();
      // Send password reset email
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'emmanuelcibembe3@gmail.com', // Your Gmail email address
          pass: 'pols znwz iqqf tlit' // Your Gmail password or an app-specific password
        }
      });
      const mailOptions = {
        from: 'emmanuelcibembe3@gmail.com',
        to: user.employeeEmail,
        subject: 'Password Reset',
        html: `<p>You requested a password reset from global gate app. here is 
        your verification code to reset your password.<h1> ${verificationCode}</h1></p>`
      };
      await transporter.sendMail(mailOptions);
      res.status(200).json({ message: 'Password reset email sent' });
    } catch (error) {
      next(error);
    }
  }; 
  const resetPassword = async (req, res, next) => {
    try {
      const {oldPassword, newPassword, employeeEmail,employeeName,role} = req.body;
      const user = await User.findOne({
        employeeEmail: employeeEmail,
      });
      if (user) {
        const passwordMatch = await bcrypt.compare(oldPassword, user.password)
        if (passwordMatch) {
         const hashedPassword = await bcrypt.hash(newPassword, 10);
        user.password = hashedPassword;
        user.employeeName = employeeName;
        user.role = role;
        await user.save();
        res.status(200).json({ message: 'Password Changed successfully' });  
        } else {
          res.status(401).json({ message: 'Invalid Password' });    
        }
      }else{
        res.status(400).json({ message: 'User Not Found' });
      }
    } catch (error) {
      next(error);
    }
  };
  module.exports = { register, login,requestPasswordReset, resetPassword};
