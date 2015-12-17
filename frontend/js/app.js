angular
  .module('Podcasts', ['ui.router'])
  .config(MainRouter);

  function MainRouter($stateProvider, $urlRouterProvider){
    $stateProvider
      .state('index', {
        url: "/",
      })
      .state('sports',  {
          url: '/podcasts/sports',
          templateUrl: "sports.html"
      })
      .state('comedy',  {
          url: '/podcasts/comedy',
          templateUrl: "comedy.html"
      })
      .state('technology',  {
          url: '/podcasts/technology',
          templateUrl: "technology.html"
      })
      .state('feelinglucky',  {
          url: '/podcasts/feelinglucky',
          templateUrl: "feelinglucky.html"
      })
      .state('ted',  {
          url: '/podcasts/ted',
          templateUrl: "ted.html"
      })
      .state('business',  {
          url: '/podcasts/business',
          templateUrl: "business.html"
      })
      .state('twitter',  {
          url: '/users/login/twitter',
          templateUrl: "twitter.html"
      })
      .state('category',  {
          url: '/',
          templateUrl: "category.html"
      })
   $urlRouterProvider.otherwise("/");
  }
