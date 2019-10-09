var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/login', (req,res,next) => {
  res.status('200').render('auth')
})

module.exports = router;