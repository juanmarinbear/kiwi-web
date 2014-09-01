'use strict';

angular.module('kiwiWeb')
.controller('BusinessCtrl', function ($scope, lang) {
  $scope.lang = lang.data;
  $scope.changeTitle($scope.lang.title);
  $scope.pageClass = 'main-business';
});
