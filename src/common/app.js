'use strict';

angular.module('kiwiWeb', [
  'ngSanitize',
  'ngStorage',
  'ngCookies',
  'ui.router'
])
.config(function ($stateProvider, $urlRouterProvider) {

  // Routing Configuration

  $urlRouterProvider.otherwise('/main/landing');

  $stateProvider
  .state('main', {
    abstract: true,
    url: '/main',
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
    url: '/landing',
    templateUrl: 'app/main/landing/landing.tpl.html',
    controller: 'LandingCtrl',
    resolve: {
      lang: function($http) {
        return $http({
          method: 'GET',
          url: 'app/main/landing/landing.lang.es.json'
        })
        .then (function (data) {
          return data;
        });
      }
    }
  })
  .state('main.products', {
    url: '/products',
    templateUrl: 'app/main/products/products.tpl.html',
    controller: 'ProductsCtrl',
    resolve: {
      lang: function($http) {
        return $http({
          method: 'GET',
          url: 'app/main/products/products.lang.es.json'
        })
        .then (function (data) {
          return data;
        });
      }
    }
  })
  .state('main.residential', {
    url: '/residential',
    templateUrl: 'app/main/residential/residential.tpl.html',
    controller: 'ResidentialCtrl',
    resolve: {
      lang: function($http) {
        return $http({
          method: 'GET',
          url: 'app/main/residential/residential.lang.es.json'
        })
        .then (function (data) {
          return data;
        });
      }
    }
  })
  .state('main.business', {
    url: '/business',
    templateUrl: 'app/main/business/business.tpl.html',
    controller: 'BusinessCtrl',
    resolve: {
      lang: function($http) {
        return $http({
          method: 'GET',
          url: 'app/main/business/business.lang.es.json'
        })
        .then (function (data) {
          return data;
        });
      }
    }
  })
  .state('main.dedicated', {
    url: '/dedicated',
    templateUrl: 'app/main/dedicated/dedicated.tpl.html',
    controller: 'DedicatedCtrl',
    resolve: {
      lang: function($http) {
        return $http({
          method: 'GET',
          url: 'app/main/dedicated/dedicated.lang.es.json'
        })
        .then (function (data) {
          return data;
        });
      }
    }
  })
  .state('main.metromesh', {
    url: '/metromesh',
    templateUrl: 'app/main/metromesh/metromesh.tpl.html',
    controller: 'MetroMeshCtrl',
    resolve: {
      lang: function($http) {
        return $http({
          method: 'GET',
          url: 'app/main/metromesh/metromesh.lang.es.json'
        })
        .then (function (data) {
          return data;
        });
      }
    }
  })
  .state('support', {
    abstract: true,
    url: '/support',
    templateUrl: 'app/support/support.tpl.html',
    controller: 'SupportCtrl',
    resolve: {
      lang: function($http) {
        return $http({
          method: 'GET',
          url: 'app/support/support.lang.es.json'
        })
        .then (function (data) {
          return data;
        });
      }
    }
  })
  .state('support.faq', {
    url: '/faq',
    templateUrl: 'app/support/faq/faq.tpl.html',
    controller: 'FaqCtrl',
    resolve: {
      lang: function($http) {
        return $http({
          method: 'GET',
          url: 'app/support/faq/faq.lang.es.json'
        })
        .then (function (data) {
          return data;
        });
      }
    }
  })
  .state('support.help', {
    url: '/help',
    templateUrl: 'app/support/help/help.tpl.html',
    controller: 'HelpCtrl',
    resolve: {
      lang: function($http) {
        return $http({
          method: 'GET',
          url: 'app/support/help/help.lang.es.json'
        })
        .then (function (data) {
          return data;
        });
      }
    }
  })
  .state('company', {
    abstract: true,
    url: '/company',
    templateUrl: 'app/company/company.tpl.html',
    controller: 'CompanyCtrl',
    resolve: {
      lang: function($http) {
        return $http({
          method: 'GET',
          url: 'app/company/company.lang.es.json'
        })
        .then (function (data) {
          return data;
        });
      }
    }
  });
});
