'use strict';

kiwiWeb.factory('KiwiWebApi', ['$http', 'Auth', function ($http, Auth) {
  return {
    save: function(ticket, endpoint, success, error) {
      $http({
        method: 'POST',
        url: 'https://api.parse.com/1/classes/' + endpoint,
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
  };
}]);
