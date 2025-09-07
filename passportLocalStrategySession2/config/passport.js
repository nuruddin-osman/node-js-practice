const passport = require("passport");
const User = require("../models/users.models");
const LocalStrategy = require("passport-local").Strategy;
const bcrypt = require("bcrypt");

passport.use(
  new LocalStrategy(async (username, password, done) => {
    try {
      const user = await User.findOne({ username: username });
      if (!user) {
        return done(null, false, { message: "Incorrect Username" });
      }
      if (!bcrypt.compare(password, user.password)) {
        return done(null, false, { message: "Incorrect Password" });
      }

      return done(null, user);
    } catch (error) {
      return done(error);
    }
  })
);

passport.serializeUser(function (user, done) {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  try {
    const user = await User.findById(id);
    if (!user) {
      done(null, false);
    }
    done(null, user);
  } catch (error) {
    done(error, false);
  }
});
