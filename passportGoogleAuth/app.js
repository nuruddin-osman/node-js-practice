require("dotenv").config();
require("./config/database");
require("./config/passport");
const express = require("express");
const app = express();
const cors = require("cors");
const ejs = require("ejs");
const session = require("express-session");
const passport = require("passport");
const MongoStore = require("connect-mongo");
const User = require("./models/users.models");

const bcrypt = require("bcrypt");
const saltRounds = 10;

app.set("view engine", "ejs");
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set("trust proxy", 1); // trust first proxy
app.use(
  session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: true,
    store: MongoStore.create({
      mongoUrl: process.env.CONNECT_DB,
      collectionName: "sessions",
    }),
    // cookie: { secure: true },
  })
);

app.use(passport.initialize()); // jokhon route a call dibo tokhon passport initialized hobe.
app.use(passport.session()); // jate kore passport, express-session er sathe use korte pari

const checkLoggedIn = (req, res, next) => {
  if (req.isAuthenticated()) {
    return res.redirect("/profile");
  }
  next();
};

app.get("/login", checkLoggedIn, (req, res) => {
  res.render("login");
});

app.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["profile"] })
);

app.get(
  "/auth/google/callback",
  passport.authenticate("google", {
    failureRedirect: "/login",
    successRedirect: "/profile",
  }),
  function (req, res) {
    // Successful authentication, redirect home.
    res.redirect("/");
  }
);

const checkAuthenticated = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect("/login");
};
app.get("/profile", checkAuthenticated, (req, res) => {
  res.render("profile", { username: req.user.username });
});
app.get("/logout", function (req, res, next) {
  try {
    req.logout((err) => {
      if (err) {
        return next(err);
      }
      res.redirect("/");
    });
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = app;
