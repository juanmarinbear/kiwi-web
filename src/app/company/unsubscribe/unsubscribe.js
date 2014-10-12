'use strict';

kiwiWeb.controller('UnsubscribeCtrl', function ($scope, KiwiWebApi, lang, unsubscribe) {
  $scope.lang = lang.data;
  $scope.unsubscribe = unsubscribe.data.unsubscribe;
  $scope.changeTitle($scope.lang.title);
  $scope.forms = {};
  $scope.ticket = {
    type: 'Unsubscribe'
  };
  $scope.errors = {};

  $scope.submit = function () {
    if($scope.forms.unsubscribe.$valid) {
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
    $scope.forms.unsubscribe.submitted = true;
  };
});
