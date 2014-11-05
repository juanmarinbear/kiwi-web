'use strict';

kiwiWeb.controller('CareersCtrl', ['$scope', '$location', '$anchorScroll', function ($scope, $location, $anchorScroll) {
  $scope.lang = $scope.language['company/careers/careers_es'];
  $scope.changeTitle($scope.lang.title);

  $scope.goTo = function (anchor) {
    $location.hash(anchor);
    $anchorScroll();
  };
}]);
