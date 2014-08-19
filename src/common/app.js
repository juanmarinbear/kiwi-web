'use strict';

angular.module('kiwiWeb', [
  'ngSanitize',
  'ngStorage',
  'ngCookies',
  'ui.router'
])
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
  })
  .state('main.residential', {
    url: 'residential',
    templateUrl: 'app/residential/residential.tpl.html',
    controller: 'ResidentialCtrl',
    resolve: {
      lang: function($http) {
        return $http({
          method: 'GET',
          url: 'app/residential/residential.lang.es.json'
        })
        .then (function (data) {
          return data;
        });
      }
    }
  })
  .state('main.business', {
    url: 'business',
    templateUrl: 'app/business/business.tpl.html',
    controller: 'BusinessCtrl',
    resolve: {
      lang: function($http) {
        return $http({
          method: 'GET',
          url: 'app/business/business.lang.es.json'
        })
        .then (function (data) {
          return data;
        });
      }
    }
  })
  .state('main.dedicated', {
    url: 'dedicated',
    templateUrl: 'app/dedicated/dedicated.tpl.html',
    controller: 'DedicatedCtrl',
    resolve: {
      lang: function($http) {
        return $http({
          method: 'GET',
          url: 'app/dedicated/dedicated.lang.es.json'
        })
        .then (function (data) {
          return data;
        });
      }
    }
  });
});
