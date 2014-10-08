'use strict';

kiwiWeb.controller('SalesCtrl', function ($scope, $http, $filter, Parse, lang, states) {
  $scope.lang = lang.data;
  $scope.states = states;
  $scope.changeTitle($scope.lang.title);
  $scope.forms = {};
  $scope.ticket = {};
  $scope.ticket.type = 'Sales';
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
          }
          $scope.ticket.district = $scope.district[0].name;
          $scope.ticket.city = $scope.district[0].municipality;
          $scope.ticket.state = $scope.district[0].state;
        });
      });
    });
  };

  $scope.submit = function() {
    $http({
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Parse-Application-Id' : '1r3I7GFxkiMDBE6tbvSnrCLhc7kX0pi9KSc0cWG6',
        'X-Parse-REST-API-Key' : 'WVJmv33FpwJUBoXPoNaUpXbhmboW2uvYjmjQaCgI'
      },
      url: 'https://api.parse.com/1/classes/Sales',
      data: $scope.ticket
    }).
    success(function(data) {
      console.log('Success!');
      console.log(data);
      $scope.success = true;
    }).
    error(function(data) {
      console.log('Error!');
      console.log(data);
    });
  };
});
