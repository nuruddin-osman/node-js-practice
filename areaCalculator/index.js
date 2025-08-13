const express = require("express");
const bodyParser = require("body-parser");
const app = express();

const PORT = 3000;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.get("/triangle", (req, res) => {
  res.sendFile(__dirname + "/triangle.html");
});

app.get("/circle", (req, res) => {
  res.sendFile(__dirname + "/circle.html");
});
app.post("/triangle", (req, res) => {
  const { height, base } = req.body;
  const triangleArea = 0.5 * height * base;
  res.send(`Triangle Area result = ${triangleArea}`);
});
app.post("/circle", (req, res) => {
  const radius = req.body.radius;
  const circleArea = Math.PI * radius * radius;
  res.send(`Circle Area result = ${circleArea}`);
});

app.listen(PORT, () => {
  console.log(`server is running at http://localhost:${PORT}`);
});
