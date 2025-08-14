const express = require("express");
const { getUser, postUser } = require("../controller/userController");
const router = express.Router();

router.get("/user", getUser);
router.post("/user", postUser);

module.exports = router;
