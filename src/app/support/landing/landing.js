'use strict';

angular.module('kiwiWeb')
.controller('HelpLandingCtrl', function ($scope, lang) {
  $scope.lang = lang.data;
  $scope.changeTitle($scope.lang.title);
});
