'use strict';

angular.module('kiwiWeb')
.controller('FaqCtrl', function ($scope, $stateParams, $location, $anchorScroll, lang) {
  $scope.lang = lang.data;
  $scope.changeTitle($scope.lang.title);

  $scope.goTo = function(anchor) {
    $location.hash(anchor);
    $anchorScroll();
  };
});
