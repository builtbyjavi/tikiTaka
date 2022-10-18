const express = require("express");

// instance of express Router used to define routes
// will be added as middleware and control requests starting with path /products
const router = express.Router();

const db = require("../db/connection");

// helps convert the ID from string to ObjectId for _id
const ObjectId = require("mongodb").ObjectId;

// GET ALL PRODUCTS
router.route("/products").get((req, res) => {
  let db_connect = db.getDb();
  db_connect
    .collection("products")
    .find({})
    .toArray((error, result) => {
      if (error) {
        console.log(error.response.data);
      }
      res.json(result);
    });
});

// GET SINGLE PRODUCT BY ID
router.route("/products/:id").get((req, res) => {
  let db_connect = db.getDb();
  let myquery = { _id: ObjectId(req.params.id) };
  db_connect.collection("products").findOne(myquery, (error, result) => {
    if (error) {
      console.log(error.response.data);
    }
    res.json(result);
  });
});

module.exports = router;
