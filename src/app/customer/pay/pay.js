'use strict';

kiwiWeb.controller('PayCtrl', function ($scope, $filter, lang) {
  $scope.lang = lang.data;
  $scope.changeTitle($scope.lang.title);
  $scope.data = {};
  $scope.data.serialLookUp = {};
  $scope.data.serialLookUp.active = true;
  $scope.data.mobileSignUp = {};
  $scope.data.mobileSignUp.active = false;
  $scope.data.mobileSignIn = {};
  $scope.data.mobileSignIn.active = true;
  $scope.data.mobileSignUpAuth = {};
  $scope.data.mobileSignUpAuth.active = false;
  $scope.data.mobileSignInAuth = {};
  $scope.data.mobileSignInAuth.active = false;

  $scope.data.serialLookUpOriginal = angular.copy($scope.data.serialLookUp);
  $scope.data.mobileSignUpOriginal = angular.copy($scope.data.mobileSignUp);
  $scope.data.mobileSignInOriginal = angular.copy($scope.data.mobileSignIn);
  $scope.data.mobileSignUpAuthOriginal = angular.copy($scope.data.mobileSignUpAuth);
  $scope.data.mobileSignInAuthOriginal = angular.copy($scope.data.mobileSignInAuth);

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

  $scope.resetMobileSignIn = function() {
    $scope.data.mobileSignIn = angular.copy($scope.data.mobileSignInOriginal);
  };

  $scope.resetMobileSignInAuth = function() {
    $scope.data.mobileSignIn = angular.copy($scope.data.mobileSignInOriginal);
    $scope.data.mobileSignInAuth = angular.copy($scope.data.mobileSignInAuthOriginal);
  };

  $scope.resetSerialLookUp = function() {
    $scope.data.serialLookUp = angular.copy($scope.data.serialLookUpOriginal);
    $scope.data.mobileSignUp = angular.copy($scope.data.mobileSignUpOriginal);
  };

  $scope.resetMobileSignUp = function() {
    $scope.data.mobileSignUp = angular.copy($scope.data.mobileSignUpOriginal);
    $scope.data.mobileSignUp.active = true;
    $scope.data.mobileSignUpAuth = angular.copy($scope.data.mobileSignUpAuthOriginal);
  };

  $scope.mobileSignInAuthSubmit = function() {

    $scope.loading = true;

    if($scope.mobileSignInAuth.$valid) {
      if($scope.data.mobileSignInAuth.password === $scope.pin) {
        $scope.data.mobileSignInAuth.success = true;
        $scope.data.mobileSignInAuth.active = false;
      } else {
        $scope.data.mobileSignInAuth.error = true;
      }
    }

    $scope.data.mobileSignInAuth.submitted = true;
    $scope.loading = false;
  };

  $scope.mobileSignInSubmit = function() {

    $scope.loading = true;

    if($scope.mobileSignIn.$valid) {
      $scope.data.mobileSignIn.user = $filter('filter')($scope.mobiles, {mobile: $scope.data.mobileSignIn.mobile}, true)[0];
      if($scope.data.mobileSignIn.user) {
        $scope.data.mobileSignIn.active = false;
        $scope.data.mobileSignInAuth.active = true;
      } else {
        $scope.data.mobileSignIn.error = true; 
      }
    }

    $scope.data.mobileSignIn.submitted = true;
    $scope.loading = false;
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
