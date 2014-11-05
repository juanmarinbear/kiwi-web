'use strict';

kiwiWeb.controller('DedicatedCtrl', ['$scope', function ($scope) {
  $scope.lang = $scope.language['services/dedicated/dedicated_es'];
  $scope.changeTitle($scope.lang.title);
}]);
