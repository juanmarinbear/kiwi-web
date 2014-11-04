kiwiWeb.controller('PrivacyCtrl', ['$scope', 'lang', function ($scope, lang) {
  $scope.lang = lang.data;
  $scope.changeTitle($scope.lang.title);

  $scope.isString = function (section) {
    return angular.isString(section);
  };
}]);
