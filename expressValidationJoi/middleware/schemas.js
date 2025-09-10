const Joi = require("joi");

exports.schemas = {
  reagisterSchema: Joi.object({
    name: Joi.string().min(3).max(30).required(),
    username: Joi.string().alphanum().min(3).max(10).required(),

    password: Joi.string().required().min(5).max(31),
    repeat_password: Joi.ref("password"),
    language: Joi.array().items(Joi.string()),
    birth_year: Joi.date(),
    email: Joi.string().email().required(),
    age: Joi.number().required(),
  }),

  loginSchema: Joi.object({
    username: Joi.string().alphanum().min(3).max(10).required(),
    password: Joi.string().required().min(5).max(31),
  }),
};
