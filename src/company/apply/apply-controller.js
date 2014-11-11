'use strict';

kiwiWeb.controller('ApplyCtrl', ['$scope', '$stateParams', '$timeout', 'KiwiWebApi', function ($scope, $stateParams, $timeout, KiwiWebApi) {
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
    $scope.forms.apply.submitted = true;
  };
}]);
