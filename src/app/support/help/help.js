'use strict';

angular.module('kiwiWeb')
.controller('HelpCtrl', function ($scope, lang) {
  $scope.lang = lang.data;
  $scope.changeTitle($scope.lang.title);
});
