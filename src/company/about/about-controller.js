'use strict';

kiwiWeb.controller('AboutCtrl', ['$scope', '$templateCache', function ($scope, $templateCache) {
  $scope.lang = JSON.parse($templateCache.get('company/about/about_' + $scope.langKey + '.json'));
  $scope.changeTitle($scope.lang.title);
}]);
