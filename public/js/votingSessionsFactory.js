"use strict";

(function(){
  angular
  .module("votingSession")
  .factory("votingSessionFactory", [
    "$resource",
    FactoryFunction
  ]);

  function FactoryFunction($resource){
    return $resource("http://localhost:4000/voting/:id", {}, {
      update: { method: "PUT" }
    });
  }


})();
