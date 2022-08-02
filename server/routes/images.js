const express = require("express");

const router = express.Router();

const db = require("../db/connection");

const ObjectId = require("mongodb").ObjectId;

// GET ALL IMAGES
router.route("/images").get((req, res) => {
  let db_connect = db.getDb();
  db_connect
    .collection("images")
    .find({})
    .toArray((error, result) => {
      if (error) throw error;
      res.json(result);
    });
});
