'use strict';

angular.module('kiwiWeb')
.controller('ProductsCtrl', function ($scope, lang) {
  $scope.lang = lang.data;
});
