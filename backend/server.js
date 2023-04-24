const express = require("express");
const nodemailer = require("nodemailer");
const multiparty = require("multiparty");
require("dotenv").config();
const cors = require("cors");


const app = express();

app.route("/").get(function (req, res) {
  res.sendFile(process.cwd() + "/public/index.html");
});


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});


