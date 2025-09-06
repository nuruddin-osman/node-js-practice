require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bcrypt = require("bcrypt");

// const md5 = require("md5");

const app = express();
const saltRounds = 10;

const User = require("./models/user.model");
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.USER_DB);
    console.log("DB is connected");
  } catch (error) {
    console.log("DB is not connected");
    console.log(error.message);
    process.exit(1);
  }
};

const PORT = process.env.PORT || 4000;
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).sendFile(__dirname + "/./views/index.html");
});

app.post("/register", async (req, res) => {
  try {
    const email = req.body.email;
    // const password = md5(req.body.password);
    const password = req.body.password;
    bcrypt.hash(password, saltRounds, async (err, hash) => {
      if (err) {
        return res.status(500).send({ message: "Error hashing password" });
      }
      const newUser = new User({
        email,
        password: hash,
      });
      if (newUser) {
        await newUser.save();
        res.status(201).send({ status: true, newUser });
      } else {
        res.status(404).send({ message: "User is not created" });
      }
    });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

app.post("/login", async (req, res) => {
  const email = req.body.email;
  // const password = md5(req.body.password);
  const password = req.body.password;
  try {
    const user = await User.findOne({ email: email });

    if (user) {
      bcrypt.compare(password, user.password, (err, result) => {
        if (result === true) {
          res.status(201).send({ status: true, user });
        }
      });
    } else {
      res.status(404).send({ message: "email or password invalid" });
    }
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

app.use((req, res, next) => {
  res.status(404).json({ message: "404 page not found" });
});
app.use((err, req, res, next) => {
  res.status(500).json({ message: "Internal Server Error" });
});
app.listen(PORT, async () => {
  console.log(`Server is running at http://localhost:${PORT}`);
  await connectDB();
});
