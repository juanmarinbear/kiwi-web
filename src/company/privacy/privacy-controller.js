'use strict';

kiwiWeb.controller('PrivacyCtrl', ['$scope', 'lang', function ($scope, lang) {
  $scope.lang = lang; 
  $scope.changeTitle($scope.lang.title);
}]);
