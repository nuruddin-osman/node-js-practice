const express = require("express");
const app = express();
const route = require("./routes/user.route");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("This is home page");
});
app.use("/api", route);

app.listen(4000, () => {
  console.log(`Server is running at http://localhost:4000`);
});
