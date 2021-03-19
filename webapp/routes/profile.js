'use strict';
const express = require('express');
const router = express.Router();
const authenticationEnsurer = require('./authentication-ensurer');
const csrf = require('csurf');
const csrfProtection = csrf({ cookie: true });

router.get('/', authenticationEnsurer, (req, res, next) => {
	res.render('profile', { title: 'プロダクト名', user: req.user, csrfToken: req.csrfToken() });
});

module.exports = router;
