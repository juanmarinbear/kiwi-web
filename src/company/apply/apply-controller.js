'use strict';

kiwiWeb.controller('ApplyCtrl', ['$scope', '$stateParams', 'KiwiWebApi', function ($scope, $stateParams, KiwiWebApi) {
  console.log($scope.language);
  $scope.lang = $scope.language.apply;
  $scope.apply = $scope.language.applyform.apply;
  $scope.changeTitle($scope.lang.title);
  $scope.forms = {};
  $scope.ticket = {
    type: 'Jobs'
  };
  $scope.errors = {};

  /* Not the cleanest solution, need to refactor. */
  $scope.roles = {
    'networkEngineer' : 'Ingeniero de Redes',
    'solutionsEngineer' : 'Ingeniero de Soluciones',
    'softwareEngineer' : 'Ingeniero de Software'
  };

  if($stateParams.role) {
    $scope.ticket.role = $scope.roles[$stateParams.role];
  }

  $scope.submit = function () {
    if($scope.forms.apply.$valid) {
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
    $scope.forms.apply.submitted = true;
  };
}]);
