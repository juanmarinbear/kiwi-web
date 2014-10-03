'use strict';

kiwiWeb.controller('SalesCtrl', function ($scope, $http, $filter, Parse, lang, states) {
  $scope.lang = lang.data;
  $scope.states = states.data;
  $scope.changeTitle($scope.lang.title);
  $scope.forms = {};
  $scope.ticket = {};
  $scope.step = 'client';

  $scope.next = function() {
    $scope.loading = true;
    $scope.step = 'location';
    $scope.loading = false;
  };

  $scope.prev = function() {
    $scope.loading = true;
    $scope.step = 'client';
    $scope.loading = false;
  };

  $scope.submit = function() {
  };

  $scope.findState = function() {

    var state, zip;
    zip = $scope.ticket.zip.substr(0,2);
    state = $filter('filter')($scope.states, function(value, index){
      if(value.zip.indexOf(zip) > -1) {
        return true; 
      } else {
        return false; 
      }
    }, false)[0];
    
    $scope.ticket.state = state.code;
  };

/*
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
    }
    $scope.submitted = true;
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
  };
*/
});
