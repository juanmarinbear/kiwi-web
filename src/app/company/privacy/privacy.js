'use strict';

angular.module('kiwiWeb')
.controller('PrivacyCtrl', function ($scope, lang) {
  $scope.lang = lang.data;
  $scope.changeTitle($scope.lang.title);
});
