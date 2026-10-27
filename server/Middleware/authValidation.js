const Joi = require('joi');

/**
 * Middleware factory to validate req.body against a Joi schema.
 * Replaces req.body with the sanitized/cast value on success,
 * or returns HTTP 400 with a clean user-facing error message on failure.
 */
const validateBody = (schema) => {
  return (req, res, next) => {
    const { error, value } = schema.validate(req.body, {
      abortEarly: true,
      stripUnknown: true
    });

    if (error) {
      const message = error.details && error.details[0] 
        ? error.details[0].message 
        : 'Validation error';
      return res.status(400).json({ message });
    }

    req.body = value;
    next();
  };
};

const loginSchema = Joi.object({
  employeeName: Joi.string().trim().min(1).max(100).required().messages({
    'string.base': 'User Name must be text',
    'string.empty': 'User Name is required',
    'any.required': 'User Name is required'
  }),
  password: Joi.string().min(1).max(128).required().messages({
    'string.base': 'Password must be text',
    'string.empty': 'Password is required',
    'any.required': 'Password is required'
  }),
  branchId: Joi.string().trim().max(100).allow('', null).optional()
});

const registerSchema = Joi.object({
  employeeName: Joi.string().trim().min(1).max(100).required().messages({
    'string.empty': 'Employee Name is required',
    'any.required': 'Employee Name is required'
  }),
  employeeEmail: Joi.string().email().trim().allow('', null).optional().messages({
    'string.email': 'Please provide a valid email address'
  }),
  password: Joi.string().min(4).max(128).required().messages({
    'string.min': 'Password must be at least 4 characters long',
    'string.empty': 'Password is required',
    'any.required': 'Password is required'
  }),
  role: Joi.string().trim().min(1).max(50).required().messages({
    'string.empty': 'Role is required',
    'any.required': 'Role is required'
  }),
  branchId: Joi.string().trim().max(100).allow('', null).optional(),
  branches: Joi.array().items(Joi.string()).optional()
});

const requestPasswordResetSchema = Joi.object({
  employeeEmail: Joi.string().email().trim().required().messages({
    'string.empty': 'Email is required',
    'string.email': 'Please provide a valid email address',
    'any.required': 'Email is required'
  })
});

const resetPasswordSchema = Joi.object({
  oldPassword: Joi.string().required().messages({
    'string.empty': 'Current password is required',
    'any.required': 'Current password is required'
  }),
  newPassword: Joi.string().min(4).max(128).required().messages({
    'string.min': 'New password must be at least 4 characters long',
    'string.empty': 'New password is required',
    'any.required': 'New password is required'
  }),
  employeeEmail: Joi.string().email().trim().required().messages({
    'string.email': 'Valid email is required',
    'any.required': 'Email is required'
  }),
  employeeName: Joi.string().trim().required().messages({
    'string.empty': 'Employee Name is required',
    'any.required': 'Employee Name is required'
  }),
  role: Joi.string().trim().required().messages({
    'string.empty': 'Role is required',
    'any.required': 'Role is required'
  })
});

const logoutSchema = Joi.object({
  employeeName: Joi.string().trim().allow('', null).optional(),
  role: Joi.string().trim().allow('', null).optional(),
  branchId: Joi.string().trim().allow('', null).optional(),
  userId: Joi.string().trim().allow('', null).optional()
});

module.exports = {
  validateLogin: validateBody(loginSchema),
  validateRegister: validateBody(registerSchema),
  validateRequestPasswordReset: validateBody(requestPasswordResetSchema),
  validateResetPassword: validateBody(resetPasswordSchema),
  validateLogout: validateBody(logoutSchema)
};
