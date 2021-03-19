'use strict';
const express = require('express');
const router = express.Router();
const database = require('../models/sequelize-loader')
const authenticationEnsurer = require('./authentication-ensurer');

router.get('/', authenticationEnsurer, (req, res, next) => {
	res.render('chat', { user: req.user });
});

router.post('/', authenticationEnsurer, (req, res, next) => {
	res.render('chat', { user: req.user, card: req.body['content'] });
})

module.exports = router;
