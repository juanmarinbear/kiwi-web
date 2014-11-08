'use strict';

kiwiWeb.controller('DashboardCtrl', ['$scope', function ($scope) {
  $scope.lang = $scope.language.dashboard;
  $scope.changeTitle($scope.lang.title);
}]);
