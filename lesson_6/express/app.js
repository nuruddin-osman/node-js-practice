const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("This is an Get request in Home page");
  res.end();
});
app.post("/", (req, res) => {
  res.send("This is an Post request in Home page");
  res.end();
});
app.put("/", (req, res) => {
  res.send("This is an Put request in Home page");
  res.end();
});
app.delete("/", (req, res) => {
  res.send("This is an Delete request in Home page");
  res.end();
});

module.exports = app;
