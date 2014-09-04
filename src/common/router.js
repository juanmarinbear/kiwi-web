'use strict';

kiwiWeb.config(function ($stateProvider, $urlRouterProvider) {

  // Routing Configuration

  $urlRouterProvider.otherwise('/home');

  $stateProvider
  .state('home', {
    url: '/home',
    templateUrl: 'app/home/home.tpl.html',
    controller: 'HomeCtrl',
    resolve: {
      lang: function($http) {
        return $http({
          method: 'GET',
          url: 'app/home/home.lang.es.json'
        })
        .then (function (data) {
          return data;
        });
      }
    }
  })
  .state('products', {
    url: '/products',
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
  .state('residential', {
    url: '/residential',
    templateUrl: 'app/products/residential/residential.tpl.html',
    controller: 'ResidentialCtrl',
    resolve: {
      lang: function($http) {
        return $http({
          method: 'GET',
          url: 'app/products/residential/residential.lang.es.json'
        })
        .then (function (data) {
          return data;
        });
      }
    }
  })
  .state('business', {
    url: '/business',
    templateUrl: 'app/products/business/business.tpl.html',
    controller: 'BusinessCtrl',
    resolve: {
      lang: function($http) {
        return $http({
          method: 'GET',
          url: 'app/products/business/business.lang.es.json'
        })
        .then (function (data) {
          return data;
        });
      }
    }
  })
  .state('dedicated', {
    url: '/dedicated',
    templateUrl: 'app/products/dedicated/dedicated.tpl.html',
    controller: 'DedicatedCtrl',
    resolve: {
      lang: function($http) {
        return $http({
          method: 'GET',
          url: 'app/products/dedicated/dedicated.lang.es.json'
        })
        .then (function (data) {
          return data;
        });
      }
    }
  })
  .state('metromesh', {
    url: '/metromesh',
    templateUrl: 'app/products/metromesh/metromesh.tpl.html',
    controller: 'MetroMeshCtrl',
    resolve: {
      lang: function($http) {
        return $http({
          method: 'GET',
          url: 'app/products/metromesh/metromesh.lang.es.json'
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
