'use strict';

angular.module('kiwiWeb')
.controller('FaqCtrl', ['$scope', '$location', '$anchorScroll', function ($scope, $location, $anchorScroll) {
  $scope.lang = $scope.language['faq'];
  $scope.changeTitle($scope.lang.title);

  $scope.goTo = function (anchor) {
    $location.hash(anchor);
    $anchorScroll();
  };
}]);
