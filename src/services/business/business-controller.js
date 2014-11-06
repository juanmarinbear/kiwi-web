'use strict';

kiwiWeb.controller('BusinessCtrl', ['$scope', function ($scope) {
  $scope.lang = $scope.language.business;
  $scope.changeTitle($scope.lang.title);
}]);
