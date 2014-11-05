'use strict';

kiwiWeb.controller('ConcesionCtrl', ['$scope', '$templateCache', function ($scope, $templateCache) {
  $scope.lang = JSON.parse($templateCache.get('company/concesion/concesion_' + $scope.langKey + '.json');
  $scope.changeTitle($scope.lang.title);
}]);
