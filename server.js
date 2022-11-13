const express = require('express'); // brings in the express workshop
const db = require('./config/connection'); // brings in a file "WE CODED" to connect to our mongo datab
const routes = require('./routes');
const router = require('express').Router();

const PORT = process.env.PORT || 3001; // decide which port to use
const app = express(); // open up the express workshop

// configurations crap to tell it to use json
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);
// use the code where i defined my routes

// connect to my database one teime
db.once('open', () => {
  // what to do next
  // then listen on that port for an http req
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}`);
  });
});
