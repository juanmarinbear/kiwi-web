'use strict';

kiwiWeb.controller('HomeCtrl', ['$scope', 'lang', function ($scope, lang) {
  $scope.lang = lang.data;
  console.log($scope.lang);
  $scope.changeTitle($scope.lang.title);
  $scope.styles.page = 'home';
}]);
