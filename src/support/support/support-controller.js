'use strict';

kiwiWeb.controller('SupportCtrl', ['$scope', '$timeout', 'KiwiWebApi', function ($scope, $timeout, KiwiWebApi) {
  $scope.lang = $scope.language.support;
  $scope.support = $scope.language.supportform.support;
  $scope.changeTitle($scope.lang.title);
  $scope.forms = {};
  $scope.ticket = {
    type: 'Technical'
  };
  $scope.errors = {};

  $scope.updateType = function () {
    if($scope.ticket.subject === $scope.support.inputs.subject.options.items[2].value) {
      $scope.ticket.type = 'Administrative';
    } else {
      $scope.ticket.type = 'Technical';
    }
  };

  $scope.submit = function () {
    if($scope.forms.support.$valid) {
      $scope.interactions.loading = true;
      $timeout(function () {
        $scope.interactions.loading = false;
      }, 2000);
      /*
      KiwiWebApi.save($scope.ticket, $scope.ticket.type, function (ticket) {
        $scope.success = true;
      }, function (error) {
        $scope.error = true;
      });
      */
    }
    $scope.forms.support.submitted = true;
  };
}]);
