'use strict';

kiwiWeb.controller('HomeCtrl', ['$scope', function ($scope) {
  $scope.lang = $scope.language['home/home_es'];
  $scope.changeTitle($scope.lang.title);
}]);
