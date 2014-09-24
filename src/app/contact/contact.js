'use strict';

kiwiWeb.controller('ContactCtrl', function ($scope, lang) {
  $scope.lang = lang.data;
  $scope.changeTitle($scope.lang.title);
  $scope.data = {};

  $scope.submit = function() {

    if($scope.contact.$valid) {
      $scope.loading = true;
      $scope.success = true;
      $scope.loading = false;
      $scope.$apply();
    }
    $scope.submitted = true;
  };

});
