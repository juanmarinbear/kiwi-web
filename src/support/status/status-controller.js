'use strict';

kiwiWeb.controller('StatusCtrl', ['$scope', function ($scope) {
  $scope.lang = $scope.language.status;
  $scope.changeTitle($scope.lang.title);
}]);
