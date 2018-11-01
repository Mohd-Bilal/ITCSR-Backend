var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.use('/proposal',require('./proposal'))
router.use('/heads',require('./heads'))

router.use('/request',require('./request'))
router.use('/headsUnderProject',require('./headsUnderProject'))
router.use('/people',require('./people'))
router.use('/upload',require('./file'))


module.exports = router;
