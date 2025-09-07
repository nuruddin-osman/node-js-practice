require("dotenv").config();
const app = require("./app");

const PORT = process.env.PORT || 4000;

app.get("/", (req, res) => {
  res.render("index");
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
