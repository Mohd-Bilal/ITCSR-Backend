var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.use('/proposal',require('./proposal'))
router.use('/heads',require('./heads'))

router.use('/authentication',require('./authentication'))
router.use('/request',require('./request'))
router.use('/headsUnderProject',require('./headsUnderProject'))
router.use('/people',require('./people'))

>>>>>>> 34788c2f78c867c227be83e09b201437948b774f
module.exports = router;
