'use strict';

angular.module('kiwiWeb')
.controller('ResidentialCtrl', function ($scope, lang) {
  $scope.lang = lang.data;
  $scope.changeTitle($scope.lang.title);
});
