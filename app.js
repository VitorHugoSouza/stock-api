"use strict";

const express = require("express");
const app = express();
const cors = require('cors')
const port = 5000;

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  res.send(`<h2>stock-api</h2>`);
});

const stockRoute = require("./routes/stock");
const authRoute = require("./routes/auth");

stockRoute(app);
authRoute(app);

app.listen(port, function () {
  console.log(`Server running at http://localhost:${port}/`);
});
