const express = require("express");
const app = express();
const path = require("path");
const userRoute = require("../routes/user.routes");

app.get("/", (req, res) => {
  res.send("<h1>This is an Home page</h1>");
});

app.use("/api/user", userRoute);

app.use("/register", (req, res) => {
  res.status(200).json({
    message: "Successfull",
    statusCode: 200,
  });
});
app.use("/users", (req, res) => {
  res.redirect("/login");
});
app.use("/coocki", (req, res) => {
  res.cookie("name", "rabeya");
  res.cookie("age", "20");
  res.clearCookie("name");
  res.appendHeader("id", "20000");
  res.end();
});
app.use("/login", (req, res) => {
  res.statusCode = 202;
  res.sendFile(path.join(__dirname, "../views/index.html"));
});
app.use((req, res) => {
  res.send("<h1>404 page not fond</h1>");
});

module.exports = app;
