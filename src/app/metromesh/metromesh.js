'use strict';

angular.module('kiwiWeb')
.controller('MetroMeshCtrl', function ($scope, lang) {
  $scope.lang = lang.data;
  $scope.changeTitle($scope.lang.title);
});
