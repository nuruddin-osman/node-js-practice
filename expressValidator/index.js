const express = require("express");
const chalk = require("chalk");
const { body, validationResult } = require("express-validator");
const { userValidation } = require("./validations/users");
const userRouter = require("./routes/users.routes");
const app = express();
const port = 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("This is an home page");
});

app.use("/api", userRouter);

app.listen(port, () => {
  console.log(
    chalk.yellow.bgRed.bold(`Server is running at http://localhost:${port}`)
  );
});
