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
  .state('main.salesForm', {
    url: '/salesForm/:product',
    templateUrl: 'app/forms/sales/salesForm.tpl.html',
    controller: 'SalesFormCtrl',
    resolve: {
      lang: function($http) {
        return $http({
          method: 'GET',
          url: 'app/forms/sales/salesForm.lang.es.json'
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
    url: '/faq/:location',
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
  .state('support.supportForm', {
    url: '/supportForm',
    templateUrl: 'app/forms/support/supportForm.tpl.html',
    controller: 'SupportFormCtrl',
    resolve: {
      lang: function($http) {
        return $http({
          method: 'GET',
          url: 'app/forms/support/supportForm.lang.es.json'
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
  })
  .state('company.about', {
    url: '/about',
    templateUrl: 'app/company/about/about.tpl.html',
    controller: 'AboutCtrl',
    resolve: {
      lang: function($http) {
        return $http({
          method: 'GET',
          url: 'app/company/about/about.lang.es.json'
        })
        .then (function (data) {
          return data;
        });
      }
    }
  })
  .state('company.privacy', {
    url: '/privacy',
    templateUrl: 'app/company/privacy/privacy.tpl.html',
    controller: 'PrivacyCtrl',
    resolve: {
      lang: function($http) {
        return $http({
          method: 'GET',
          url: 'app/company/privacy/privacy.lang.es.json'
        })
        .then (function (data) {
          return data;
        });
      }
    }
  })
  .state('company.contact', {
    url: '/contact',
    templateUrl: 'app/company/contact/contact.tpl.html',
    controller: 'ContactCtrl',
    resolve: {
      lang: function($http) {
        return $http({
          method: 'GET',
          url: 'app/company/contact/contact.lang.es.json'
        })
        .then (function (data) {
          return data;
        });
      }
    }
  })
  .state('company.contactForm', {
    url: '/contactForm',
    templateUrl: 'app/forms/contact/contactForm.tpl.html',
    controller: 'ContactFormCtrl',
    resolve: {
      lang: function($http) {
        return $http({
          method: 'GET',
          url: 'app/forms/contact/contactForm.lang.es.json'
        })
        .then (function (data) {
          return data;
        });
      }
    }
  })
  .state('customer', {
    abstract: true,
    url: '/customer',
    templateUrl: 'app/customer/customer.tpl.html',
    controller: 'CustomerCtrl',
    resolve: {
      lang: function($http) {
        return $http({
          method: 'GET',
          url: 'app/customer/customer.lang.es.json'
        })
        .then (function (data) {
          return data;
        });
      }
    }
  })
  .state('customer.customerForm', {
    url: '/customerForm',
    templateUrl: 'app/forms/customer/customerForm.tpl.html',
    controller: 'CustomerFormCtrl',
    resolve: {
      lang: function($http) {
        return $http({
          method: 'GET',
          url: 'app/forms/customer/customerForm.lang.es.json'
        })
        .then (function (data) {
          return data;
        });
      }
    }
  });
});
