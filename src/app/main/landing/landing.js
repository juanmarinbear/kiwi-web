'use strict';

angular.module('kiwiWeb')
.controller('LandingCtrl', function ($scope, lang) {
  $scope.lang = lang.data;
  $scope.changeTitle($scope.lang.title);
  $scope.pageClass = 'main-landing';
});
