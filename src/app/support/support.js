'use strict';

kiwiWeb.controller('SupportCtrl', function ($scope, $stateParams, $http, lang) {
  $scope.lang = lang.data;
  $scope.changeTitle($scope.lang.title);
  $scope.data = {};

  $scope.submit = function() {

    if($scope.support.$valid) {
      $scope.loading = true;
      $scope.success = true;
      $scope.loading = false;
      $scope.$apply();
    }
    $scope.submitted = true;
  };
});
