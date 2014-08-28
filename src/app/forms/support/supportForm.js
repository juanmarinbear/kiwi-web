'use strict';

angular.module('kiwiWeb')
.controller('SupportFormCtrl', function ($scope, lang) {
  $scope.lang = lang.data;
  $scope.changeTitle($scope.lang.title);
  $scope.data = {};
});
