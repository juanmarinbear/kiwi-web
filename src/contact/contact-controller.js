'use strict';

kiwiWeb.controller('ContactCtrl', ['$scope', '$timeout', 'KiwiWebApi', function ($scope, $timeout, KiwiWebApi) {
  $scope.lang = $scope.language.contact;
  $scope.contact = $scope.language.contactform.contact;
  $scope.changeTitle($scope.lang.title);
  $scope.forms = {};
  $scope.ticket = {
    type: 'Contact'
  };
  $scope.errors = {};

  $scope.submit = function () {
    if($scope.forms.contact.$valid) {
      $scope.interactions.loading = true;
      $timeout(function () {
        $scope.interactions.loading = false;
      }, 2000);
      /*
      KiwiWebApi.save($scope.ticket, $scope.ticket.type, function (ticket) {
        $scope.success = true;
      }, function (error) {
        console.log('Error!');
      });
      */
    }
    $scope.forms.contact.submitted = true;
  };
}]);
