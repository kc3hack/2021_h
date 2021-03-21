'use strict';
const express = require('express');
const router = express.Router();
const authenticationEnsurer = require('./authentication-ensurer');
const User = require('../models/user');
const csrf = require('csurf');
const csrfProtection = csrf({ cookie: true });

router.get('/', authenticationEnsurer, csrfProtection, (req, res, next) => {

	res.render('profile', { title: 'Chatree - Settings', user: req.user, csrfToken: req.csrfToken() });
});

router.post('/', authenticationEnsurer, csrfProtection, (req, res, next) => {

	User.findOne({ where: req.user.userId }).then((userData) => {

		if (userData) {

			userData.update(
				{
					displayName: req.body.displayName.slice(0, 255)
				}
			);
		}
	});

	res.redirect('/profile');
});

module.exports = router;
