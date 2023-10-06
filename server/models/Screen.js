const mongoose = require('mongoose');

const screenSchema = new mongoose.Schema({
  userId: String,
  width: Number,
  height: Number,
  timestamp: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Screen', screenSchema);
