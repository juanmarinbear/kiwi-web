'use strict';

angular.module('kiwiWeb')
.controller('MainCtrl', ['$scope', '$state', 'lang', function ($scope, $state, lang) { 
  $scope.lang = lang.data;
  $scope.changeTitle($scope.lang.title);
  $scope.pageClass = '';

}]);
