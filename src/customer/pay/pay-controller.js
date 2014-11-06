'use strict';

kiwiWeb.controller('PayCtrl', ['$scope', function ($scope) {
  $scope.lang = $scope.language.pay;
  $scope.changeTitle($scope.lang.title);
  $scope.data = {};
  $scope.data.idSubmit = {};
  $scope.data.idSubmit.messages = [];
  $scope.data.errors = [];
  $scope.data.step = 'idSubmit';

  $scope.data.idSubmitOriginal = angular.copy($scope.data.mobileSignIn);
}]);
