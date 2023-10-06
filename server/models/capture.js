const mongoose = require("mongoose");

const screenshotSchema = new mongoose.Schema({
  image: Buffer,
});

const Screenshot = mongoose.model('Screenshot', screenshotSchema);
module.exports = Screenshot