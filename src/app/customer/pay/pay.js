'use strict';

kiwiWeb.controller('PayCtrl', function ($scope, $filter, lang) {
  $scope.lang = lang.data;
  $scope.changeTitle($scope.lang.title);
  $scope.data = {};
  $scope.data.client;
  $scope.data.user;
  $scope.data.steps = {
    lookUpSerial: true,
    submitMobile: false,
    authenticate: false
  };

  $scope.data.users = [
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

  $scope.originalData = angular.copy($scope.data);

  $scope.reset = function() {
    $scope.data = angular.copy($scope.originalData);
    if($scope.lookUpSerial) $scope.lookUpSerial.$setPristine();
  }

  $scope.submitSerial = function() {

    if($scope.lookUpSerial.$valid) {
      $scope.loading = true;
      $scope.data.steps.lookUpSerial = false;
      $scope.data.client = $filter('filter')($scope.data.users, {serial: $scope.data.serial}, true)[0];
      if($scope.data.client) {
        if($scope.data.client.users.length)
          $scope.data.user = $filter('filter')($scope.data.client.users, {role: 'admin'}, true)[0];
        else {
          $scope.data.steps.submitMobile = true;
        }
      }
      $scope.loading = false;
    }

    $scope.data.lookUpSerialSubmitted = true;
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
