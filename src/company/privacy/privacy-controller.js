'use strict';

kiwiWeb.controller('PrivacyCtrl', ['$scope', function ($scope) {
  $scope.lang = $scope.language.privacy;
  $scope.changeTitle($scope.lang.title);

  $scope.isString = function (section) {
    return angular.isString(section);
  };
}]);
