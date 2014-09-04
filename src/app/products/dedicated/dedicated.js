'use strict';

kiwiWeb.controller('DedicatedCtrl', function ($scope, lang) {
  $scope.lang = lang.data;
  $scope.changeTitle($scope.lang.title);
  $scope.styles.page = 'dedicated';
});
