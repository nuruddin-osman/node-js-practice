require("dotenv").config();
const app = require("./app");

const port = process.env.PORT;

app.get("/", (req, res) => {
  res.send("This is an home page");
});

app.use((req, res, next) => {
  res.status(404).send("route is not found");
});
app.use((err, req, res, next) => {
  res.status(500).send("Something broke!");
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
