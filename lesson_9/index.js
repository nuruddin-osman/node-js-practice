const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Home route
app.get("/", (req, res) => {
  res.send("This is Home page");
});

// Product route with numeric validation
// app.get("/product/:id", (req, res) => {
//   const id = req.params.id;
//   if (!/^[0-9]{3}\d*$/.test(id)) {
//     return res.status(400).json({ message: "Invalid product ID" });
//   }
//   res.send(`<h1>Product ID: ${id}</h1>`);
// });
// Product route with numeric validation
app.get("/product/:id", (req, res) => {
  const id = req.params.id;
  if (!/^[0-9]{3}$/.test(id)) {
    return res.status(400).json({ message: "Invalid product ID" });
  }
  res.send(`<h1>Product ID: ${id}</h1>`);
});

app.get("/products/:id", (req, res) => {
  const id = req.params.id;
  if (!/^[a-zA-Z]+$/.test(id)) {
    return res.status(400).json({ message: "Invalid product ID" });
  }
  res.send(`<h1>Product ID: ${id}</h1>`);
});

// 404 route
app.use((req, res) => {
  res.status(404).json({ message: "Not a valid path" });
});
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
