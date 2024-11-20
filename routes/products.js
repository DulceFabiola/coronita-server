const express = require("express");
const router = express.Router();
const {
  createProduct,
  readAllProducts,
  readOneProduct,
} = require("./../controllers/productController");

router.post("/create", createProduct);
router.get("/readall", readAllProducts);
router.get("/readone/:id", readOneProduct);

module.exports = router;
