'use strict';

angular.module('kiwiWeb')
.controller('TitleCtrl', function ($scope) {
  $scope.title = 'Default';

  $scope.changeTitle = function(title) {
    $scope.title = title;
  }
});
