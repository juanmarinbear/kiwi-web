kiwiWeb.controller('PayCtrl', ['$scope', 'lang', function ($scope, lang) {
  $scope.lang = lang.data;
  $scope.changeTitle($scope.lang.title);
  $scope.data = {};
  $scope.data.idSubmit = {};
  $scope.data.idSubmit.messages = [];
  $scope.data.errors = [];
  $scope.data.step = 'idSubmit';

  $scope.data.idSubmitOriginal = angular.copy($scope.data.mobileSignIn);
}]);
