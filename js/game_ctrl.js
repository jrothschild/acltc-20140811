(function () {
  "use strict";


  angular.module("app").controller("gameCtrl", function($scope) {
    var lastShot = null;

    $scope.rows = [{
      name: "A",
      cells: ["o", "o", "o"]
    },{
      name: "B",
      cells: ["o", "o", "o"]
    },{
      name: "C",
      cells: ["o", "o", "o"]
    }];

    $scope.columnHeaders = [1, 2, 3];

    $scope.coords = function(letter, number) {
      console.log(letter + number);
    }

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
