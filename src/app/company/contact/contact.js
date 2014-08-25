'use strict';

angular.module('kiwiWeb')
.controller('ContactCtrl', function ($scope, lang) {
  $scope.lang = lang.data;
  $scope.changeTitle($scope.lang.title);
});
