'use strict';

kiwiWeb.controller('SignInCtrl', function ($scope, $filter, lang) {
  $scope.lang = lang.data;
  $scope.data = {};
  $scope.forms = {};
  $scope.data.mobileSignIn = {};
  $scope.data.mobileSignInAuth = {};
  $scope.data.mobileSignIn.messages = [];
  $scope.data.mobileSignInAuth.messages = [];
  $scope.data.errors = [];
  $scope.data.step = 'mobileSignIn';

  $scope.data.mobileSignInOriginal = angular.copy($scope.data.mobileSignIn);
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

  $scope.reset = function() {

    $scope.data.errors = [];
    $scope.data.step = 'mobileSignIn';
    $scope.data.mobileSignInAuth = angular.copy($scope.data.mobileSignInAuthOriginal);
    $scope.data.mobileSignIn = angular.copy($scope.data.mobileSignInOriginal);
  };

  $scope.mobileSignInSubmit = function() {
    $scope.loading = true;

    if($scope.forms.mobileSignIn.$valid) {
      $scope.data.mobileSignIn.user = $filter('filter')($scope.mobiles, {mobile: $scope.data.mobileSignIn.mobile}, true)[0];
      if($scope.data.mobileSignIn.user) {
        $scope.data.step = 'mobileSignInAuth';
        $scope.data.mobileSignInAuth.messages.push($scope.lang.forms.mobileSignInAuth.messages.submit);
        $scope.data.mobileSignInAuth.messages.push($scope.lang.forms.mobileSignInAuth.messages.mobile);
        $scope.data.mobileSignInAuth.messages.push($scope.data.mobileSignIn.mobile);
      } else {
        $scope.data.errors.push($scope.lang.forms.mobileSignIn.messages.error);
      }
    }

    $scope.data.mobileSignIn.submitted = true;
    $scope.loading = false;
  };

  $scope.mobileSignInAuthSubmit = function() {

    $scope.loading = true;

    if($scope.forms.mobileSignInAuth.$valid) {
      if($scope.data.mobileSignInAuth.password === $scope.pin) {
        $scope.data.step = 'success';
        $scope.data.mobileSignIn = angular.copy($scope.data.mobileSignInOriginal);
        $scope.data.mobileSignInAuth = angular.copy($scope.data.mobileSignInAuthOriginal);
      } else {
        $scope.data.errors.push($scope.lang.forms.mobileSignInAuth.messages.error);
      }
    }

    $scope.data.mobileSignInAuth.submitted = true;
    $scope.loading = false;
  };
});
