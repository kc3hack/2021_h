'use strict';
const express = require('express');
const router = express.Router();
const database = require('../models/sequelize-loader')
const authenticationEnsurer = require('./authentication-ensurer');
const csrf = require('csurf');
const csrfProtection = csrf({ cookie: true });

router.get('/', authenticationEnsurer, csrfProtection, (req, res, next) => {

	res.render('chat', { title: 'Chatree (仮) - OpenChat', user: req.user, csrfToken: req.csrfToken() });
});

router.post('/', authenticationEnsurer, csrfProtection, (req, res, next) => {
	console.log(req.body); //TODO: 予定と候補を保存する実装をする
	res.redirect('/chat');
})

module.exports = router;
