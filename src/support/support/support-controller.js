'use strict';

kiwiWeb.controller('SupportCtrl', ['$scope', 'KiwiWebApi', function ($scope, KiwiWebApi) {
  $scope.lang = $scope.language['support/support/support_es'];
  $scope.support = $scope.language['support/support/supportform_es'].support;
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
      KiwiWebApi.save($scope.ticket, $scope.ticket.type, function (ticket) {
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
}]);
