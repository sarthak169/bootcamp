const userController = require("../controller/ctrl"); 
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/add', function (req, res, next) {
  // console.log(req.body);
  res.render('mon');
});

router.post('/create', userController.createUser);
 router.get('/bday1',userController.IsBday);
 router.get('/bday2',userController.allBirthday);
router.get('/fullname', userController.getFullName);

module.exports = router;
