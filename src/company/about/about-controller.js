'use strict';

kiwiWeb.controller('AboutCtrl', ['$scope', function ($scope) {
  $scope.lang = $scope.language['company/about/about_es'];
  $scope.changeTitle($scope.lang.title);
}]);
