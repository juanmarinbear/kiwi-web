'use strict';

angular.module('kiwiWeb')
.controller('TitleCtrl', function ($scope, Transition) {
  $scope.title = 'Default';
  $scope.transition = '';

  $scope.changeTitle = function(title) {
    $scope.title = title;
  };

  $scope.$on("$stateChangeStart", function (event, toState, toParams, fromState, fromParams) {

    $scope.transition = Transition.getTransition(toState, toParams, fromState, fromParams);

  });
});
