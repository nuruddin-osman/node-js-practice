const express = require("express");
const app = express();
require("dotenv").config();

app.post("/register", (req, res) => {
  res.send("register");
});
app.post("/login", (req, res) => {
  res.send("register");
});
app.get("/profile", (req, res) => {
  res.send("This is an profile");
});
module.exports = app;
