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
      res.redirect('http://localhost:8080/webpack-dev-server/');
    });

router.route('/logout')
  .get(function(req,res){
    req.session.destroy(function (err) {
      res.redirect('/')
    });
  });

router.route('/profile')
  .get(function(req, res){
    res.header("Access-Control-Allow-Credentials", true);
      res.json({ user: req.user });
    });

router.route('/profile')
  .patch(updateUser);

  function updateUser(req, res) {
    let id = req.body.id_str;

    User.findOneAndUpdate({id_str: id},
      {$push: {podcasts: req.body.podcast}},
      {new: true},

      function(err,user) {
        if(err) throw err;

        if(req.body.podcast) user.podcasts = req.body.podcast;

        user.save(function(err){
        if(err) throw err;
        res.json({message: 'podcast added successfully', user: user})
        });
     });
  }

module.exports = router;
