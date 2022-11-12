const router = require('express').Router();
const thoughtroutes = require('./thoughtroutes');
const userroutes = require('./userroutes');

router.use('/user', userroutes);
router.use('/thoughts', thoughtroutes);

module.exports = router;
