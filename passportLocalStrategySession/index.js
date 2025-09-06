require("dotenv").config();
const express = require("express");
const ejs = require("ejs");
const cors = require("cors");

const User = require("./models/user.models");
const app = express();
const bcrypt = require("bcrypt");
const saltRounds = 10;
require("./config/database");
require("./config/passport");
const session = require("express-session");
const MongoStore = require("connect-mongo");
const passport = require("passport");

const PORT = process.env.PORT || 4000;
app.set("view engine", "ejs");

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

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

app.use(passport.initialize());
app.use(passport.session());

const checkLoggedIn = (req, res, next) => {
  if (req.isAuthenticated()) {
    return res.redirect("/profile");
  } else {
    next();
  }
};

const checkAuthenticate = (req, res, next) => {
  if (req.isAuthenticated()) {
    next();
  } else {
    return res.redirect("/login");
  }
};

//Base url
app.get("/", (req, res) => {
  res.render("index");
});

app.get("/register", checkLoggedIn, (req, res) => {
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

      res.redirect("/login");
    });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

app.get("/login", checkLoggedIn, (req, res) => {
  res.render("login");
});
app.post(
  "/login",
  passport.authenticate("local", {
    failureRedirect: "/login",
    successRedirect: "/profile",
  })
);
app.get("/logout", (req, res) => {
  try {
    req.logOut((err) => {
      if (err) {
        return next(err);
      }
      res.redirect("/");
    });
  } catch (error) {
    res.status(500).send(error.message);
  }
});
app.get("/profile", checkAuthenticate, (req, res) => {
  res.render("profile");
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
