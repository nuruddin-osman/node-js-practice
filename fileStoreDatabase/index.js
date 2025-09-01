const express = require("express");
const multer = require("multer");
const app = express();

const PORT = 5004;

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    const name = Date.now() + "-" + file.originalname;
    cb(null, name);
  },
});

const upload = multer({ storage: storage });

app.get("/", (req, res) => {
  res.send("hello");
});
app.get("/register", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});
app.post("/register", upload.single("myfile"), (req, res) => {
  res.status(200).json({
    message: "success",
  });
});

app.listen(PORT, () => {
  console.log(`Serer is running at this http://localhost:${PORT}`);
});
