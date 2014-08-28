'use strict';

angular.module('kiwiWeb')
.controller('ContactFormCtrl', function ($scope, lang) {
  $scope.lang = lang.data;
  $scope.changeTitle($scope.lang.title);
  $scope.data = {};
});
