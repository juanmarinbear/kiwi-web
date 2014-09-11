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
  .state('sales', {
    url: '/sales/:product',
    templateUrl: 'app/products/sales/salesForm/salesForm.tpl.html',
    controller: 'SalesFormCtrl',
    resolve: {
      lang: function($http) {
        return $http({
          method: 'GET',
          url: 'app/products/sales/salesForm/salesForm.lang.es.json'
        })
        .then (function (data) {
          return data;
        });
      }
    }
  })
  .state('about', {
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
  .state('concesion', {
    url: '/concesion',
    templateUrl: 'app/company/concesion/concesion.tpl.html',
    controller: 'ConcesionCtrl',
    resolve: {
      lang: function($http) {
        return $http({
          method: 'GET',
          url: 'app/company/concesion/concesion.lang.es.json'
        })
        .then (function (data) {
          return data;
        });
      }
    }
  })
  .state('jobs', {
    url: '/jobs',
    templateUrl: 'app/company/jobs/jobs.tpl.html',
    controller: 'JobsCtrl',
    resolve: {
      lang: function($http) {
        return $http({
          method: 'GET',
          url: 'app/company/jobs/jobs.lang.es.json'
        })
        .then (function (data) {
          return data;
        });
      }
    }
  })
  .state('stories', {
    url: '/stories',
    templateUrl: 'app/company/stories/stories.tpl.html',
    controller: 'StoriesCtrl',
    resolve: {
      lang: function($http) {
        return $http({
          method: 'GET',
          url: 'app/company/stories/stories.lang.es.json'
        })
        .then (function (data) {
          return data;
        });
      }
    }
  })
  .state('privacy', {
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
  .state('contact', {
    url: '/contact',
    templateUrl: 'app/contact/contact.tpl.html',
    controller: 'ContactCtrl',
    resolve: {
      lang: function($http) {
        return $http({
          method: 'GET',
          url: 'app/contact/contact.lang.es.json'
        })
        .then (function (data) {
          return data;
        });
      }
    }
  })
  .state('contactForm', {
    url: '/contactForm',
    templateUrl: 'app/contact/contactForm/contactForm.tpl.html',
    controller: 'ContactFormCtrl',
    resolve: {
      lang: function($http) {
        return $http({
          method: 'GET',
          url: 'app/contact/contactForm/contactForm.lang.es.json'
        })
        .then (function (data) {
          return data;
        });
      }
    }
  })
  .state('dashboard', {
    url: '/dashboard',
    templateUrl: 'app/customer/dashboard/dashboard.tpl.html',
    controller: 'DashboardCtrl',
    resolve: {
      lang: function($http) {
        return $http({
          method: 'GET',
          url: 'app/customer/dashboard/dashboard.lang.es.json'
        })
        .then (function (data) {
          return data;
        });
      }
    }
  })
  .state('faq', {
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
  .state('supportForm', {
    url: '/supportForm',
    templateUrl: 'app/support/supportForm/supportForm.tpl.html',
    controller: 'SupportFormCtrl',
    resolve: {
      lang: function($http) {
        return $http({
          method: 'GET',
          url: 'app/forms/support/supportForm/supportForm.lang.es.json'
        })
        .then (function (data) {
          return data;
        });
      }
    }
  });
});
