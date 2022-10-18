const express = require("express");
const app = express();
const path = require("path");
const cors = require("cors");

require("dotenv").config({ path: "./config.env" });

app.use(
  cors({
    origin: "*",
  })
);

app.use(express.json());
app.use(require("./routes/images"));
app.use(require("./routes/products"));

const db = require("./db/connection");

const port = process.env.PORT || 5000;

app.use(express.static(path.join(__dirname, "..", "client", "build")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "client", "build", "index.html"));
});

app.listen(port, () => {
  db.connectToServer((error) => {
    if (error) console.error(error);
  });
  console.log(`server listening on port: ${port}`);
});
