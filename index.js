// RESTful API

// app represents the app, it's necessary to run the import as a function
const express = require('express');
const app = express();
const PORT = 8080;

/* Middleware is shared code that runs before every endpoint callback
that I defined.
In this case, the middleware used is express.json(), which will handle every
received request and convert its to json */
app.use(express.json())

// Set the app to listen to port 8080
app.listen(
  PORT,
  () => console.log(`it's alive on http://localhost:${PORT}`)
)

// Endpoint for GET requests to localhost:8080/tshirt
app.get('/tshirt', (req, res) => {
  // send a response with code 200 and the following payload
  res.status(200).send({
    tshirt: '👕',
    size: 'large'
  })
});

// Endpoint for POST requests to localhost:8080/tshirt/some_id
app.post('/tshirt/:id', (req, res) => {
  const { id } = req.params;
  const { logo } = req.body;

  if (!logo) {
    res.status(418).send({message: 'We need a logo'})
  }

  res.send({
    tshirt: `👕 with your ${logo} and ID of ${id}`,
  });
});