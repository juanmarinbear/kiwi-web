'use strict';

kiwiWeb.factory('KiwiWebApi', function ($http, Auth) {
  return {
    saveSales: function(ticket, success, error) {
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
  }
});
