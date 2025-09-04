const express = require("express");
const mongoose = require("mongoose");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const port = 3002;

//mongoos schema

const productSchema = new mongoose.Schema({
  title: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String, required: true },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

//mongoose models

const Product = mongoose.model("products", productSchema);

// mongoose
//   .connect("mongodb://127.0.0.1:27017/testProductDb")
//   .then(() => console.log("Db is connected"))
//   .catch((error) => {
//     console.log("Db is not connected");
//     process.exit(1);
//   });

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/testProductDb");
    console.log("Db is connected");
  } catch (error) {
    console.log(error.message);
    console.log("Db is not connected");
    process.exit(1);
  }
};

app.get("/", (req, res) => {
  res.send("This is an home page");
});

// app.post("/products", async (req, res) => {
//   try {
//     const productData = await Product.insertMany([
//       {
//         title: "iPhone 16",
//         price: 58000,
//         description: "This is an iPhone pad",
//       },
//       {
//         title: "iPhone 17",
//         price: 58000,
//         description: "This is an iPhone pad",
//       },
//       {
//         title: "iPhone 18",
//         price: 58000,
//         description: "This is an iPhone pad",
//       },
//     ]);
//     res.status(201).send(productData);
//   } catch (error) {
//     res.status(500).send({ message: error.message });
//   }
// });

app.post("/products", async (req, res) => {
  try {
    const { title, price, description } = req.body;

    // const newProduct = new Product({
    //   title: title,
    //   price: price,
    //   description: description,
    // });
    const newProduct = new Product({
      title,
      price,
      description,
    });

    const productData = await newProduct.save();
    res.status(201).send(productData);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

app.get("/products", async (req, res) => {
  try {
    const price = req.query.price;
    const title = req.query.title;
    let products;
    if (price && title) {
      products = await Product.find({
        $or: [{ price: price }, { title: title }],
      }).sort({ price: 1 });
    } else {
      products = await Product.find().sort({ price: 1 });
    }

    if (products) {
      res.status(200).send({
        message: "Return All products",
        status: true,
        data: products,
      });
    } else {
      res
        .status(404)
        .send({ message: "Products data is not found", status: false });
    }
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});
app.get("/products/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const product = await Product.findOne({ _id: id });
    if (product) {
      res.status(200).send({
        message: "Return a single product",
        status: true,
        data: product,
      });
    } else {
      res
        .status(404)
        .send({ message: "Product data is not found", status: false });
    }
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

app.delete("/products/:id", async (req, res) => {
  try {
    const id = req.params.id;
    // const deletedProduct = await Product.deleteOne({ _id: id });
    const deletedProduct = await Product.findByIdAndDelete({ _id: id });
    if (deletedProduct) {
      res.status(200).send({
        message: "Return a deleted product",
        status: true,
        data: deletedProduct,
      });
    } else {
      res
        .status(404)
        .send({ message: "Product data is not found", status: false });
    }
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

app.listen(port, async () => {
  console.log(`Server is running at http://localhost:${port}`);
  await connectDB();
});
