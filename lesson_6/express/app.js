// app.get("/", (req, res) => {
//   res.send("This is an Get request in Home page");
//   res.end();
// });
// app.post("/", (req, res) => {
//   res.send("This is an Post request in Home page");
//   res.end();
// });
// app.put("/", (req, res) => {
//   res.send("This is an Put request in Home page");
//   res.end();
// });
// app.delete("/", (req, res) => {
//   res.send("This is an Delete request in Home page");
//   res.end();
// });

const express = require("express");
const app = express();
const userRoute = require("../routes/user.routes");

app.get("/", (req, res) => {
  res.send("<h1>This is an Home page</h1>");
});

app.use("/api/user", userRoute);

app.use((req, res) => {
  res.send("<h1>404 page not fond</h1>");
});

module.exports = app;
