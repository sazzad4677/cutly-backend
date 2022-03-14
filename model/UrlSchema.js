const mongoose = require("mongoose");
const { customAlphabet } = require("nanoid");

// Unique Identifier
const alphabet = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const nanoId = customAlphabet(alphabet, 8);

const UrlSchema = new mongoose.Schema({
  fullUrl: {
    type: String,
    required: true,
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
