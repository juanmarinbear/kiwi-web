'use strict';

angular.module('kiwiWeb')
.controller('CompanyCtrl', function ($scope, lang) {
  $scope.lang = lang.data;
});
