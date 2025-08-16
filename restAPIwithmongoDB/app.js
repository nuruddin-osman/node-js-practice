const express = require("express");
const path = require("path");
const usersRouter = require("./routes/users.routes");
require("./config/db");

const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + "/views/index.html"));
});
app.use("/api/users", usersRouter);

app.use((req, res, next) => {
  res.status(404).json({
    message: "invalid path url",
  });
});
app.use((err, req, res, next) => {
  res.status(500).json({
    message: "internal server error",
  });
});

module.exports = app;
