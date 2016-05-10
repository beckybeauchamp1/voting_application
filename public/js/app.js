(function(){
  angular
  .module('voting', [
    "votingSession",
    "ui.router"
  ])
  .config([
    "$stateProvider",
    "$urlRouterProvider",
    RouterFunction
  ]);

  function RouterFunction($stateProvider, $urlRouterProvider){
    $stateProvider
    .state("home", {
      url: '',
      templateUrl: "./js/home.html",
      controller: "votingSessionController",
      controllerAs: "votingSessVM"
    });
  }

})();
