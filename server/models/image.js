const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const imageSchema = new Schema({
  name: String,
  url: String,
  filename: String,
});

module.exports = mongoose.model("Image", imageSchema);
