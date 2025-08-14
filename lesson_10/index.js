const express = require("express");
const app = express();

const PORT = 3000;

const myMiddlewere = (req, res, next) => {
  req.currnetTime = new Date(Date.now());
  console.log(`Middle were Running ${req.currnetTime}`);
  next();
};

// app.get("/", myMiddlewere, (req, res) => {
//   res.send(`This is home page `);
// });
// app.get("/about", myMiddlewere, (req, res) => {
//   res.send(`This is About page `);
// });

// app.get("/", (req, res) => {
//   res.send(`This is home page `);
// });
// app.get("/about", (req, res) => {
//   res.send(`This is About page `);
// });

app.use(myMiddlewere);

app.use((err, req, res, next) => {
  res.status(500).send("Something broke!");
});

app.get("/", (req, res) => {
  res.send(`This is home page `);
});
app.get("/about", (req, res) => {
  res.send(`This is About page `);
});

app.use((req, res, next) => {
  res.send("404 not valid route");
});

app.listen(PORT, () => {
  console.log(`Server is runnig at http://localhost:${PORT}`);
});
