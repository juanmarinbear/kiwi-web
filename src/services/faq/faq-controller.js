'use strict';

angular.module('kiwiWeb')
.controller('FaqCtrl', ['$scope', '$location', '$anchorScroll', function ($scope, $location, $anchorScroll) {
  $scope.lang = $scope.language['services/faq/faq_es'];
  $scope.changeTitle($scope.lang.title);

  $scope.goTo = function (anchor) {
    $location.hash(anchor);
    $anchorScroll();
  };
}]);
