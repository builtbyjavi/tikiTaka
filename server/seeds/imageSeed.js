const imageData = require("./imageData");
const cloudinary = require("cloudinary").v2;
const Image = require("../models/image");
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
  await Image.deleteMany({});

  const assets = await cloudinary.search
    .expression("folder:tikiTaka/images/*")
    .max_results(1)
    .execute();

  for (let i = 0; i < imageData.length; i++) {
    const match = imageData[i].name.replace(" ", "").toLowerCase();
    const myImg = assets.resources.filter((img) =>
      img.filename.replace("_", "").toLowerCase().includes(match)
    );
    const image = new Image({
      ...imageData[i],
      url: myImg[0].url,
      filename: myImg[0].filename,
    });

    await image.save();
  }

  mongoose.connection.close();
};

seedDB();
