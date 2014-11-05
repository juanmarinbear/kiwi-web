'use strict';

kiwiWeb.controller('ConcesionCtrl', ['$scope', function ($scope) {
  $scope.lang = $scope.language['company/concesion/concesion_es'];
  $scope.changeTitle($scope.lang.title);
}]);
