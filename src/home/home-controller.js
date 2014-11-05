'use strict';

kiwiWeb.controller('HomeCtrl', ['$scope', '$templateCache', function ($scope, $templateCache) {
  $scope.lang = JSON.parse($templateCache.get('home/home_' + $scope.langKey + '.json'));
  $scope.changeTitle($scope.lang.title);
}]);
