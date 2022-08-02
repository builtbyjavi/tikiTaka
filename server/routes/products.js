const express = require("express");

// instance of express Router used to define routes
// will be added as middleware and control requests starting with path /products
const router = express.Router();

const db = require("../db/connection");

// helps convert the ID from string to ObjectId for _id
const ObjectId = require("mongodb").ObjectId;

//
// WHY DB CONNECT IN EACH ROUTE????
//

// GET ALL PRODUCTS
router.route("/products").get((req, res) => {
  let db_connect = db.getDb();
  db_connect
    .collection("products")
    .find({})
    .toArray((error, result) => {
      if (error) throw error;
      res.json(result);
    });
});

// GET SINGLE PRODUCT BY ID
router.route("/products/:id").get((req, res) => {
  let db_connect = db.getDb();
  let myquery = { _id: ObjectId(req.params.id) };
  db_connect.collection("products").findOne(myquery, (error, result) => {
    if (error) throw error;
    res.json(result);
  });
});

// CREATE NEW PRODUCT
router.route("/products/add").post((req, res) => {
  let db_connect = db.getDb();
  let my_obj = {
    name: req.body.name,
    position: req.body.position,
    level: req.body.level,
  };
  db_connect.collection("products").insertOne(my_obj, (error, result) => {
    if (error) throw error;
    res.json(result);
  });
});

// UPDATE PRODUCT BY ID
router.route("/update/:id").post((req, res) => {
  let db_connect = db.getDb();
  let myquery = { _id: ObjectId(req.params.id) };
  let newValues = {
    $set: {
      name: req.body.name,
      position: req.body.position,
      level: req.body.level,
    },
  };
});

// DELETE A RECORD (PRODUCT)
router.route("/:id").delete((req, res) => {
  let db_connect = db.getDb();
  let myquery = { _id: ObjectId(req.params.id) };
  db_connect.collection("products").deleteOne(myquery, (error, result) => {
    if (error) throw error;
    console.log("Deleted (1) product");
    res.json(result);
  });
});

module.exports = router;
