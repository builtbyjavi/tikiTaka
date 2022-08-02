const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const imageSchema = new Schema({
  url: String,
  filename: String,
});

const options = { toJSON: { virtuals: true } };

const productSchema = new Schema(
  {
    name: String,
    price: Number,
    images: [imageSchema],
    thumbnail: Object,
    description: String,
    menuSection: String,
  },
  options
);

module.exports = mongoose.model("Product", productSchema);
