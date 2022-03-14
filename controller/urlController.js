const asyncErrorHandler = require("../middleware/asyncErrorHandler");
const urlSchema = require("../model/UrlSchema");
const { customAlphabet } = require("nanoid");

exports.urlShortener = asyncErrorHandler(async (req, res, next) => {
  const alphabet = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const nanoId = customAlphabet(alphabet, 8);
  // Check Full URL already exists
  const fullUrl = await urlSchema.findOne({ fullUrl: req.body.fullUrl });

  if (fullUrl) {
    return res.status(200).json({
      success: true,
      fullUrl,
    });
  }

  const url = await urlSchema.create({
    fullUrl: req.body.fullUrl,
    shortUrl: nanoId(),
  });

  res.status(200).json({
    success: true,
    url: url,
  });
});
