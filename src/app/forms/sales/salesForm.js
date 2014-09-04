'use strict';

kiwiWeb.controller('SalesFormCtrl', function ($scope, $stateParams, lang) {
  $scope.lang = lang.data;
  $scope.changeTitle($scope.lang.title);
  $scope.data = {};
});
