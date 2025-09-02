const { check } = require("express-validator");

exports.registerUserValidation = [
  check("name")
    .trim()
    .notEmpty()
    .withMessage("Name is messing")
    .isLength({ min: 3 })
    .withMessage("Name have at least 5 charecter")
    .isLength({ max: 31 })
    .withMessage("Name can have maximum 31 charecter"),
  check("email")
    .trim()
    .notEmpty()
    .withMessage("email is messing")
    .isEmail()
    .withMessage("not a valid email"),
  check("password")
    .trim()
    .notEmpty()
    .withMessage("password is messing")
    .isLength({ min: 5 })
    .withMessage("password have at least 5 charecter"),
  check("dob")
    .trim()
    .notEmpty()
    .withMessage("Date of Birth is messing")
    .isISO8601()
    .toDate()
    .withMessage("start must be in correct format yyyy:mm:dd"),
];

exports.loginUserValidation = [
  check("email")
    .trim()
    .notEmpty()
    .withMessage("email is messing")
    .isEmail()
    .withMessage("not a valid email"),

  check("password")
    .trim()
    .notEmpty()
    .withMessage("password is messing")
    .isLength({ min: 5 })
    .withMessage("password have at least 5 charecter"),
];
