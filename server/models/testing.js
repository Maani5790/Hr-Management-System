const mongoose = require("mongoose");

const testSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  ingredients: [{ type: String, required: true }],
  instructions: [{ type: String, required: true }],
  imageUrl: [{ type: String, required: true }],
  cookingTime: [{ type: String, required: true }],
  userOwner: [{ type: mongoose.Schema.Types.ObjectId, required:true, ref: "users" }],
});

const testing = mongoose.model("testing", testSchema);
module.exports = testing;
