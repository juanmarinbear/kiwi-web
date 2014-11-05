'use strict';

kiwiWeb.controller('ReferCtrl', ['$scope', function ($scope) {
  $scope.lang = $scope.language['customer/refer/refer_es'];
  $scope.changeTitle($scope.lang.title);
}]);
