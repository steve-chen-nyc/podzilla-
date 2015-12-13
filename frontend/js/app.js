angular
  .module('Podcasts', ['ui.router'])
  .config(MainRouter);

  function MainRouter($stateProvider, $urlRouterProvider){
    $stateProvider
      .state('sports',  {
          url: '/podcasts/sports',
          templateUrl: "sports.html"
      })
     $urlRouterProvider.otherwise("/");
    }
