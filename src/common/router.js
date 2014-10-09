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
        .then(function(data) {
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
        .then(function(data) {
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
        .then(function(data) {
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
        .then(function(data) {
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
        .then(function(data) {
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
        .then(function(data) {
          return data;
        });
      }
    }
  })
  .state('faq', {
    url: '/faq/:section',
    templateUrl: 'app/products/faq/faq.tpl.html',
    controller: 'FaqCtrl',
    resolve: {
      lang: function($http) {
        return $http({
          method: 'GET',
          url: 'app/products/faq/faq.lang.es.json'
        })
        .then(function(data) {
          return data;
        });
      }
    }
  })
  .state('sales', {
    url: '/sales/:product',
    templateUrl: 'app/products/sales/sales.tpl.html',
    controller: 'SalesCtrl',
    resolve: {
      lang: function($http) {
        return $http({
          method: 'GET',
          url: 'app/products/sales/sales.lang.es.json'
        })
        .then(function(data) {
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
        .then(function(data) {
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
        .then(function(data) {
          return data;
        });
      }
    }
  })
  .state('careers', {
    url: '/careers',
    templateUrl: 'app/company/careers/careers.tpl.html',
    controller: 'CareersCtrl',
    resolve: {
      lang: function($http) {
        return $http({
          method: 'GET',
          url: 'app/company/careers/careers.lang.es.json'
        })
        .then(function(data) {
          return data;
        });
      }
    }
  })
  .state('apply', {
    url: '/apply',
    templateUrl: 'app/company/apply/apply.tpl.html',
    controller: 'ApplyCtrl',
    resolve: {
      lang: function($http) {
        return $http({
          method: 'GET',
          url: 'app/company/apply/apply.lang.es.json'
        })
        .then(function(data) {
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
        .then(function(data) {
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
        .then(function(data) {
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
        .then(function(data) {
          return data;
        });
      }
    }
  })
  .state('dashboard', {
    abstract: true,
    url: '/dashboard',
    templateUrl: 'app/customer/dashboard/dashboard.tpl.html',
    controller: 'DashboardCtrl',
    resolve: {
      lang: function($http) {
        return $http({
          method: 'GET',
          url: 'app/customer/dashboard/dashboard.lang.es.json'
        })
        .then(function(data) {
          return data;
        });
      }
    }
  })
  .state('dashboard.anon', {
    url: '/anon',
    views: {
      'signUp' : {
        templateUrl: 'app/customer/signUp/signUp.tpl.html',
        controller: 'SignUpCtrl',
        resolve: {
          lang: function($http) {
            return $http({
              method: 'GET',
              url: 'app/customer/signUp/signUp.lang.es.json'
            })
            .then(function(data) {
              return data;
            });
          }
        }
      },
      'signIn' : {
        templateUrl: 'app/customer/signIn/signIn.tpl.html',
        controller: 'SignInCtrl',
        resolve: {
          lang: function($http) {
            return $http({
              method: 'GET',
              url: 'app/customer/signIn/signIn.lang.es.json'
            })
            .then(function(data) {
              return data;
            });
          }
        }
      }
    }
  })
  .state('pay', {
    url: '/pay',
    templateUrl: 'app/customer/pay/pay.tpl.html',
    controller: 'PayCtrl',
    resolve: {
      lang: function($http) {
        return $http({
          method: 'GET',
          url: 'app/customer/pay/pay.lang.es.json'
        })
        .then(function(data) {
          return data;
        });
      }
    }
  })
  .state('refer', {
    abstract: true,
    url: '/refer',
    templateUrl: 'app/customer/refer/refer.tpl.html',
    controller: 'ReferCtrl',
    resolve: {
      lang: function($http) {
        return $http({
          method: 'GET',
          url: 'app/customer/refer/refer.lang.es.json'
        })
        .then(function(data) {
          return data;
        });
      }
    }
  })
  .state('refer.anon', {
    url: '/anon',
    views: {
      'signUp' : {
        templateUrl: 'app/customer/signUp/signUp.tpl.html',
        controller: 'SignUpCtrl',
        resolve: {
          lang: function($http) {
            return $http({
              method: 'GET',
              url: 'app/customer/signUp/signUp.lang.es.json'
            })
            .then(function(data) {
              return data;
            });
          }
        }
      },
      'signIn' : {
        templateUrl: 'app/customer/signIn/signIn.tpl.html',
        controller: 'SignInCtrl',
        resolve: {
          lang: function($http) {
            return $http({
              method: 'GET',
              url: 'app/customer/signIn/signIn.lang.es.json'
            })
            .then(function(data) {
              return data;
            });
          }
        }
      }
    }
  })
  .state('support', {
    url: '/support',
    templateUrl: 'app/support/support.tpl.html',
    controller: 'SupportCtrl',
    resolve: {
      lang: function($http) {
        return $http({
          method: 'GET',
          url: 'app/support/support.lang.es.json'
        })
        .then(function(data) {
          return data;
        });
      }
    }
  })
  .state('status', {
    url: '/status',
    templateUrl: 'app/support/status/status.tpl.html',
    controller: 'StatusCtrl',
    resolve: {
      lang: function($http) {
        return $http({
          method: 'GET',
          url: 'app/support/status/status.lang.es.json'
        })
        .then(function(data) {
          return data;
        });
      }
    }
  });
});
