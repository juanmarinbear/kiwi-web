'use strict';

kiwiWeb.controller('ApplyCtrl', function ($scope, KiwiWebApi, lang, apply) {
  $scope.lang = lang.data;
  $scope.apply = apply.data.apply;
  $scope.changeTitle($scope.lang.title);
  $scope.forms = {};
  $scope.ticket = {
    type: 'Job'
  };
  $scope.errors = {};

  $scope.submit = function () {
    console.log($scope.ticket);
    if($scope.forms.apply.$valid) {
      KiwiWebApi.apply.save($scope.ticket, function (ticket) {
        console.log('Success!');
        $scope.success = true;
        console.log(ticket);
      }, function (error) {
        $scope.error = true;
        console.log('Error!');
        console.log(error);
      });
    }
    $scope.forms.apply.submitted = true;
  };
});
