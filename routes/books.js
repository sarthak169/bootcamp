var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/search', function (req, res, next) {
  res.status(200).json({ id: 1, name: "Harry Potter", author: "J.K. Rowling" })
});
router.post('/add',function(req,res,next){
  console.log(req.body);
  res.status(200).json({message: req.body.id1});
});
router.get('/add', function(req,res,next){
  // console.log(req.body);
  res.render('book');
});
router.post('/add', function(req,res,next){
  console.log(req.body);
  res.json('Book has been posted');
});
router.get('/add/:id/:name/:auth', function(req,res,next){
  const id = req.params.id 
  const name=req.params.name 
  const auth = req.params.auth
  console.info('Name:',name,'id: ',id,'auth: ',auth);
  res.status(200).json({Message:'Task completed'});
});
router.get('/test',function(req,res,next){
  red.render('book');
})

router.get('/find/:id', function(req,res,next){
  const {id}=req.params;
  console.info('here is the id you have entered',id);
  res.status(200).json({message: 'Book has been found here'});
});


module.exports = router;
