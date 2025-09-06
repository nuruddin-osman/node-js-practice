require("dotenv").config();
const express = require("express");
const ejs = require("ejs");
const cors = require("cors");
const User = require("./models/user.models");
const app = express();
const bcrypt = require("bcrypt");
const saltRounds = 10;
require("./config/database");

const PORT = process.env.PORT || 4000;
app.set("view engine", "ejs");

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Base url
app.get("/", (req, res) => {
  res.render("index");
});

app.get("/register", (req, res) => {
  res.render("register");
});

app.post("/register", async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await User.findOne({ username: username });
    if (user) {
      return res.status(400).send("user alresy exist");
    }
    bcrypt.hash(password, saltRounds, async (err, hash) => {
      const newUser = new User({
        username: username,
        password: hash,
      });
      await newUser.save();
      res.status(201).send({ status: true, newUser });
    });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

app.get("/login", (req, res) => {
  res.render("login");
});
app.get("/profile", (req, res) => {
  res.render("profile");
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
