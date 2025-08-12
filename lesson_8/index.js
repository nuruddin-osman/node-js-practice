const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("<h1>This is an Home page</h1>");
});
app.get("/user", (req, res) => {
  // const id = req.query.id;
  // const name = req.query.name;
  const { id, name } = req.query;
  res.send(`<h1>User id: ${id}</h1><h1>User name: ${name}</h1>`);
});
app.get("/route-perametter/userId/:id/userName/:name", (req, res) => {
  const id = req.params.id;
  const name = req.params.name;
  res.send(`<h1>User id: ${id}</h1><h1>User name: ${name}</h1>`);
});
app.get("/header", (req, res) => {
  const id = req.header("id");
  const name = req.header("name");
  res.send(`<h1>User id: ${id}</h1><h1>User name: ${name}</h1>`);
});
app.get("/body-parser", (req, res) => {
  // const name = req.body.name;
  // const email = req.body.email;
  // const phone = req.body.phone;
  // const subject = req.body.subject;
  const { name, email, phone, subject } = req.body;
  res.send(`
    name: ${name} <br/>
    email: ${email} <br/>
    phone: ${phone} <br/>
    subject: ${subject}
  `);
});

app.listen(3000, () => {
  console.log("server is running at http://localhost:3000");
});
