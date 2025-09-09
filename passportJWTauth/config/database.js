const mongoose = require("mongoose");
require("dotenv").config();

mongoose
  .connect(process.env.CONNECT_DB)
  .then(() => console.log("DB is Connected!"))
  .catch((error) => {
    console.log(error);
    console.log("DB is not connected");
  });
