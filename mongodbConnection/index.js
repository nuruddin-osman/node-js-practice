const express = require("express");
const mongoose = require("mongoose");
const app = express();

const port = 3002;

// mongoose
//   .connect("mongodb://127.0.0.1:27017/testProductDb")
//   .then(() => console.log("Db is connected"))
//   .catch((error) => {
//     console.log("Db is not connected");
//     process.exit(1);
//   });

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/testProductDb");
    console.log("Db is connected");
  } catch (error) {
    console.log(error.message);
    console.log("Db is not connected");
    process.exit(1);
  }
};

app.get("/", (req, res) => {
  res.send("This is an home page");
});

app.listen(port, async () => {
  console.log(`Server is running at http://localhost:${port}`);
  await connectDB();
});
