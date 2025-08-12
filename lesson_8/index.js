const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("<h1>This is an Home page</h1>");
});
app.get("/user", (req, res) => {
  // const id = req.query.id;
  // const name = req.query.name;
  const { id, name } = req.query;
  res.send(`<h1>User id: ${id}</h1><h1>User name: ${name}</h1>`);
});

app.listen(3000, () => {
  console.log("server is running at http://localhost:3000");
});
