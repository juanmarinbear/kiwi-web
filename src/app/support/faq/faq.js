'use strict';

angular.module('kiwiWeb')
.controller('FaqCtrl', function ($scope, lang) {
  $scope.lang = lang.data;
  $scope.changeTitle($scope.lang.title);
});
