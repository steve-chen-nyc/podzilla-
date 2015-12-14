'use strict'
const express = require('express');
const router = express.Router();
const passport = require('passport');
const Strategy = require('passport-twitter').Strategy;

let User = require('../models/user');

router.route('/login/twitter')
  .get(passport.authenticate('twitter'));

router.route('/login/twitter/return')
  .get(passport.authenticate('twitter', { failureRedirect: '/login' }),
    function(req, res) {
      console.log(res)
      res.redirect('http://localhost:8080');
    });

router.route('/profile')
  .get(require('connect-ensure-login').ensureLoggedIn(),
    function(req, res){
      res.json('profile', { user: req.user });
    });

module.exports = router;
