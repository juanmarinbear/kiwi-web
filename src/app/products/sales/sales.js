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

  $scope.geoZip = function() {

    $scope.ticket.state = $scope.findState().code;
    $scope.loadGeoData($scope.ticket.state, function(data){

      var district = $filter('filter')(data, {zip: $scope.ticket.zip}, true)[0];

      console.log(district);

      $scope.cities = _.sortBy(_.uniq(data, function(item) {
        return item.municipalityId;
      }),function(item) {
        return item.municipality;
      });

      $scope.districts = _.sortBy(_.uniq(data, function(item) {
        return item.district;
      }),function(item) {
        return item.district;
      });

      console.log($scope.districts);

      $scope.ticket.city = district.municipality;
      $scope.ticket.district = district.district;

    });
  };

  $scope.findState = function() {

    var zip = $scope.ticket.zip.substr(0,2);

    var state = $filter('filter')($scope.states, function(value, index){
      if(value.zip.indexOf(zip) > -1) {
        return true; 
      } else {
        return false; 
      }
    }, false)[0];
    return state;
  };

  $scope.loadGeoData = function(state, callback) {

    var url = '/common/json/mx/states/' + state + '.json';

    $http({method: 'GET', url: url}).
      success(function(data, status, headers, config) {
        callback(data);
      }).
      error(function(data, status, headers, config) {
        console.log('Error loading data!');
        callback(data);
      });
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
