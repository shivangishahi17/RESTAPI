const express = require('express');
const logger = require('./middlewares/questions.logger');


const app = express();
const port = 8080;



// Middleware to parse JSON requests
app.use(express.json());

// API endpoint
app.post('/predict', (req, res) => {
  const { question } = req.body;

  // Error handling 
  if (!question) {
    return res.status(400).json({ error: 'Invalid request. Please provide a question.' });
  }

  // Log the question
  logger( question );

  // Hardcoded prediction response
  const prediction = 'The projected growth rate is 5%';

  // Send the response
  res.json({ prediction });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);

});