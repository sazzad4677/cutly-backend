const asyncErrorHandler = require("../middleware/asyncErrorHandler");
const urlSchema = require("../model/UrlSchema");
const { customAlphabet } = require("nanoid");

exports.urlShortener = asyncErrorHandler(async (req, res, next) => {
  const alphabet = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let nanoId = customAlphabet(alphabet, 8);
  // Check Full URL already exists
  const findUrl = await urlSchema.findOne({ fullUrl: req.body.fullUrl });
  if (findUrl) {
    return res.status(200).json({
      success: true,
      url: findUrl,
    });
  }
  // handle duplicate short url
  const existNanoID = await urlSchema.exists({ shortUrl: nanoId() });
  if (existNanoID) {
    nanoId = customAlphabet(alphabet, 9);
  }
  const createUrl = await urlSchema.create({
    fullUrl: req.body.fullUrl,
    shortUrl: nanoId(),
    date: Date.now()
  });

  res.status(200).json({
    success: true,
    url: createUrl,
  });
});
