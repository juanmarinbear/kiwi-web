'use strict';

kiwiWeb.controller('ServicesCtrl', ['$scope', 'lang', function ($scope, lang) {
  $scope.lang = lang.data;
  $scope.changeTitle($scope.lang.title);
  $scope.styles.page = 'services';
}]);
