const express = require('express');
const { saveScreenData } = require('../controllers/screen-controller.js');
const screenRouter = express.Router();

screenRouter.post('/screens', saveScreenData);

module.exports = screenRouter;
