const express = require("express");
const { userValidation } = require("../validations/users");
const {
  registerContrller,
  loginContrller,
} = require("../controllers/users.controller");
const {
  registerUserValidation,
  loginUserValidation,
} = require("../validations/auth");
const userRouter = express.Router();

userRouter.post(
  "/register",
  registerUserValidation,
  userValidation,
  registerContrller
);
userRouter.post("/login", loginUserValidation, userValidation, loginContrller);

module.exports = userRouter;
