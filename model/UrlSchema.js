const mongoose = require("mongoose");
const nanoId = require("nanoid");

const UrlSchema = new mongoose.Schema({
  fullUrl: {
    type: String,
    required: true,
  },
  shortUrl: {
    type: String,
    required: true,
    default: () => nanoId(5),
  },
});

module.exports = mongoose.model("urlSchema", UrlSchema);
