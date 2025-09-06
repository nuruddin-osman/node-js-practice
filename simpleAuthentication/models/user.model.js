const mongoose = require("mongoose");

const usersSchema = mongoose.Schema({
  email: {
    type: String,
    required: [true, "Eamil must nedded"],
    unique: [true, "this email is all ready used"],
    trim: true,
    lowercase: [true, "must be a use small letter"],
  },
  password: {
    type: String,
    required: [true, "Password must nedded"],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("User", usersSchema);
