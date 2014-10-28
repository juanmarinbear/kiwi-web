'use strict';

kiwiWeb.controller('CareersCtrl', function ($scope, $location, $anchorScroll, lang) {
  $scope.lang = lang.data;
  $scope.changeTitle($scope.lang.title);

  $scope.goTo = function(anchor) {
    $location.hash(anchor);
    $anchorScroll();
  };
});
