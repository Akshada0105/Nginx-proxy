const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello from the backend server!');
});

app.listen(port, '0.0.0.0', (err) => {
  if (err) {
    console.error('Error starting the backend server:', err);
  } else {
    console.log(`Backend server running on http://localhost:${port}`);
  }
});
