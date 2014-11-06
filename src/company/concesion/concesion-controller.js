'use strict';

kiwiWeb.controller('ConcesionCtrl', ['$scope', function ($scope) {
  $scope.lang = $scope.language.concesion;
  $scope.changeTitle($scope.lang.title);
}]);
