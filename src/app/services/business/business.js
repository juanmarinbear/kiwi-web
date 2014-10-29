'use strict';

kiwiWeb.controller('BusinessCtrl', function ($scope, lang) {
  $scope.lang = lang.data;
  $scope.changeTitle($scope.lang.title);
  $scope.styles.page = 'business';
});
