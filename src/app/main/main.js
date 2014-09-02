'use strict';

angular.module('kiwiWeb')
.controller('MainCtrl', function ($scope, $state, lang) {
  $scope.lang = lang.data;
  $scope.changeTitle($scope.lang.title);
  $scope.pageClass = '';
  $scope.transition = {};
  $scope.transition.baseDuration = 6;

  var sections = [ 
    'main.landing',
    'main.products',
    'main.residential',
    'main.business',
    'main.dedicated',
    'main.metromesh'
  ];

  $scope.$on("$stateChangeStart", function (event, toState, toParams, fromState, fromParams) {

    var fromIndex, toIndex, direction, steps;

    toIndex = sections.indexOf(toState.name);
    fromIndex = sections.indexOf(fromState.name);
    direction = toIndex > fromIndex  ? 1 : -1;
    steps = Math.abs(toIndex - fromIndex);

    if(steps > 1) {
      event.preventDefault();
      $scope.transition.origin = fromState.name;
      $scope.transition.origin = fromState.name;
      $scope.transition.finalDestination = toState.name;
      $state.go(sections[fromIndex + direction]);
    } 
  });

  $scope.$on("$stateChangeSuccess", function (event, toState, toParams, fromState, fromParams) {
    if(toState.name && $scope.transition.finalDestination && (toState.name !== $scope.transition.finalDestination)) {
      $state.go($scope.transition.finalDestination);
    } else {
      $scope.transition.finalDestination = null; 
    }
  });
});
