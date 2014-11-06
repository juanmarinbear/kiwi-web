'use strict';

kiwiWeb.controller('MetroMeshCtrl', ['$scope', function ($scope) {
  $scope.lang = $scope.language.metromesh;
  $scope.changeTitle($scope.lang.title);
  $scope.styles.page = 'metromesh';
}]);
