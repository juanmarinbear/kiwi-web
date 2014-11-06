'use strict';

kiwiWeb.controller('AboutCtrl', ['$scope', function ($scope) {
  $scope.lang = $scope.language['about'];
  $scope.changeTitle($scope.lang.title);
}]);
