const express = require('express');
const { register, login, logout, requestPasswordReset, resetPassword } = require('../Controller/auth');

const Router = express.Router();

Router.post('/register', register);
Router.post('/login', login);
Router.post('/logout', logout);
Router.post('/requestpasswordreset', requestPasswordReset);
Router.post('/passwordreset', resetPassword);


module.exports = Router;