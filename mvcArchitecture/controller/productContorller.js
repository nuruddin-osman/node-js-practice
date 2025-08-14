const products = require("../models/productModels");
const path = require("path");

exports.getProdcut = (req, res) => {
  res.sendFile(path.join(__dirname + "/../views/product.html"));
};

exports.postProduct = (req, res) => {
  const name = req.body.name;
  const price = req.body.price;
  const product = {
    name,
    price,
  };
  products.push(product);
  res.send(products);
};
