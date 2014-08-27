'use strict';

angular.module('kiwiWeb')
.controller('SupportCtrl', function ($scope, lang) {
  $scope.lang = lang.data;
  $scope.changeTitle($scope.lang.title);
});
