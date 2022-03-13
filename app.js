const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config({ path: "./config/config.env" });
// app initialization
const app = express();
app.use(express.json());
app.use(cors());

module.exports = app;