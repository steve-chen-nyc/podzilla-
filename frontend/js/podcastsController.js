'use strict';

angular.module('Podcasts')
  .controller('PodcastsController', PodcastsController);

PodcastsController.$inject = ['$http'];

function PodcastsController($http){
  let self = this;
  self.all = [];

getPodcasts();

function getPodcasts(){
  $http
    .get('http://localhost:3000/podcasts/sports')
    .then(function(res){
      console.log(res.data)
      self.all = res.data.results
    })
  }
}
