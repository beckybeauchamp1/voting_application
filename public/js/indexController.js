"use strict";

(function(){
  angular
  .module("votingSession")
  .controller("votingSessionController", function($scope, votingSessionFactory){
    $scope.sessions = votingSessionFactory.query();
    $scope.newSess = new votingSessionFactory();

    $scope.login = socket.emit('login', "cmb8214rb")
    $scope.session = {}

    $scope.results = function(){};


  });

})();
