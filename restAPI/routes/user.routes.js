const express = require("express");
const {
  getUser,
  postUser,
  updateUser,
  deleteUser,
} = require("../controller/user.controller");
const router = express.Router();

router.get("/", getUser);
router.post("/", postUser);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);

module.exports = router;
