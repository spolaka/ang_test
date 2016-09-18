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

    var count = 0;
    for(var i = 0 ; i < arrayOfStrings.length;i++ ){
      if(arrayOfStrings[i].trim().length > 0)
      {
        count += 1;
      }
    }

    if(count == 0)
    {
      $scope.message = "Please enter data first";
    }
    else if(count > 3)
    {
      $scope.message = "Too much!" ;
    }
    else{
      $scope.message = "Enjoy!";
    }

  };
}

})();
