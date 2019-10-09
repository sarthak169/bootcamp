var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Not Express' });
});
router.get('/info', function (req, res, next) {
  res.render('index', { title: 'Sarthak' });
});
module.exports = router;
