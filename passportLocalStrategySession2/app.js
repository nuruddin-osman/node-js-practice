require("dotenv").config();
require("./config/database");
const express = require("express");
const app = express();
const cors = require("cors");
const ejs = require("ejs");
const User = require("./models/users.models");

const bcrypt = require("bcrypt");
const saltRounds = 10;

app.set("view engine", "ejs");
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/register", (req, res) => {
  res.render("register");
});
app.post("/register", async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username: username });
    if (user) {
      return res.status(400).send("user already exists");
    }
    bcrypt.hash(password, saltRounds, async (err, hash) => {
      const newUser = new User({
        username: username,
        password: hash,
      });
      await newUser.save();
      res.status(201).send("New user created");
    });
  } catch (error) {
    res.status(500).send(error.message);
  }
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
