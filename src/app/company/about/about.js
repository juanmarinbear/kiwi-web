'use strict';

angular.module('kiwiWeb')
.controller('AboutCtrl', function ($scope, lang) {
  $scope.lang = lang.data;
  $scope.changeTitle($scope.lang.title);
});