'use strict';

kiwiWeb.controller('SignUpCtrl', function ($scope, $filter, lang) {
  $scope.lang = lang.data;
  $scope.changeTitle($scope.lang.title);
  $scope.data = {};
  $scope.forms = {};
  $scope.data.serialLookUp = {};
  $scope.data.mobileSignUp = {};
  $scope.data.mobileSignUpAuth = {};
  $scope.data.messages = [];
  $scope.data.step = 'serialLookUp';

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

  $scope.reset = function() {

    $scope.data[$scope.data.step] = angular.copy($scope.data[$scope.data.step + 'Original']);

    if($scope.data.step === 'mobileSignUp') {
      $scope.data.step = 'serialLookUp';
    } else {
      $scope.data.step = 'mobileSignUp';
    }
  };

  $scope.serialLookUpSubmit = function() {
    $scope.loading = true;

    if($scope.forms.serialLookUp.$valid) {
      $scope.data.serialLookUp.client = $filter('filter')($scope.users, {serial: $scope.data.serialLookUp.serial}, true)[0];
      if($scope.data.serialLookUp.client) {
        if($scope.data.serialLookUp.client.users.length) {
          $scope.data.messages.push($scope.lang.forms.serialLookUp.messages.found);
        } else {
          $scope.data.step = 'mobileSignUp';
        }
      } else {
          $scope.data.messages.push($scope.lang.forms.serialLookUp.messages.notFound);
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
