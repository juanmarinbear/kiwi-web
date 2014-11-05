'use strict';

angular.module('kiwiWeb')
.controller('FaqCtrl', ['$scope', '$location', '$anchorScroll', 'lang', function ($scope, $location, $anchorScroll, lang) {
  $scope.lang = lang.data;
  $scope.changeTitle($scope.lang.title);

  $scope.goTo = function (anchor) {
    $location.hash(anchor);
    $anchorScroll();
  };
}]);
