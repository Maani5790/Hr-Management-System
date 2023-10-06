const express = require('express');
const app = express();

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});
app.get('/test-error', (req, res, next) => {
  try {
    const result = 1 / 0;
    res.json({ result });
  } catch (error) {
    
    next(error);
  }
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
