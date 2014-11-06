'use strict';

kiwiWeb.controller('ResidentialCtrl', ['$scope', function ($scope) {
  $scope.lang = $scope.language['residential'];
  $scope.changeTitle($scope.lang.title);
}]);
