const { MongoClient } = require("mongodb");
const db = process.env.ATLAS_URI;
const client = new MongoClient(db, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

var _Db;

module.exports = {
  connectToServer: function (callback) {
    client.connect(function (error, db) {
      if (db) {
        _Db = db.db("test");
        console.log("Successfully connected to MongoDB :)");
      }
      return callback(error);
    });
  },
  getDb: function () {
    return _Db;
  },
};
