const express = require("express");
const multer = require("multer");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = 5004;

//databse connection
const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/userTest");
    console.log("Database is connected");
  } catch (error) {
    console.log("Database is not connected");
    console.log(error.message);
    process.exit(1);
  }
};

//file uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    const name = Date.now() + "-" + file.originalname;
    cb(null, name);
  },
});

const upload = multer({ storage: storage });

//models and schema

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "This value is must nedded"],
  },
  image: {
    type: String,
    required: [true, "This value is must nedded"],
  },
});

const User = mongoose.model("users", userSchema);

app.get("/", (req, res) => {
  res.send("hello");
});
app.get("/register", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});
app.post("/register", upload.single("image"), async (req, res) => {
  try {
    const newUser = new User({
      name: req.body.name,
      image: req.file.filename,
    });
    await newUser.save();
    res.status(201).send(newUser);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.listen(PORT, async () => {
  console.log(`Serer is running at this http://localhost:${PORT}`);
  await connectDB();
});
