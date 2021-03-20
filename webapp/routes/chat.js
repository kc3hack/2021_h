'use strict';
const express = require('express');
const router = express.Router();
const authenticationEnsurer = require('./authentication-ensurer');
const User = require('../models/user');
const Card = require('../models/card');
const moment = require('moment-timezone');
const csrf = require('csurf');
const csrfProtection = csrf({ cookie: true });

// router.get('/', authenticationEnsurer, csrfProtection, (req, res, next) => {
router.get('/', csrfProtection, (req, res, next) => {

  if (req.user) {

    Card.findAll( // { order: [['updatedAt', 'ASC']] }
    ).then((cards) => {

      cards.forEach((card) => card.formattedUpdatedAt = moment(card.updatedAt).tz('Asia/Tokyo').format('YYYY/MM/DD HH:mm'));
      res.render('chat', { title: 'Chatree - OpenChat', user: req.user, cards: cards, csrfToken: req.csrfToken() });
    });
  }

  else res.render('chat', { title: 'Chatree - OpenChat', user: req.user, csrfToken: req.csrfToken() });
});

// router.post('/', authenticationEnsurer, csrfProtection, (req, res, next) => {
router.post('/', csrfProtection, (req, res, next) => {

  const updatedAt = new Date();
  // console.log(req.body);
  Card.create(
    {
      sendTo: parseInt(req.body.sendTo) || null,
      content: req.body.content.slice(0, 255),
      createdBy: req.user.id,
      updatedAt: updatedAt,
    }
  ).then(() => res.redirect('/chat'));
})

module.exports = router;
