'use strict';

kiwiWeb.controller('ServicesCtrl', function ($scope, lang) {
  $scope.lang = lang.data;
  $scope.changeTitle($scope.lang.title);
  $scope.styles.page = 'services';
});
