'use strict';

var kiwiWeb = angular.module('kiwiWeb', [
  'ngSanitize',
  'ngStorage',
  'ngCookies',
  'ui.router',
  'ngAnimate'
]);

kiwiWeb.controller('AppCtrl', function ($scope, Transition) {
  $scope.title = 'Kiwi Networks';
  $scope.styles = {};

  $scope.changeTitle = function(title) {
    $scope.title = title;
  };

  $scope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams) {

    if(toParams === fromParams) {
      console.log('Useless JSLint!');
    }

    $scope.styles.transition = Transition.getTransition(toState, toParams, fromState, fromParams);

  });

  $scope.$on('$stateChangeSuccess', function () {

    $scope.styles.page = '';

  });
});
