'use strict';

kiwiWeb.controller('HomeCtrl', ['$scope', 'template', function ($scope, template) {
  $scope.lang = $scope.changeLanguage(template, $scope.langKey);
  $scope.changeTitle($scope.lang.title);
}]);
