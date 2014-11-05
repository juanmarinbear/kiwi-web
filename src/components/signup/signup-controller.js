'use strict';

kiwiWeb.controller('SignUpCtrl', ['$scope', '$filter', 'lang', function ($scope, $filter, lang) {
  $scope.lang = lang.data;
  $scope.data = {};
  $scope.forms = {};
  $scope.data.serialLookUp = {};
  $scope.data.mobileSignUp = {};
  $scope.data.mobileSignUpAuth = {};
  $scope.data.serialLookUp.messages = [];
  $scope.data.mobileSignUp.messages = [];
  $scope.data.mobileSignUpAuth.messages = [];
  $scope.data.errors = [];
  $scope.data.step = 'serialLookUp';

  $scope.data.serialLookUpOriginal = angular.copy($scope.data.serialLookUp);
  $scope.data.mobileSignUpOriginal = angular.copy($scope.data.mobileSignUp);
  $scope.data.mobileSignUpAuthOriginal = angular.copy($scope.data.mobileSignUpAuth);

  $scope.users = [
    {
      'serial' : '222222222222',
      'name' : 'Juan Marin Bear',
      'users' : [
        {
          'name' : 'Juan',
          'last' : 'Marin',
          'mobile' : '5520253793',
          'role' : 'admin'
        }
      ]
    },
    {
      'serial' : '111111111111',
      'name' : 'Dulce Maria Carral',
      'users' : []
    }
  ];

  $scope.mobiles = [
    {
      'name' : 'Juan',
      'last' : 'Marin',
      'mobile' : '5520253793',
      'role' : 'admin'
    }
  ];

  $scope.pin = '1234';

  $scope.reset = function() {

    $scope.data.errors = [];

    if($scope.data.step === 'mobileSignUp') {
      $scope.data.step = 'serialLookUp';
      $scope.data.serialLookUp = angular.copy($scope.data.serialLookUpOriginal);
      $scope.data.mobileSignUp = angular.copy($scope.data.mobileSignUpOriginal);
    } else {
      $scope.data.step = 'mobileSignUp';
      $scope.data.mobileSignUp = angular.copy($scope.data.mobileSignUpOriginal);
      $scope.data.mobileSignUpAuth = angular.copy($scope.data.mobileSignUpAuthOriginal);
      $scope.data.mobileSignUp.messages.push($scope.lang.forms.mobileSignUp.messages.continue);
    }
  };

  $scope.serialLookUpSubmit = function () {
    $scope.loading = true;

    if($scope.forms.serialLookUp.$valid) {
      $scope.data.serialLookUp.client = $filter('filter')($scope.users, {serial: $scope.data.serialLookUp.serial}, true)[0];
      if($scope.data.serialLookUp.client) {
        if($scope.data.serialLookUp.client.users.length) {
          $scope.data.serialLookUp.messages.push($scope.lang.forms.serialLookUp.messages.found);
        } else {
          $scope.data.step = 'mobileSignUp';
          $scope.data.mobileSignUp.messages.push($scope.lang.forms.mobileSignUp.messages.found);
          $scope.data.mobileSignUp.messages.push($scope.lang.forms.mobileSignUp.messages.client);
          $scope.data.mobileSignUp.messages.push($scope.data.serialLookUp.client.name);
          $scope.data.mobileSignUp.messages.push($scope.lang.forms.mobileSignUp.messages.continue);
        }
      } else {
        $scope.data.serialLookUp.messages.push($scope.lang.forms.serialLookUp.messages.notFound);
      }
    }

    $scope.data.serialLookUp.submitted = true;
    $scope.loading = false;
  };

  $scope.mobileSignUpSubmit = function () {
    $scope.loading = true;

    if($scope.forms.mobileSignUp.$valid) {
      $scope.data.step = 'mobileSignUpAuth';
      $scope.data.mobileSignUpAuth.messages.push($scope.lang.forms.mobileSignUpAuth.messages.submit);
      $scope.data.mobileSignUpAuth.messages.push($scope.lang.forms.mobileSignUpAuth.messages.mobile);
      $scope.data.mobileSignUpAuth.messages.push($scope.data.mobileSignUp.mobile);
      $scope.data.mobileSignUp.messages.pop();
    }

    $scope.data.mobileSignUp.submitted = true;
    $scope.loading = false;
  };

  $scope.mobileSignUpAuthSubmit = function () {

    $scope.loading = true;

    if($scope.forms.mobileSignUpAuth.$valid) {
      if($scope.data.mobileSignUpAuth.password === $scope.pin) {
        $scope.data.step = 'success';
        $scope.data.serialLookUp = angular.copy($scope.data.serialLookUpOriginal);
        $scope.data.mobileSignUp = angular.copy($scope.data.mobileSignUpOriginal);
        $scope.data.mobileSignUpAuth = angular.copy($scope.data.mobileSignUpAuthOriginal);
      } else {
        $scope.data.errors.push($scope.lang.forms.mobileSignUpAuth.messages.error);
      }
    }

    $scope.data.mobileSignUpAuth.submitted = true;
    $scope.loading = false;
  };
}]);
