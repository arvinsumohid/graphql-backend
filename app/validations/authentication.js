const Joi = require('joi');
const PasswordComplexity = require('joi-password-complexity');

const registerSchema = Joi.object().keys({
  emailAddress: Joi.string().email().required(),
  password: new PasswordComplexity({
    min: 8,
    max: 16,
    lowercase: 1,
    uppercase: 1,
    numeric: 1,
    symbol: 1,
    requirementCount: 4,
  }),
});

module.exports = {
  registerSchema,
};
