'use strict';
const express = require('express');
const Card = require('../models/card');
const router = express.Router();
const authenticationEnsurer = require('./authentication-ensurer');

router.get('/', authenticationEnsurer, (req, res, next) => {
	res.render('chat', { user: req.user, card: Card });
});

router.post('/', authenticationEnsurer, (req, res, next) => {
	console.log(req.body['content']);
	res.render('chat', { user: req.user, card: req.body['content'] });
})

module.exports = router;
