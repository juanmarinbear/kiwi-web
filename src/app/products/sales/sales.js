'use strict';

kiwiWeb.controller('SalesCtrl', function ($scope, $http, $filter, Parse, lang, states) {
  $scope.lang = lang.data;
  $scope.states = states; 
  $scope.changeTitle($scope.lang.title);
  $scope.forms = {};
  $scope.ticket = {};
  $scope.step = 'client';
  $scope.errors = {};

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

  $scope.geoState = function() {
    $scope.errors.zip = false;
    $http({
      method: 'GET',
      headers: {
        'X-Parse-Application-Id' : 'OB82iuKjelfGNuaPLWO09Fr4zk8rsb0bQ1pcrFex',
        'X-Parse-REST-API-Key' : 'TzXwbfcfk3Z7s4t8GeTQdpuATCHX2COmO0xnr37s'
      },
      url: 'https://api.parse.com/1/classes/Municipality',
      params: {
        where: {
          state: $scope.ticket.state
        },
        limit: '1000',
        order: 'name'
      }
    })
    .then(function(data) {
      $scope.municipalities = data.data.results;
      $scope.districts = []; 
      $scope.ticket.district = null; 
      $scope.ticket.city = null; 
      $scope.ticket.zip = null; 
    });
  };

  $scope.geoCity = function() {
    $scope.errors.zip = false;
    $http({
      method: 'GET',
      headers: {
        'X-Parse-Application-Id' : 'OB82iuKjelfGNuaPLWO09Fr4zk8rsb0bQ1pcrFex',
        'X-Parse-REST-API-Key' : 'TzXwbfcfk3Z7s4t8GeTQdpuATCHX2COmO0xnr37s'
      },
      url: 'https://api.parse.com/1/classes/District',
      params: {
        where: {
          state: $scope.ticket.state,
          municipality: $scope.ticket.city
        },
        limit: '1000',
        order: 'name'
      }
    })
    .then(function(data) {
      $scope.districts = data.data.results;
      $scope.ticket.district = null; 
      $scope.ticket.zip = null; 
    });
  
  };

  $scope.geoDistrict = function() {
    $scope.errors.zip = false;
    $http({
      method: 'GET',
      headers: {
        'X-Parse-Application-Id' : 'OB82iuKjelfGNuaPLWO09Fr4zk8rsb0bQ1pcrFex',
        'X-Parse-REST-API-Key' : 'TzXwbfcfk3Z7s4t8GeTQdpuATCHX2COmO0xnr37s'
      },
      url: 'https://api.parse.com/1/classes/District',
      params: {
        where: {
          state: $scope.ticket.state,
          municipality: $scope.ticket.city,
          name: $scope.ticket.district
        },
        limit: '1000',
        order: 'name'
      }
    })
    .then(function(data) {
      $scope.district = data.data.results[0];
      $scope.ticket.district = $scope.district.name;
      $scope.ticket.zip = $scope.district.zip; 
    });
  
  };

  $scope.geoZip = function() {
    $http({
      method: 'GET',
      headers: {
        'X-Parse-Application-Id' : 'OB82iuKjelfGNuaPLWO09Fr4zk8rsb0bQ1pcrFex',
        'X-Parse-REST-API-Key' : 'TzXwbfcfk3Z7s4t8GeTQdpuATCHX2COmO0xnr37s'
      },
      url: 'https://api.parse.com/1/classes/District',
      params: {
        where: {
          zip: $scope.ticket.zip 
        },
        order: 'name'
      }
    })
    .then(function(data) {
      $scope.district = data.data.results;
      if(!$scope.district.length) {
        $scope.errors.zip = true;
        $scope.districts = []; 
        $scope.municipalities = []; 
        $scope.ticket.state = null; 
        $scope.ticket.city = null; 
        $scope.ticket.district = null; 
        return;
      }
      $scope.errors.zip = false;
      $http({
        method: 'GET',
        headers: {
          'X-Parse-Application-Id' : 'OB82iuKjelfGNuaPLWO09Fr4zk8rsb0bQ1pcrFex',
          'X-Parse-REST-API-Key' : 'TzXwbfcfk3Z7s4t8GeTQdpuATCHX2COmO0xnr37s'
        },
        url: 'https://api.parse.com/1/classes/Municipality',
        params: {
          where: {
            state: $scope.district[0].state
          },
          limit: '1000',
          order: 'name'
        }
      })
      .then(function(data) {
        $scope.municipalities = data.data.results;
        $http({
          method: 'GET',
          headers: {
            'X-Parse-Application-Id' : 'OB82iuKjelfGNuaPLWO09Fr4zk8rsb0bQ1pcrFex',
            'X-Parse-REST-API-Key' : 'TzXwbfcfk3Z7s4t8GeTQdpuATCHX2COmO0xnr37s'
          },
          url: 'https://api.parse.com/1/classes/District',
          params: {
            where: {
              state: $scope.district[0].state,
              municipality: $scope.district[0].municipality
            },
            limit: '1000',
            order: 'name'
          }
        })
        .then(function(data) {
          if($scope.district.length > 1) {
            $scope.districts = $scope.district;
          } else {
            $scope.districts = data.data.results; 
          };
          $scope.ticket.district = $scope.district[0].name;
          $scope.ticket.city = $scope.district[0].municipality;
          $scope.ticket.state = $scope.district[0].state;
        });
      });
    });
  };

  var zendesk = {};

  zendesk.username = 'kiwiadmin@kiwinetworks.com';
  zendesk.token = '9UWLTlGmIWLsxSMWqQSVWRo2GxYO0gsKXaXEVTUO';
  zendesk.api = 'https://kiwinetworks.zendesk.com/api/v2';

  $http.defaults.useXDomain = true;
  delete $http.defaults.headers.common['X-Requested-With'];

  $scope.submit = function() {

    if($scope.forms.client.$valid && $scope.forms.location.$valid) {
      $scope.loading = true;
      var ticket = {
        ticket: {
          requester: {
            name: $scope.ticket.name + ' ' + $scope.ticket.last,
            email: $scope.ticket.email,
            locale_id: '2',
            user_fields: {
              mobile_mx: $scope.ticket.mobile 
            }
          },
          subject: 'Sales ' + '- ' + $scope.ticket.service,
          description: 'Sales ' + '- ' + $scope.ticket.service,
          ticket_form_id: '22855',
          custom_fields: [
            {
              id: '22630199',
              value: $scope.ticket.service
            },
            {
              id: '22785105',
              value: $scope.ticket.contact
            },
            {
              id: '22739659',
              value: $scope.ticket.zip
            },
            {
              id: '22630289',
              value: $scope.ticket.state
            },
            {
              id: '22630299',
              value: $scope.ticket.city
            },
            {
              id: '22739579',
              value: $scope.ticket.district
            },
            {
              id: '22679095',
              value: $scope.ticket.street
            },
            {
              id: '22679105',
              value: $scope.ticket.number
            },
            {
              id: '22679115',
              value: $scope.ticket.apt
            },
            {
              id: '22739669',
              value: $scope.ticket.building 
            },
            {
              id: '22630209',
              value: $scope.ticket.levels
            }
          ]
        }
      };

      $http({
        method: 'POST', 
        url: zendesk.api + '/tickets.json',
        headers: {
          'Accept': 'application/json',
          'Content-Type' : 'application/json',
          'Authorization': 'Basic ' + btoa(zendesk.username + '/token:' + zendesk.token)
        },
        data: JSON.stringify(ticket)
        }).
        success(function(data, status, headers, config) {
          console.log('Success!');
          console.log(data);
          $scope.success = true;
        }).
        error(function(data, status, headers, config) {
          console.log('Error!');
          console.log(data);
        });
      }
    $scope.loading = false;
    $scope.submitted = true;
  };
});
