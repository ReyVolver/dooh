var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Dooh' });
});

router.get('/resume', function(req, res, next) {
  res.render('resume', { title: 'Dooh' });
});

module.exports = router;
