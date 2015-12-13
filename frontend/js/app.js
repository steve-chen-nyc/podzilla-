angular
  .module('Podcasts', ['ui.router'])
  .config(MainRouter);

  function MainRouter($stateProvider, $urlRouterProvider){
    $stateProvider
      .state('index',  {
          url: '/'
      })
     $urlRouterProvider.otherwise("/");
    }
