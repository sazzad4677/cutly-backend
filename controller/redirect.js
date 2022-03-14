const asyncErrorHandler = require("../middleware/asyncErrorHandler");
const urlSchema = require("../model/UrlSchema");
const ErrorHandler = require("../utils/errorHandler");

exports.redirect = asyncErrorHandler(async (req, res, next) => {
  const shortUrl = await urlSchema.findOne({ shortUrl: req.params.shortUrl });
  if (!shortUrl) {
    return next(new ErrorHandler("Invalid URL", 400));
  }
  const url = shortUrl.fullUrl;
  res.status(200).redirect(url);
});
