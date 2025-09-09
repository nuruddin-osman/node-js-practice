const express = require("express");
const { message } = require("statuses");
const User = require("./models/user.models");
const app = express();
require("dotenv").config();
require("./config/database");
const cors = require("cors");
const bcrypt = require("bcrypt");
const saltRounds = 10;

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.post("/register", async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username: username });
    if (user) {
      return res.status(400).send("User already axist");
    }
    bcrypt.hash(password, saltRounds, async (err, hash) => {
      const newUser = new User({
        username: username,
        password: hash,
      });
      await newUser
        .save()
        .then(() => {
          return res.send({
            status: true,
            message: "user create success",
            data: newUser,
          });
        })
        .catch((error) => {
          return res.send({
            status: false,
            message: "user is not create ",
          });
        });
    });
  } catch (error) {
    res.status(500).send({ message: "Internal server error" });
  }
});
app.post("/login", (req, res) => {
  res.send("register");
});
app.get("/profile", (req, res) => {
  res.send("This is an profile");
});
module.exports = app;
