'use strict';

kiwiWeb.controller('UnsubscribeCtrl', ['$scope', '$timeout', 'KiwiWebApi', function ($scope, $timeout, KiwiWebApi) {
  $scope.lang = $scope.language.unsubscribe;
  $scope.unsubscribe = $scope.language.unsubscribeform.unsubscribe;
  $scope.changeTitle($scope.lang.title);
  $scope.forms = {};
  $scope.ticket = {
    type: 'Unsubscribe',
    unsubscribeEmail: false,
    unsubscribeMobile: false,
    unsubscribeAddress: false,
    opposeTransfer: false,
    forgetMe: false
  };
  $scope.errors = {};

  $scope.submit = function () {
    if($scope.forms.unsubscribe.$valid) {
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
    $scope.forms.unsubscribe.submitted = true;
  };
}]);
