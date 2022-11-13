// open the express tool bag
const router = require('express').Router();
// requre the api folder
const api = require('./api');

// use that toolback to do an app.use api the api folder
router.use('/api', api);

// export the router tool that you updated so that server.js can use it
module.exports = router;
