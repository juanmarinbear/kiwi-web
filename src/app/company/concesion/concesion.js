'use strict';

kiwiWeb.controller('ConcesionCtrl', ['$scope', 'lang', function ($scope, lang) {
  $scope.lang = lang.data;
  $scope.changeTitle($scope.lang.title);
}]);
