'use strict';

var kiwiWeb = angular.module('kiwiWeb', [
  'ui.router',
  'ngAnimate',
  'ngResource',
  'ngSanitize'
]);

kiwiWeb.controller('AppCtrl', function ($scope, Transition, Menu) {
  $scope.title = 'Kiwi Networks';
  $scope.styles = {};
  $scope.menu = Menu;
  $scope.menu.active = true;
  $scope.menu.current = $scope.menu.sections[0];

  $scope.changeTitle = function(title) {
    $scope.title = title;
  };

  $scope.menuToggle = function() {
    $scope.menu.active = !$scope.menu.active;
  };

  $scope.menuSectionToggle = function(section) {

    section.visible = !section.visible;

    if($scope.menu.current === null) {
      $scope.menu.current = section;
    } else if($scope.menu.current === section) {
      $scope.menu.current = null;
    } else {
      $scope.menu.current.visible = !$scope.menu.current.visible;
      $scope.menu.current = section;
    }
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
