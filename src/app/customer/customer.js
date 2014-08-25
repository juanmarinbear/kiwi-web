'use strict';

angular.module('kiwiWeb')
.controller('CustomerCtrl', function ($scope, lang) {
  $scope.lang = lang.data;
});
