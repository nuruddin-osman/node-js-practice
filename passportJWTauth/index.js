require("dotenv").config();
const app = require("./app");

const port = process.env.PORT;

app.get("/", (req, res) => {
  res.send("This is an home page");
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
