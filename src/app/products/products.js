'use strict';

angular.module('kiwiWeb')
.controller('ProductsCtrl', function ($scope, $state, lang) {
  $scope.lang = lang.data;
  $scope.changeTitle($scope.lang.title);
});
