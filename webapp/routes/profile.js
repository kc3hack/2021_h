'use strict';
const express = require('express');
const router = express.Router();
const authenticationEnsurer = require('./authentication-ensurer');
const csrf = require('csurf');
const csrfProtection = csrf({ cookie: true });

router.get('/', authenticationEnsurer, csrfProtection, (req, res, next) => {
	res.render('profile', { title: 'Chatree (仮) - UserProfile', user: req.user, csrfToken: req.csrfToken() });
});

module.exports = router;
