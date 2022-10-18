const express = require("express");

const router = express.Router();

const db = require("../db/connection");

// GET ALL IMAGES
router.route("/images").get((req, res) => {
  let db_connect = db.getDb();
  db_connect
    .collection("images")
    .find({})
    .toArray((error, result) => {
      if (error) {
        console.log(error.response.data);
      }
      res.json(result);
    });
});

module.exports = router;
