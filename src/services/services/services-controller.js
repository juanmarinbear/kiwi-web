'use strict';

kiwiWeb.controller('ServicesCtrl', ['$scope', function ($scope) {
  $scope.lang = $scope.language['services'];
  $scope.changeTitle($scope.lang.title);
  $scope.styles.page = 'services';
}]);
