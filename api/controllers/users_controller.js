'use strict'
const express = require('express');
const router = express.Router();
const passport = require('passport');
const Strategy = require('passport-twitter').Strategy;
const mongoose = require('mongoose');

let User = require('../models/user');


router.route('/login/twitter')
  .get(passport.authenticate('twitter'));

router.route('/login/twitter/return')
  .get(passport.authenticate('twitter', { failureRedirect: '/login/twitter' }),
    function(req, res) {
      debugger;
      // res.json(res.req.user);
      res.redirect('http://localhost:8080/webpack-dev-server/');
    });

router.route('/profile')
  .get(function(req, res){
    res.header("Access-Control-Allow-Credentials", true);
      console.log('hit profile');
      // res.json('profile', { user: req.user });
      res.json({ user: req.user });
    });

router.route('/profile')
  .put(updateUser);

  function updateUser(req, res) {
    debugger;
  let id = req.body._id;

  console.log(id);
    User.findOne({_id: id}, function(err, user){
    if(err) throw err;
    console.log(user);
    if(req.body.podcast)user.podcasts = req.body.podcast;
    console.log(req.body.podcast);
    user.save(function(err){

    if(err) throw err;

    res.json({message: 'podcast added successfully', user: user})
  });
  })
}

router.route('/')

module.exports = router;
