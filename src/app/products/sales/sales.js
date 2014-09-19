'use strict';

kiwiWeb.controller('SalesCtrl', function ($scope, $stateParams, $http, Parse, lang) {
  $scope.lang = lang.data;
  $scope.changeTitle($scope.lang.title);
  $scope.data = {};

  $http.defaults.useXDomain = true;
  delete $http.defaults.headers.common['X-Requested-With'];

  $scope.submit = function() {
/*
    $http({
      url: 'https://kiwinetworks.zendesk.com/api/v2/tickets.json',
      method: 'GET', 
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': 'Basic a2l3aWFkbWluQGtpd2luZXR3b3Jrcy5jb20vdG9rZW46OVVXTFRsR21JV0xzeFNNV3FRU1ZXUm8yR3hZTzBnc0tYYVhFVlRVTw==' 
      }    
    }).
    success(function(data, status, headers, config) {
      console.log('Success!');
      console.log(data);
      // this callback will be called asynchronously
      // when the response is available
    }).
    error(function(data, status, headers, config) {
      console.log('Error!');
      console.log(data);
      // called asynchronously if an error occurs
      // or server returns response with an error status.
    });
*/
    $http({
      url: 'https://kiwinetworks.zendesk.com/api/v2/tickets.json',
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': 'Basic a2l3aWFkbWluQGtpd2luZXR3b3Jrcy5jb20vdG9rZW46OVVXTFRsR21JV0xzeFNNV3FRU1ZXUm8yR3hZTzBnc0tYYVhFVlRVTw==' 
      },
      data: {
        ticket: {
          subject: "This is a test!",
          comment: {
            body: "Hope it succeeds!" 
          },
          priority: "urgent"
        }
      }
    }).
    success(function(data, status, headers, config) {
      console.log('Success!');
      console.log(data);
      // this callback will be called asynchronously
      // when the response is available
    }).
    error(function(data, status, headers, config) {
      console.log('Error!');
      console.log(data);
      // called asynchronously if an error occurs
      // or server returns response with an error status.
    });
/*
    if($scope.sales.$valid) {
      $scope.loading = true;
      var Lead = Parse.Object.extend('Lead');
      var lead = new Lead($scope.data);
      lead.save(null, {
        success: function(lead) {
          $scope.success = true;
          $scope.loading = false;
          $scope.$apply();
        },
        error: function(lead, error) {
          $scope.loading = false;
        }
      });
    }
    $scope.submitted = true;
*/
  };
});
