'use strict';

angular.module('kiwiWeb', [
  'ngSanitize',
  'ngStorage',
  'ngCookies',
  'ui.router'
])
.run(['$rootScope', function($rootScope) {
}])
.config(function ($stateProvider, $urlRouterProvider) {

  // Routing Configuration

  $urlRouterProvider.otherwise('/landing');

  $stateProvider
  .state('main', {
    abstract: true,
    url: '/',
    templateUrl: 'app/main/main.tpl.html',
    controller: 'MainCtrl',
    resolve: {
      lang: function($http) {
        return $http({
          method: 'GET',
          url: 'app/main/main.lang.es.json'
        })
        .then (function (data) {
          return data;
        });
      }
    }
  })
  .state('main.landing', {
    url: 'landing',
    templateUrl: 'app/landing/landing.tpl.html',
    controller: 'LandingCtrl',
    resolve: {
      lang: function($http) {
        return $http({
          method: 'GET',
          url: 'app/landing/landing.lang.es.json'
        })
        .then (function (data) {
          return data;
        });
      }
    }
  })
  .state('main.products', {
    url: 'products',
    templateUrl: 'app/products/products.tpl.html',
    controller: 'ProductsCtrl',
    resolve: {
      lang: function($http) {
        return $http({
          method: 'GET',
          url: 'app/products/products.lang.es.json'
        })
        .then (function (data) {
          return data;
        });
      }
    }
  });
});
