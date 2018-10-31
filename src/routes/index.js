var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.use('/proposal',require('./proposal'))
router.use('/heads',require('./heads'))
<<<<<<< HEAD
router.use('/request',require('./request'))
=======
router.use('/headsUnderProject',require('./headsUnderProject'))
router.use('/people',require('./people'))

>>>>>>> 884b15cb5b5098da65b812ee2bc08773e4dd03e2
module.exports = router;
