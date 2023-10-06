const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Middleware to extract the user's IP address
app.use((req, res, next) => {
  const ipAddress = req.ip || req.connection.remoteAddress;
  req.userIp = ipAddress;
  next();
});

// Route to store the user's IP address
app.post('/api/store-ip', (req, res) => {
  const userIp = req.userIp;

  // Here, you can store the user's IP address in your database or perform any desired action
  // For this example, we'll simply respond with a success message
  res.json({ message: 'IP address stored successfully', userIp });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
