'use strict';

angular.module('Podcasts')
  .controller('PodcastsController', PodcastsController);

PodcastsController.$inject = ['$http','$rootScope'];

function PodcastsController($http,$rootScope){
  let self = this;
  // retrieves data from all apis and store it into an array
  self.sports = [];
  self.comedy = [];
  self.technology = [];
  self.lucky = [];
  self.ted = [];
  self.business = [];
  self.newPodcast = {};
  self.user = {};

  // use functions below
  self.getTwitter = getTwitter;
  self.addPodcast = addPodcast;
  self.addSportsPodcast = addSportsPodcast;
  self.addBusinessPodcast = addBusinessPodcast;
  self.addLuckyPodcast = addLuckyPodcast;
  self.addTechnologyPodcast = addTechnologyPodcast;
  self.addTedPodcast = addTedPodcast;

  // calls functions on page load to retrieve all data
  getSports();
  getComedy();
  getTechnology();
  getFeelingLucky();
  getTed();
  getBusiness();



  // API call functions
function getSports(){
  $http
    .get('http://localhost:3000/podcasts/sports')
    .then(function(res){
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


  // FUNCTIONS TO ADD PODCASTS TO FAVORITES
function addTedPodcast(index){
    self.newPodcast = self.ted[index];
    console.log(self.newPodcast)
  $http({
    method: 'PATCH',
    url: 'http://localhost:3000/users/profile',
    data: {podcast: self.newPodcast,
           id_str: $rootScope.user.id_str},
    headers: {'Content-Type': 'application/json'}
  })
    .then(function(res){
      console.log(res + 'was sent to database');
    })
    self.newPodcast = {};
}


function addTechnologyPodcast(index){
    self.newPodcast = self.technology[index];
    console.log(self.newPodcast)
  $http({
    method: 'PATCH',
    url: 'http://localhost:3000/users/profile',
    data: {podcast: self.newPodcast,
           id_str: $rootScope.user.id_str},
    headers: {'Content-Type': 'application/json'}
  })
    .then(function(res){
      console.log(res + 'was sent to database');
    })
    self.newPodcast = {};
}



function addLuckyPodcast(index){
    self.newPodcast = self.lucky[index];
    console.log(self.newPodcast)
  $http({
    method: 'PATCH',
    url: 'http://localhost:3000/users/profile',
    data: {podcast: self.newPodcast,
           id_str: $rootScope.user.id_str},
    headers: {'Content-Type': 'application/json'}
  })
    .then(function(res){
      console.log(res + 'was sent to database');
    })
    self.newPodcast = {};
}


function addBusinessPodcast(index){
    self.newPodcast = self.business[index];
    console.log(self.newPodcast)
  $http({
    method: 'PATCH',
    url: 'http://localhost:3000/users/profile',
    data: {podcast: self.newPodcast,
           id_str: $rootScope.user.id_str},
    headers: {'Content-Type': 'application/json'}
  })
    .then(function(res){
      console.log(res + 'was sent to database');
    })
    self.newPodcast = {};
}


function addSportsPodcast(index){
    self.newPodcast = self.sports[index];
    console.log(self.newPodcast)
  $http({
    method: 'PATCH',
    url: 'http://localhost:3000/users/profile',
    data: {podcast: self.newPodcast,
           id_str: $rootScope.user.id_str},
    headers: {'Content-Type': 'application/json'}
  })
    .then(function(res){
      console.log(res + 'was sent to database');
    })
    self.newPodcast = {};
}

function addPodcast(index){
  //function for comedy podcasts
    self.newPodcast = self.comedy[index];
    console.log(self.newPodcast);
  $http({
    method: 'PATCH',
    url: 'http://localhost:3000/users/profile',
    data: {podcast: self.newPodcast,
           id_str: $rootScope.user.id_str},
    headers: {'Content-Type': 'application/json'}
  })
    .then(function(res){
      console.log(res + 'was sent to database');
    })
    self.podcast = {};
}


  // PULLS USER DATA FROM SERVER 
function getTwitter(){
  $.ajax({
    url: 'http://127.0.0.1:3000/users/profile',
    dataType: 'json',
    method: 'GET',
    headers: {
      "Access-Control-Allow-Credentials": true,
      "Access-Control-Allow-Origin": "http://localhost:8080"
    },
    crossDomain: true,
    xhrFields: {
      withCredentials: true
    }
 }).then(function(res){
    $rootScope.user = res.user;
    self.user = res.user;
  });
}
}
