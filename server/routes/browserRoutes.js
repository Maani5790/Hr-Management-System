const express = require('express');
const { saveBrowserData } = require('../controllers/browser.controller.js');
const browserRouter = express.Router();

browserRouter.post('/browsers', saveBrowserData );

module.exports = browserRouter;
