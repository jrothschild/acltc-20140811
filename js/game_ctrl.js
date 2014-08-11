(function () {
  "use strict";


  angular.module("app").controller("gameCtrl", function($scope) {
    var lastShot = null;

    $scope.rows = [{
      name: "A",
    },{
      name: "B",
    },{
      name: "C",
    }];

    $scope.status = function () {
      if (lastShot === null) {
        return "You may fire when ready.";
      } else if (lastShot === "A1") {
        return "HIT!";
      } else {
        return "Miss";
      }
    };

    $scope.fire = function (shot) {
      lastShot = shot;
    };
  });
})();
