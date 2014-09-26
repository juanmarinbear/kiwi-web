'use strict';

kiwiWeb.controller('PayCtrl', function ($scope, $filter, lang) {
  $scope.lang = lang.data;
  $scope.changeTitle($scope.lang.title);
  $scope.data = {};
  $scope.client;
  $scope.user;
  $scope.steps = {
    lookUpSerial: true,
    submitMobile: false,
    authenticate: false
  }

  $scope.users = [
    {
      "serial" : "123456789098",
      "name" : "Juan Marin Bear",
      "users" : [
        {
          "name" : "Juan",
          "last" : "Marin",
          "mobile" : "5520253793",
          "role" : "admin"
        }
      ]
    },
    {
      "serial" : "987654321234",
      "name" : "Dulce Maria Carral",
      "users" : []
    }
  ];

  $scope.submitSerial = function() {

    if($scope.lookUpSerial.$valid) {
      $scope.loading = true;
      $scope.client = $filter('filter')($scope.users, {serial: $scope.data.serial}, true)[0];
      if($scope.client && $scope.client.users.length) {
        $scope.user = $filter('filter')($scope.client.users, {role: 'admin'}, true)[0];
      }
      $scope.loading = false;
    }

    $scope.lookUpSerialSubmitted = true;
  };

  $scope.submitMobile = function() {

    if($scope.submitMobile.$valid) {
      $scope.loading = true;
      $scope.success = true;
      $scope.loading = false;
    }
    $scope.submitted = true;
  };

  $scope.authenticate = function() {
  
  };
});
