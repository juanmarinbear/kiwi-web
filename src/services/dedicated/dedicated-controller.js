'use strict';

kiwiWeb.controller('DedicatedCtrl', ['$scope', function ($scope) {
  $scope.lang = $scope.language.dedicated;
  $scope.changeTitle($scope.lang.title);
}]);
