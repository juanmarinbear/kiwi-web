'use strict';

kiwiWeb.factory('KiwiWebApi', function ($http, Auth) {
  return {
    sales: {
      save: function(ticket, success, error) {
        $http({
          method: 'POST',
          url: 'https://api.parse.com/1/classes/Sales',
          headers: Auth.kiwiWebApi.headers,
          data: ticket
        }).
        success(function(data) {
          success(data);
        }).
        error(function(data) {
          error(data);
        });
      }
    },
    support: {
      save: function(ticket, success, error) {
        $http({
          method: 'POST',
          url: 'https://api.parse.com/1/classes/Support',
          headers: Auth.kiwiWebApi.headers,
          data: ticket
        }).
        success(function(data) {
          success(data);
        }).
        error(function(data) {
          error(data);
        });
      }
    },
    contact: {
      save: function(ticket, success, error) {
        $http({
          method: 'POST',
          url: 'https://api.parse.com/1/classes/Contact',
          headers: Auth.kiwiWebApi.headers,
          data: ticket
        }).
        success(function(data) {
          success(data);
        }).
        error(function(data) {
          error(data);
        });
      }
    },
    apply: {
      save: function(ticket, success, error) {
        $http({
          method: 'POST',
          url: 'https://api.parse.com/1/classes/Jobs',
          headers: Auth.kiwiWebApi.headers,
          data: ticket
        }).
        success(function(data) {
          success(data);
        }).
        error(function(data) {
          error(data);
        });
      }
    }
  }
});
