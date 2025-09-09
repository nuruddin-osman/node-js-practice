const express = require("express");
const User = require("./models/user.models");
const app = express();
require("dotenv").config();
require("./config/database");
require("./config/passport");
const cors = require("cors");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const passport = require("passport");
const saltRounds = 10;

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(passport.initialize());

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
          return res.status(201).send({
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
app.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username: username });
    if (!user) {
      return res.status(404).send({
        message: "User is  not found",
        status: false,
      });
    }
    const passwordMatchCheck = await bcrypt.compare(password, user.password);
    if (!passwordMatchCheck) {
      return res.status(404).send({
        message: "Password do not match",
        status: false,
      });
    }

    const payload = {
      id: user._id,
      username: user.username,
    };

    const token = jwt.sign(payload, process.env.SECRET_KEY, {
      expiresIn: "2d",
    });
    const userWithoutPassword = { ...user.toObject() };
    delete userWithoutPassword.password;
    console.log(userWithoutPassword);
    res.status(200).send({
      message: "Login success",
      data: {
        user: userWithoutPassword,
        token: `Bearer ${token}`,
      },
    });
  } catch (error) {
    res.status(500).send(error.message);
  }
});
app.get(
  "/profile",
  passport.authenticate("jwt", { session: false }),
  function (req, res) {
    try {
      return res.status(200).send({
        status: true,
        message: "Profile retrieved successfully",
        data: {
          user: {
            id: req.user._id,
            username: req.user.username,
          },
        },
      });
    } catch (error) {
      res.status(500).res(error.message);
    }
  }
);
module.exports = app;
