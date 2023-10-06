const express = require('express');
const { createActivity, captureActivity } = require('../controllers/activity-controllers.js');
const activityRouter = express.Router();

activityRouter.post('/capture-activity', captureActivity);
activityRouter.post('/create-activity', createActivity);

module.exports = activityRouter;
