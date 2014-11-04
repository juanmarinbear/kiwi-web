kiwiWeb.controller('StatusCtrl', ['$scope', '$stateParams', 'lang', function ($scope, $stateParams, lang) {
  $scope.lang = lang.data;
  $scope.changeTitle($scope.lang.title);
}]);
