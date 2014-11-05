'use strict';

kiwiWeb.controller('DashboardCtrl', ['$scope', function ($scope) {
  $scope.lang = $scope.language['customer/dashboard/dashboard_es'];
  $scope.changeTitle($scope.lang.title);
}]);
