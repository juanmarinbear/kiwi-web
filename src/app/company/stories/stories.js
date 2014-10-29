'use strict';

kiwiWeb.controller('StoriesCtrl', function ($scope, $sce, lang) {
  $scope.lang = lang.data;
  $scope.changeTitle($scope.lang.title);

  $scope.trustHtml = function (html) {
    return $sce.trustAsHtml(html);
  };
});
