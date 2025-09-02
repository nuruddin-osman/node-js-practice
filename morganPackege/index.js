const express = require("express");
const morgan = require("morgan");
const chalk = require("chalk");

const app = express();
app.use(morgan("dev"));

const error = chalk.bold.red;
const warning = chalk.hex("#FFA500").bold;

console.log(error("this is an error"));
console.log(warning("this is an warning"));

const PORT = 3990;

app.get("/", (req, res) => {
  res.send("hello");
});
app.post("/", (req, res) => {
  res.status(201).send("this is post route");
});

app.listen(PORT, () => {
  console.log(
    chalk.bgRed.bold.rgb(
      255,
      136,
      0
    )(`this server is running at http://localhost:${PORT}`)
  );
});
