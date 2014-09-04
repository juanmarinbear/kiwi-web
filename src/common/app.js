'use strict';

var kiwiWeb = angular.module('kiwiWeb', [
  'ngSanitize',
  'ngStorage',
  'ngCookies',
  'ui.router',
  'ngAnimate'
])
.controller('AppCtrl', function ($scope, Transition) {
  $scope.title = 'Default';
  $scope.transition = '';

  $scope.changeTitle = function(title) {
    $scope.title = title;
  };

  $scope.$on("$stateChangeStart", function (event, toState, toParams, fromState, fromParams) {

    $scope.transition = Transition.getTransition(toState, toParams, fromState, fromParams);

  });

  $scope.$on("$stateChangeSuccess", function (event, toState, toParams, fromState, fromParams) {

    $scope.transition = '';

  });
});
