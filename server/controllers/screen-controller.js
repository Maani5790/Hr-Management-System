const Screen = require('../models/Screen.js');

const  saveScreenData = async (req, res) => {
  try {
    const { userId, width, height } = req.body;
    const screenData = new Screen({ userId, width, height });
    await screenData.save();
    res.json({ message: 'Screen data received successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

module.exports = { saveScreenData }
