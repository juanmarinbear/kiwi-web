'use strict';

kiwiWeb.controller('MetroMeshCtrl', ['$scope', function ($scope) {
  $scope.lang = $scope.language['services/metromesh/metromesh_es'];
  $scope.changeTitle($scope.lang.title);
  $scope.styles.page = 'metromesh';
}]);
