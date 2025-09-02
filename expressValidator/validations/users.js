const { validationResult } = require("express-validator");

exports.userValidation = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const errorList = errors.array().map((errors) => errors.msg);
    return res.status(403).json({ errors: errorList });
  }
  next();
};
