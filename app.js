"use strict";

const express = require("express");
const app = express();
const port = 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  res.send(`<h2>stock-api</h2>`);
});

const stockRoute = require("./routes/stock");
stockRoute(app);

app.listen(port, function () {
  console.log(`Server running at http://localhost:${port}/`);
});
