require("dotenv").config();
const mongoose = require("mongoose");

mongoose
  .connect(process.env.CONNECT_DB)
  .then(() => console.log("DB Connected!"))
  .catch((error) => console.log(error.messge));
