const express = require("express");
const { postProduct, getProdcut } = require("../controller/productContorller");
const router = express.Router();

router.get("/product", getProdcut);
router.post("/product", postProduct);

module.exports = router;
