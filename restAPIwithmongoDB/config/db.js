const config = require("./config");
const mongoose = require("mongoose");

const dbURL = config.db.url;

mongoose
  .connect(dbURL)
  .then(() => console.log("Mongo db Connected!"))
  .catch((error) => {
    console.log(`Database connection faild ${error}`);
    process.exit(1);
  });
