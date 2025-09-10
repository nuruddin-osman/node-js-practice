const express = require("express");
const route = express.Router();
const { registerUser, loginUser } = require("../controllers/user.controller");
const { runValidation } = require("../middleware/validation");
const { schemas } = require("../middleware/schemas");

route.post("/register", runValidation(schemas.reagisterSchema), registerUser);
route.post("/login", runValidation(schemas.loginSchema), loginUser);

module.exports = route;
