'use strict';

kiwiWeb.controller('MetroMeshCtrl', ['$scope', 'lang', function ($scope, lang) {
  $scope.lang = lang.data;
  $scope.changeTitle($scope.lang.title);
  $scope.styles.page = 'metromesh';
}]);
