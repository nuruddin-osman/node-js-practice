const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "Username must be neded"],
    unique: true,
  },
  googleId: {
    type: String,
    required: [true, "password must be neded"],
  },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
