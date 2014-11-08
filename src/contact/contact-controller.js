'use strict';

kiwiWeb.controller('ContactCtrl', ['$scope', 'KiwiWebApi', function ($scope, KiwiWebApi) {
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
    $scope.forms.contact.submitted = true;
  };
}]);
