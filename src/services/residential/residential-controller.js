'use strict';

kiwiWeb.controller('ResidentialCtrl', ['$scope', function ($scope) {
  $scope.lang = $scope.language['services/residential/residential_es'];
  $scope.changeTitle($scope.lang.title);
}]);
