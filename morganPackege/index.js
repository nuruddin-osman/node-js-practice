const express = require("express");
const morgan = require("morgan");

const app = express();
app.use(morgan("dev"));

const PORT = 3990;

app.get("/", (req, res) => {
  res.send("hello");
});
app.post("/", (req, res) => {
  res.status(201).send("this is post route");
});

app.listen(PORT, () => {
  console.log(`this server is running at http://localhost:${PORT}`);
});
