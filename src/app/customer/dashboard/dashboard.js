'use strict';

kiwiWeb.controller('DashboardCtrl', function ($scope, lang) {
  $scope.lang = lang.data;
  $scope.changeTitle($scope.lang.title);
});
