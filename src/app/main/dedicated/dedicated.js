'use strict';

angular.module('kiwiWeb')
.controller('DedicatedCtrl', function ($scope, lang) {
  $scope.lang = lang.data;
  $scope.changeTitle($scope.lang.title);
  $scope.pageClass = 'main-dedicated';
});
