kiwiWeb.controller('StoriesCtrl', ['$scope', '$sce', 'lang', function ($scope, $sce, lang) {
  $scope.lang = lang.data;
  $scope.changeTitle($scope.lang.title);

  $scope.trustHtml = function (html) {
    return $sce.trustAsHtml(html);
  };
}]);
