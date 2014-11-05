'use strict';

kiwiWeb.controller('BusinessCtrl', ['$scope', function ($scope) {
  $scope.lang = $scope.language['services/business/business_es'];
  $scope.changeTitle($scope.lang.title);
}]);
