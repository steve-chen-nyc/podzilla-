'use strict';

angular.module('Podcasts')
  .controller('PodcastsController', PodcastsController);

PodcastsController.$inject = ['$http'];

function PodcastsController($http){
  let self = this;
  // retrieves data from all apis and store it into an array
  self.sports = [];
  self.comedy = [];
  self.technology = [];
  self.lucky = [];
  self.ted = [];
  self.business = [];
  self.users = [];

  // calls functions below to retrieve all data
  getSports();
  getComedy();
  getTechnology();
  getFeelingLucky();
  getTed();
  getBusiness();


function getSports(){
  $http
    .get('http://localhost:3000/podcasts/sports')
    .then(function(res){
      console.log(res.data)
      self.sports = res.data.results
    })
}

function getComedy(){
  $http
    .get('http://localhost:3000/podcasts/comedy')
    .then(function(res){
    self.comedy = res.data.results
    })
}

function getTechnology(){
  $http
    .get('http://localhost:3000/podcasts/technology')
    .then(function(res){
    self.technology = res.data.results
    })
}

function getFeelingLucky(){
  $http
    .get('http://localhost:3000/podcasts/feelinglucky')
    .then(function(res){
    self.lucky = res.data.results
    })
}

function getTed(){
  $http
    .get('http://localhost:3000/podcasts/ted')
    .then(function(res){
    self.ted = res.data.results
    })
}

function getBusiness(){
  $http
    .get('http://localhost:3000/podcasts/business')
    .then(function(res){
    self.business = res.data.results
    })
}

function getTwitter(){
  $http
    .get('http://127.0.0.1:3000/users/profile')
    .then(function(res){
    self.business = res.data.results
    })
}

}
