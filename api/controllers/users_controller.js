'use strict'
const express = require('express');
const router = express.Router();
const passport = require('passport');
const Strategy = require('passport-twitter').Strategy;

let User = require('../models/user');


router.route('/login/twitter')
  .get(passport.authenticate('twitter'));

router.route('/login/twitter/return')
  .get(passport.authenticate('twitter', { failureRedirect: '/login/twitter' }),
    function(req, res) {
      console.log(res)
      res.redirect('http://localhost:8080/webpack-dev-server/');
    });

router.route('/profile')
  .get(function(req, res){
    res.header("Access-Control-Allow-Credentials", true);
      console.log('hit profile');
      // res.json('profile', { user: req.user });
      res.json({ user: req.user });
    });

module.exports = router;
