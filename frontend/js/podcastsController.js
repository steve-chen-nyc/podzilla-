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
  self.user = [];
  self.getTwitter = getTwitter;

  console.log(self.user)

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
  console.log('function clicked')
  $.ajax({
     url: 'http://127.0.0.1:3000/users/profile',
     dataType: 'json',
     headers: {
       "Access-Control-Allow-Credentials": true,
       "Access-Control-Allow-Origin": "http://localhost:8080"
     },
     crossDomain: true,
     xhrFields: {
       withCredentials: true
     }
  }).done(function(data){
     self.user = data;
  });
}


//   $http
//     .get('http://127.0.0.1:3000/users/profile', {withCredentials : true})
//     .then(function(res){
//       if(res.data.error){
//         $location.path('/')
//       }
//       else{
//         self.user = res.data;
//         console.log(res);
//       }
//     })
//     .catch(function (error){
//       if (error) throw error;
//     });
// }


}
