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

    $scope.transition.css = direction > 0 ? 'up' : 'down';
  });

});
