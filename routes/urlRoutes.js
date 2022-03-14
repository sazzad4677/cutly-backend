const express = require("express");
const router = express.Router();
const { urlShortener } = require("../controller/urlController");

router.route("/shortUrls").post(urlShortener);

module.exports = router;
