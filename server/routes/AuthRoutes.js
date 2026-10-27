const express = require('express');
const { register, login, logout, requestPasswordReset, resetPassword } = require('../Controller/auth');
const { loginLimiter, passwordResetLimiter } = require('../Middleware/rateLimiter');
const {
  validateLogin,
  validateRegister,
  validateRequestPasswordReset,
  validateResetPassword,
  validateLogout
} = require('../Middleware/authValidation');

const Router = express.Router();

Router.post('/register', validateRegister, register);
Router.post('/login', loginLimiter, validateLogin, login);
Router.post('/logout', validateLogout, logout);
Router.post('/requestpasswordreset', passwordResetLimiter, validateRequestPasswordReset, requestPasswordReset);
Router.post('/passwordreset', passwordResetLimiter, validateResetPassword, resetPassword);

module.exports = Router;
