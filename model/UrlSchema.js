const mongoose = require("mongoose");
const validator = require("validator");
const { customAlphabet } = require("nanoid");

// Unique Identifier
const alphabet = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const nanoId = customAlphabet(alphabet, 8);

const UrlSchema = new mongoose.Schema({
  fullUrl: {
    type: String,
    required: true,
    validate: [
      (value) =>
        validator.isURL(value, {
          require_protocol: true,
        }),
      "Please ensure the url is correct and includes the http(s) protocol",
    ],
  },
  shortUrl: {
    type: String,
    required: true,
    unique: true,
    default: nanoId,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("urlSchema", UrlSchema);
