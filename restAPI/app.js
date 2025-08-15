const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const path = require("path");
const userRouter = require("./routes/user.routes");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + "/views/index.html"));
});
app.use("/user", userRouter);

app.use((req, res, next) => {
  res.status(404).json({
    message: "path is not valid",
  });
});

app.use((err, req, res, next) => {
  res.status(500).json({
    message: "Something wrong",
  });
});
module.exports = app;
