const express = require("express");
const userRouter = require("./routes/user.route");
const productRouter = require("./routes/product.route");
const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Hello Home page");
});

app.use(userRouter);
app.use(productRouter);

app.use((req, res, next) => {
  res.status(404).send({
    message: "not a valid route",
  });
});
app.listen(PORT, () => {
  console.log(`server is running at http://localhost:${PORT}`);
});
