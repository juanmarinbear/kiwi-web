'use strict';

angular.module('kiwiWeb')
.controller('MainCtrl', function ($scope, $state, lang) {
  $scope.lang = lang.data;
});
