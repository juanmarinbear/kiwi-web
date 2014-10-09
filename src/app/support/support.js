'use strict';

kiwiWeb.controller('SupportCtrl', function ($scope, $stateParams, $http, KiwiWebApi, lang, support) {
  $scope.lang = lang.data;
  $scope.support = support.data.support;
  $scope.changeTitle($scope.lang.title);
  $scope.forms = {};
  $scope.ticket = {
    type: 'Technical'
  };
  $scope.errors = {};

  $scope.updateType = function () {
    if($scope.ticket.subject == 'Billing') {
      $scope.ticket.type = 'Administrative';
    } else {
      $scope.ticket.type = 'Technical';
    }
  };

  $scope.submit = function () {
    if($scope.forms.support.$valid) {
      KiwiWebApi.support.save($scope.ticket, function (ticket) {
        console.log('Success!');
        $scope.success = true;
        console.log(ticket);
      }, function (error) {
        $scope.error = true;
        console.log('Error!');
        console.log(error);
      });
    }
    $scope.forms.support.submitted = true;
  };
});
