'use strict';

kiwiWeb.controller('StatusCtrl', ['$scope', function ($scope) {
  $scope.lang = $scope.language['support/status/status_es'];
  $scope.changeTitle($scope.lang.title);
}]);
