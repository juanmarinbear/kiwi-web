'use strict';

var kiwiWeb = angular.module('kiwiWeb', [
  'ngSanitize',
  'ngStorage',
  'ngCookies',
  'ui.router',
  'ngAnimate'
]);

kiwiWeb.controller('AppCtrl', function ($scope, Transition, Menu) {
  $scope.title = 'Kiwi Networks';
  $scope.styles = {};
  $scope.menu = Menu;

  $scope.changeTitle = function(title) {
    $scope.title = title;
  };

  $scope.menuToggle = function(section) {

    $scope.menu.sections[section].visible = !$scope.menu.sections[section].visible;

    if($scope.menu.current === '') {
      $scope.menu.current = section;
    } else if($scope.menu.current === section) {
      $scope.menu.current = '';
    } else {
      $scope.menu.sections[$scope.menu.current].visible = !$scope.menu.sections[$scope.menu.current].visible;
      $scope.menu.current = section;
    }
  }

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
