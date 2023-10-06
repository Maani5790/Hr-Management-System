const express = require("express");
const mongoose = require("mongoose");
const testingModel = require("../models/testing.js");
const testRouter = express.Router();

testRouter.get("/", async (req, res) => {
  try {
    const response = await testingModel.find({});
    res.json(response);
  } catch (error) {
    res.json(error);
  };
});

testRouter.post("/", async (req, res) => {
  try {
    const response = await testingModel.find({});
    res.json(response);
  } catch (error) {
    res.json(error);
  };
});

module.exports = testRouter;
