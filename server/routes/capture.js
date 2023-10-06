const express = require("express");
const { autoCapture, captureScreenshot, captured, deleteScreenShots, getAllImages, getScreenShots } = require ("../controllers/capture-controller.js");
const captureRouter = express.Router();

captureRouter.get("/", captureScreenshot );
captureRouter.get("/images/:id", getScreenShots );
captureRouter.get("/images", getAllImages);
captureRouter.delete("/images/:id", deleteScreenShots );
captureRouter.get("/start-capture", autoCapture );
captureRouter.get("/capture-screenshot", captured );


module.exports = captureRouter;