'use strict';

kiwiWeb.factory('MxPostApi', ['$http', 'Auth', function ($http, Auth) {
  return {

    getStates: function (success, error) {
      $http({
        method: 'GET',
        url: 'https://api.parse.com/1/classes/States',
        headers: Auth.mxPostApi.headers,
        params: {
          order: 'name'
        }
      })
      .success(function (data) {
        success(data);
      })
      .error(function (data) {
        error(data);
      });
    },

    getMunicipalities: function (state, success, error) {
      $http({
        method: 'GET',
        url: 'https://api.parse.com/1/classes/Municipalities',
        headers: Auth.mxPostApi.headers,
        params: {
          where: {
            state: state
          },
          limit: '1000',
          order: 'name'
        }
      })
      .success(function(data) {
        success(data.results);
      })
      .error(function(data) {
        error(data);
      });
    },

    getDistricts: function (district, success, error) {
      $http({
        method: 'GET',
        url: 'https://api.parse.com/1/classes/Districts',
        headers: Auth.mxPostApi.headers,
        params: {
          where: {
            state: district.state,
            municipality: district.municipality
          },
          limit: '1000',
          order: 'name'
        }
      })
      .success(function(data) {
        success(data.results);
      })
      .error(function(data) {
        error(data);
      });
    },

    geoZip: function (zip, success, error) {
      $http({
        method: 'GET',
        url: 'https://api.parse.com/1/classes/Districts',
        headers: Auth.mxPostApi.headers,
        params: {
          where: {
            zip: zip
          },
          order: 'name'
        }
      })
      .success(function(data) {
        success(data.results);
      })
      .error(function(data) {
        error(data);
      });
    },

    geoDistrict: function (district, success, error) {
      $http({
        method: 'GET',
        url: 'https://api.parse.com/1/classes/Districts',
        headers: Auth.mxPostApi.headers,
        params: {
          where: {
            state: district.state,
            municipality: district.municipality,
            name: district.district
          },
          limit: '1000',
          order: 'name'
        }
      })
      .success( function (data) {
        success(data.results[0]);
      })
      .error( function (data) {
        error(data);
      });
    },

    geoMunicipality: function (district, success, error) {
      $http({
        method: 'GET',
        url: 'https://api.parse.com/1/classes/Districts',
        headers: Auth.mxPostApi.headers,
        params: {
          where: {
            state: district.state,
            municipality: district.municipality
          },
          limit: '1000',
          order: 'name'
        }
      })
      .success( function (data) {
        success(data.results);
      })
      .error( function (data) {
        error(data);
      });
    
    },

    geoState: function (district, success, error) {
      $http({
        method: 'GET',
        url: 'https://api.parse.com/1/classes/Municipalities',
        headers: Auth.mxPostApi.headers,
        params: {
          where: {
            state: district.state
          },
          limit: '1000',
          order: 'name'
        }
      })
      .success( function (data) {
        success(data.results);
      })
      .error( function (data) {
        error(data);
      });
    }
  };
}]);
