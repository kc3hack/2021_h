var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Chatree (仮)', user: req.user });
  // res.render('test', { title: 'Chatree (仮)', user: req.user });
});

module.exports = router;
