const asyncErrorHandler = require("../middleware/asyncErrorHandler");
const urlSchema = require("../model/UrlSchema");

exports.redirect = asyncErrorHandler(async (req, res, next) => {
  const shortUrl = await urlSchema.findOne({ shortUrl: req.params.shortUrl });
  if (shortUrl) {
    const url = shortUrl.fullUrl
    return res.status(200).redirect(url);
  }
  res.status(400).json({
    success: false,
    message: "Invalid URL",
  });
});
