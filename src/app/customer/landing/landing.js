'use strict';

angular.module('kiwiWeb')
.controller('CustomerLandingCtrl', function ($scope, lang) {
  $scope.lang = lang.data;
});
