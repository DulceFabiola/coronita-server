const { Schema, model } = require("mongoose");

const productSchema = Schema({
  sku: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  amount: {
    value: {
      type: Number,
      required: true,
    },
    currency: {
      type: String,
      required: true,
    },
  },
  publicAmount: {
    type: Number,
    required: true,
  },
  mainImageUrl: {
    type: String,
    default: "",
  },
  imageUrls: {
    type: Array,
  },
  brand: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  presentation: {
    type: String,
    required: true,
  },
  inventory: {
    type: Number,
  },
  specifications: {
    title: {
      type: String,
    },
    description: {
      type: String,
    },
  },
});

const Product = model("Product", productSchema);

module.exports = Product;
