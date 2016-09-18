(function () {
'use strict';

angular.module('MsgApp', [])
.controller('MsgController', MsgController);

MsgController.$inject = ['$scope'];
function MsgController($scope) {
  $scope.items = "";
  $scope.message = "";

  $scope.checkTooMuch = function () {
    var arrayOfStrings = $scope.items.split(',');
    if(arrayOfStrings[0] == $scope.items)
    {
      $scope.message = "Please enter data first";
    }
    else if(arrayOfStrings.length > 3)
    {
      $scope.message = "Too much!" ;
    }
    else if(arrayOfStrings.length > 0)
    {
      $scope.message = "Enjoy!";
    }

  };
}

})();
