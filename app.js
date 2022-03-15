const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const urlRoutes = require("./routes/urlRoutes");
const redirect = require("./routes/redirect");
const errorMiddleware = require("./middleware/errorMiddleware");

dotenv.config({ path: "./config/config.env" });
// app initialization
const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());
app.use("/api/",urlRoutes);
app.use("/api/",redirect);
app.use(errorMiddleware);
module.exports = app;
