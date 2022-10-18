const menuItems = require("./productData");
const cloudinary = require("cloudinary").v2;
const Product = require("../models/product");
const mongoose = require("mongoose");
require("dotenv").config({ path: "../config.env" });

mongoose.connect(process.env.ATLAS_URI);

const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log("CONNECTED TO DATABASE");
});

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_KEY,
  api_secret: process.env.CLOUDINARY_SECRET,
  secure: true,
});

const seedDB = async () => {
  await Product.deleteMany({});

  const assets = await cloudinary.search
    .expression("folder:tikiTaka/*")
    .max_results(100)
    .execute();

  const thumbnailList = await cloudinary.search
    .expression("tags=thumbnail")
    .max_results(18)
    .execute();

  for (let i = 0; i < menuItems.length; i++) {
    const folderName = menuItems[i].name.replaceAll(" ", "").toLowerCase();
    const imageList = assets.resources.filter(
      (img) => img.folder.replace("tikiTaka/", "").toLowerCase() === folderName
    );
    const thumbnail = thumbnailList.resources.filter(
      (img) => img.folder.replace("tikiTaka/", "").toLowerCase() === folderName
    );
    const product = new Product({
      ...menuItems[i],
      images: imageList,
      thumbnail: thumbnail ? thumbnail : { url: "" },
    });

    await product.save();
  }

  mongoose.connection.close();
};

seedDB();
