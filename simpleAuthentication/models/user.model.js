const mongoose = require("mongoose");
const encrypt = require("mongoose-encryption");

const usersSchema = new mongoose.Schema({
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

const encKey = process.env.ENCRYPTION_KEY;

usersSchema.plugin(encrypt, {
  secret: encKey,
  encryptedFields: ["password"],
});

module.exports = mongoose.model("User", usersSchema);
