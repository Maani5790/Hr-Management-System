const Browser = require('../models/Browser.js');

const saveBrowserData = async (req, res) => {
  try {
    const { userId, userAgent } = req.body;
    const browserData = new Browser({ userId, userAgent });
    await browserData.save();
    res.json({ message: 'Browser data received successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

module.exports = { saveBrowserData }
