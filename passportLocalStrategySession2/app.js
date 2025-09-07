require("dotenv").config();
require("./config/database");
const express = require("express");
const app = express();
const cors = require("cors");
const ejs = require("ejs");

app.set("view engine", "ejs");
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/register", (req, res) => {
  res.render("register");
});
app.post("/register", (req, res) => {
  const name = req.body.name;
  res.send({
    name,
  });
});
app.get("/login", (req, res) => {
  res.render("login");
});
app.post("/login", (req, res) => {
  res.send("hei");
});
app.get("/profile", (req, res) => {
  res.render("profile");
});
app.get("/logout", (req, res) => {
  res.redirect("/");
});

module.exports = app;
