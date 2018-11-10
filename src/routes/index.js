var express = require('express');
var router = express.Router();
const jwtVerifyToken = require('../middlewares/auth.js');



/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.use('/proposal',require('./proposal'))

router.use('/heads',require('./heads'))

//insert jwtVerifyToken in b/w all private routes
router.use('/heads',require('./heads'))

router.use('/authentication',require('./authentication'))
router.use('/request',require('./request'))
router.use('/headsUnderProject',require('./headsUnderProject'))
router.use('/people',require('./people'))
router.use('/upload',require('./file'))


module.exports = router;
