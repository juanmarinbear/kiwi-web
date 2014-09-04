'use strict';

kiwiWeb.controller('FaqCtrl', function ($scope, $stateParams, lang) {
  $scope.lang = lang.data;
  $scope.changeTitle($scope.lang.title);
});
