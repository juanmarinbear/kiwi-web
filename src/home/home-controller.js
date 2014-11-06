'use strict';

kiwiWeb.controller('HomeCtrl', ['$scope', function ($scope) {
  $scope.lang = $scope.language['home'];
  $scope.changeTitle($scope.lang.title);
}]);
