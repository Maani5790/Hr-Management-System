const mongoose = require('mongoose');

const browserSchema = new mongoose.Schema({
  userId: String,
  userAgent: String,
  timestamp: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Browser', browserSchema);
