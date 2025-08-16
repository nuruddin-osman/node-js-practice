const express = require("express");
const {
  getUsers,
  getOneUser,
  createUsers,
  updateUser,
  deleteUser,
} = require("../controllers/users.controller");
const router = express.Router();

router.get("/", getUsers);
router.get("/:id", getOneUser);
router.post("/", createUsers);
router.patch("/:id", updateUser);
router.delete("/:id", deleteUser);

module.exports = router;
