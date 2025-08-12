const express = require("express");
const router = express.Router();

router.get("/login", (req, res) => {
  res.send("<h1>This is an Login page</h1>");
});
router.get("/register", (req, res) => {
  res.send("<h1>This is an Re gistration page</h1>");
});

module.exports = router;
