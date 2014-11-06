'use strict';

kiwiWeb.controller('StoriesCtrl', ['$scope', '$sce', function ($scope, $sce) {
  $scope.lang = $scope.language['stories'];
  $scope.changeTitle($scope.lang.title);

  $scope.trustHtml = function (html) {
    return $sce.trustAsHtml(html);
  };
}]);
