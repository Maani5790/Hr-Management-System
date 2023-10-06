const EmployeeActivity = require('../models/activity.js');
const puppeteer = require('puppeteer-core');
const { executablePath } = require('puppeteer')


const captureActivity = async (employeeId, url) => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(url);
  const screenshot = await page.screenshot({ fullPage: true });
  await browser.close();

  const activity = new EmployeeActivity({
    employeeId,
    activityType: 'Browser Activity',
    screenshot: screenshot.toString('base64'), 
  });
  await activity.save();
};

const createActivity = async (req, res) => {
  try {
    const { employeeId, url } = req.body;
    await captureActivity(employeeId, url);
    res.status(201).json({ message: 'Activity captured successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
    console.log(error)
  }
};

module.exports = { captureActivity, createActivity }










// const EmployeeActivity = require('../models/activity.js');

// const createActivity = async (req, res) => {
//   try {
//     const { employeeId, activityType } = req.body;
//     const activity = new EmployeeActivity({ employeeId, activityType });
//     await activity.save();
//     res.status(201).json(activity);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// };

// module.exports = { createActivity }
