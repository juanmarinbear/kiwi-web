'use strict';

kiwiWeb.controller('ReferCtrl', ['$scope', function ($scope) {
  $scope.lang = $scope.language['refer'];
  $scope.changeTitle($scope.lang.title);
}]);
