'use strict';

kiwiWeb.controller('SupportCtrl', function ($scope, $stateParams, $http, lang, support) {
  $scope.lang = lang.data;
  $scope.support = support.data.support;
  $scope.changeTitle($scope.lang.title);
  $scope.forms = {};
  $scope.ticket = {
    type: 'Support'
  };
  $scope.errors = {};

  $scope.submit = function() {
    $scope.forms.support.submitted = true;
  };
});
