'use strict';

kiwiWeb.controller('ConcesionCtrl', function ($scope, lang) {
  $scope.lang = lang.data;
  $scope.changeTitle($scope.lang.title);
});
