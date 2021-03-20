var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {

<<<<<<< HEAD
  res.render('test', { title: 'Chatree', user: req.user });
  // res.render('test', { title: 'Chatree', user: req.user });
=======
  // res.render('index', { title: 'Chatree', user: req.user });
  res.render('test', { title: 'Chatree', user: req.user });
>>>>>>> 6e9ef1227f7cc9f25c35579af5ce75298c4c1dd0
});

module.exports = router;
