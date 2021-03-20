var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Chatree', user: req.user });
  // res.render('test', { title: 'Chatree', user: req.user });
});

module.exports = router;
