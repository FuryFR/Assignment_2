const express = require('express');
const app = express();
const port = process.env.PORT || 3000; // You can choose any port you prefer

// Serve static files using Express.static middleware
app.use(express.static('public'));

// Create a static endpoint for the root path "/"
app.get('/', (req, res) => {
  // Return your index.html file
  res.sendFile(__dirname + '/public/index.html');
});

// Start the Express server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
 

// Dynamic endpoint to handle AJAX requests
app.get('/api/data', (req, res) => {
    // Extract query parameters or URL parameters as needed
    const param = req.query.param;
  
    // Use a separate function to generate a JSON response based on the parameter
    const responseData = generateResponse(param);
  
    // Send the JSON response
    res.json(responseData);
  });
  
  // Separate function for generating dynamic response
  function generateResponse(param) {
    // Use the parameter to modify the response data
    const response = {
      message: `Response for param: ${param}`,
      // Add more properties as needed
    };
    return response;
  }
  
  module.exports = {
    generateResponse,
  };
  
