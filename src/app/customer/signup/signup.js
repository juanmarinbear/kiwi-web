'use strict';

kiwiWeb.controller('SignUpCtrl', function ($scope, $filter, lang) {
  $scope.lang = lang.data;
  $scope.changeTitle($scope.lang.title);
  $scope.data = {};
  $scope.data.serialLookUp = {};
  $scope.data.serialLookUp.active = true;
  $scope.data.mobileSignUp = {};
  $scope.data.mobileSignUp.active = false;
  $scope.data.mobileSignUpAuth = {};
  $scope.data.mobileSignUpAuth.active = false;
  $scope.data.messages = [];
  $scope.data.step;

  $scope.data.serialLookUpOriginal = angular.copy($scope.data.serialLookUp);
  $scope.data.mobileSignUpOriginal = angular.copy($scope.data.mobileSignUp);
  $scope.data.mobileSignUpAuthOriginal = angular.copy($scope.data.mobileSignUpAuth);

  $scope.users = [
    {
      "serial" : "222222222222",
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
      "serial" : "111111111111",
      "name" : "Dulce Maria Carral",
      "users" : []
    }
  ];

  $scope.mobiles = [
    {
      "name" : "Juan",
      "last" : "Marin",
      "mobile" : "5520253793",
      "role" : "admin"
    } 
  ];

  $scope.pin = "1234";

  $scope.resetSerialLookUp = function() {
    $scope.data.serialLookUp = angular.copy($scope.data.serialLookUpOriginal);
    $scope.data.mobileSignUp = angular.copy($scope.data.mobileSignUpOriginal);
  };

  $scope.resetMobileSignUp = function() {
    $scope.data.mobileSignUp = angular.copy($scope.data.mobileSignUpOriginal);
    $scope.data.mobileSignUp.active = true;
    $scope.data.mobileSignUpAuth = angular.copy($scope.data.mobileSignUpAuthOriginal);
  };

  $scope.serialLookUpSubmit = function() {

    $scope.loading = true;

    if($scope.serialLookUp.$valid) {
      $scope.data.serialLookUp.client = $filter('filter')($scope.users, {serial: $scope.data.serialLookUp.serial}, true)[0];
      if($scope.data.serialLookUp.client) {
        if($scope.data.serialLookUp.client.users.length) {
          $scope.data.serialLookUp.user = $filter('filter')($scope.data.serialLookUp.client.users, {role: 'admin'}, true)[0];
        } else {
          $scope.data.serialLookUp.active = false;
          $scope.data.mobileSignUp.active = true;
        }
      }
    }

    $scope.data.serialLookUp.submitted = true;
    $scope.loading = false;
  };

  $scope.mobileSignUpSubmit = function() {

    $scope.loading = true;

    if($scope.mobileSignUp.$valid) {
      $scope.data.mobileSignUp.active = false;
      $scope.data.mobileSignUpAuth.active = true;
    }

    $scope.data.mobileSignUp.submitted = true;
    $scope.loading = false;
  };

  $scope.mobileSignUpAuthSubmit = function() {

    $scope.loading = true;

    if($scope.mobileSignUpAuth.$valid) {
      if($scope.data.mobileSignUpAuth.password === $scope.pin) {
        $scope.data.mobileSignUpAuth.success = true;
        $scope.data.mobileSignUpAuth.active = false;
      } else {
        $scope.data.mobileSignUpAuth.error = true;
      }
    }

    $scope.data.mobileSignUpAuth.submitted = true;
    $scope.loading = false;
  };
});
