'use strict';

kiwiWeb.controller('SalesCtrl', function ($scope, $stateParams, $http, Parse, lang) {
  $scope.lang = lang.data;
  $scope.changeTitle($scope.lang.title);
  $scope.data = {};

  var zendesk = {};
  zendesk.username = 'kiwiadmin@kiwinetworks.com';
  zendesk.token = '9UWLTlGmIWLsxSMWqQSVWRo2GxYO0gsKXaXEVTUO';
  zendesk.api = 'https://kiwinetworks.zendesk.com/api/v2';

  $http.defaults.useXDomain = true;
  delete $http.defaults.headers.common['X-Requested-With'];

  $scope.submit = function() {

    if($scope.sales.$valid) {
      $scope.loading = true;
      $scope.success = true;
      $scope.loading = false;
      $scope.$apply();
    }
    $scope.submitted = true;
/*
    $http({
      method: 'GET', 
      url: $scope.zendesk.api + '/users/me.json',
      headers: {
        'Accept': 'application/json',
        'Authorization': 'Basic ' + btoa(zendesk.username + '/token:' + zendesk.token)
      }
      }).
      success(function(data, status, headers, config) {
        console.log('Success!');
        console.log(data);
        console.log(status);
        console.log(config);
      }).
      error(function(data, status, headers, config) {
        console.log('Error!');
        console.log(data);
        console.log(status);
        console.log(config);
      });
*/
  };
});
