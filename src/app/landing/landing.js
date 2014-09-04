'use strict';

kiwiWeb.controller('MainCtrl', function ($scope, lang) {
  $scope.lang = lang.data;
  $scope.changeTitle($scope.lang.title);
  $scope.pageClass = 'main';
});
