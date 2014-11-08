'use strict';

kiwiWeb.controller('CareersCtrl', ['$scope', '$location', '$anchorScroll', function ($scope, $location, $anchorScroll) {
  $scope.lang = $scope.language.careers;
  $scope.changeTitle($scope.lang.title);

  $scope.goTo = function (anchor) {
    $location.hash(anchor);
    $anchorScroll();
  };
}]);
