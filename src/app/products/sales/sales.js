'use strict';

kiwiWeb.controller('SalesCtrl', function ($scope, $http, $filter, MxPostApi, KiwiWebApi, lang) {
  $scope.lang = lang.data;
  $scope.changeTitle($scope.lang.title);
  $scope.forms = {};
  $scope.ticket = {};
  $scope.ticket.type = 'Sales';
  $scope.step = 'client';
  $scope.errors = {};

  MxPostApi.getStates(function (data) {
    $scope.states = data.results;   
  },function (error) {
    console.log('Could not load states!');
    $scope.states = []; 
  });

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

  $scope.geoZip = function() {
    MxPostApi.geoZip($scope.ticket.zip, function (district) {

      if(!district.length) {
        $scope.errors.zip = true;
        $scope.districts = [];
        $scope.municipalities = [];
        $scope.ticket.state = null;
        $scope.ticket.municipality = null;
        $scope.ticket.district = null;
        return;
      }

      $scope.errors.zip = false;
      $scope.ticket.state = district[0].state;
      $scope.districts = district;
      $scope.ticket.district = district[0].name;

      MxPostApi.getMunicipalities(district[0].state, function (municipalities) {
        $scope.municipalities = municipalities;
        $scope.ticket.municipality = district[0].municipality;
      }, function (error) {
        console.log(error);
      });

    }, function (error) {
      console.log(error);
    });
  };

  $scope.geoDistrict = function () {
    $scope.errors.zip = false;
    MxPostApi.geoDistrict($scope.ticket, function (district) {
      $scope.ticket.district = district.name;
      $scope.ticket.zip = district.zip;
    }, function (error) {
      console.log(error);
    })
  };

  $scope.geoMunicipality = function () {
    $scope.errors.zip = false;
    MxPostApi.geoMunicipality($scope.ticket, function (districts) {
      $scope.districts = districts;
      $scope.ticket.district = null;
      $scope.ticket.zip = null;
    }, function (error) {
      console.log(error);
    })
  };

  $scope.geoState = function () {
    MxPostApi.geoState($scope.ticket, function (municipalities) {
      $scope.municipalities = municipalities;
      $scope.districts = [];
      $scope.ticket.district = null;
      $scope.ticket.municipality = null;
      $scope.ticket.zip = null;
    }, function (error) {
      console.log(error);
    });
  };

  $scope.submit = function() {
    if($scope.forms.client.$valid && $scope.forms.location.$valid) {
      KiwiWebApi.saveSales($scope.ticket, function (ticket) {
        console.log('Success!');
        $scope.success = true;
        console.log(ticket);
      }, function (error) {
        console.log('Error!');
        console.log(error);
      });
    }
    $scope.forms.client.submitted = true;
    $scope.forms.location.submitted = true;
  };
});
