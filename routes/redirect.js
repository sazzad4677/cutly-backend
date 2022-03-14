const express = require("express");
const { redirect } = require("../controller/redirect");
const router = express.Router();

router.route("/:shortUrl").get(redirect);

module.exports = router;