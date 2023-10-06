const mongoose = require("mongoose");

const authSchema = mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { Timestamp: true }
);

const auth = mongoose.model("Authentication", authSchema);

module.exports = auth;
