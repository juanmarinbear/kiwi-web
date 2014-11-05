'use strict';

var kiwiWeb = angular.module('kiwiWeb', [
  'ui.router',
  'ngAnimate',
  'ngSanitize',
  'es'
]);

kiwiWeb.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {

  // Routing Configuration

  $urlRouterProvider.otherwise('/home');

  $stateProvider
  .state('home', {
    url: '/home',
    templateUrl: '/home/home.html',
    controller: 'HomeCtrl',
    resolve: {
      template: function () {
        return 'home';
      }
    }
  })
  .state('services', {
    url: '/services',
    templateUrl: '/services/services/services.html',
    controller: 'ServicesCtrl',
    resolve: {
      lang: function($http) {
        return $http({
          method: 'GET',
          url: '/lang/es/services_es.json'
        })
        .then(function(data) {
          return data;
        });
      }
    }
  })
  .state('residential', {
    url: '/residential',
    templateUrl: '/services/residential/residential.html',
    controller: 'ResidentialCtrl',
    resolve: {
      lang: function($http) {
        return $http({
          method: 'GET',
          url: '/lang/es/residential_es.json'
        })
        .then(function(data) {
          return data;
        });
      }
    }
  })
  .state('business', {
    url: '/business',
    templateUrl: '/services/business/business.html',
    controller: 'BusinessCtrl',
    resolve: {
      lang: function($http) {
        return $http({
          method: 'GET',
          url: '/lang/es/business_es.json'
        })
        .then(function(data) {
          return data;
        });
      }
    }
  })
  .state('dedicated', {
    url: '/dedicated',
    templateUrl: '/services/dedicated/dedicated.html',
    controller: 'DedicatedCtrl',
    resolve: {
      lang: function($http) {
        return $http({
          method: 'GET',
          url: '/lang/es/dedicated_es.json'
        })
        .then(function(data) {
          return data;
        });
      }
    }
  })
  .state('metromesh', {
    url: '/metromesh',
    templateUrl: '/services/metromesh/metromesh.html',
    controller: 'MetroMeshCtrl',
    resolve: {
      lang: function($http) {
        return $http({
          method: 'GET',
          url: '/lang/es/metromesh_es.json'
        })
        .then(function(data) {
          return data;
        });
      }
    }
  })
  .state('faq', {
    url: '/faq/:section',
    templateUrl: '/services/faq/faq.html',
    controller: 'FaqCtrl',
    resolve: {
      lang: function($http) {
        return $http({
          method: 'GET',
          url: '/lang/es/faq_es.json'
        })
        .then(function(data) {
          return data;
        });
      }
    }
  })
  .state('sales', {
    url: '/sales/:service',
    templateUrl: '/services/sales/sales.html',
    controller: 'SalesCtrl',
    resolve: {
      lang: function($http) {
        return $http({
          method: 'GET',
          url: '/lang/es/sales_es.json'
        })
        .then(function(data) {
          return data;
        });
      },
      client: function($http) {
        return $http({
          method: 'GET',
          url: '/lang/es/client_es.json'
        })
        .then(function(data) {
          return data;
        });
      },
      location: function($http) {
        return $http({
          method: 'GET',
          url: '/lang/es/location_es.json'
        })
        .then(function(data) {
          return data;
        });
      }
    }
  })
  .state('about', {
    url: '/about',
    templateUrl: '/company/about/about.html',
    controller: 'AboutCtrl',
    resolve: {
      lang: function($http) {
        return $http({
          method: 'GET',
          url: '/lang/es/about_es.json'
        })
        .then(function(data) {
          return data;
        });
      }
    }
  })
  .state('concesion', {
    url: '/concesion',
    templateUrl: '/company/concesion/concesion.html',
    controller: 'ConcesionCtrl',
    resolve: {
      lang: function($http) {
        return $http({
          method: 'GET',
          url: '/lang/es/concesion_es.json'
        })
        .then(function(data) {
          return data;
        });
      }
    }
  })
  .state('careers', {
    url: '/careers',
    templateUrl: '/company/careers/careers.html',
    controller: 'CareersCtrl',
    resolve: {
      lang: function($http) {
        return $http({
          method: 'GET',
          url: '/lang/es/careers_es.json'
        })
        .then(function(data) {
          return data;
        });
      }
    }
  })
  .state('apply', {
    url: '/apply/:role',
    templateUrl: '/company/apply/apply.html',
    controller: 'ApplyCtrl',
    resolve: {
      lang: function($http) {
        return $http({
          method: 'GET',
          url: '/lang/es/apply_es.json'
        })
        .then(function(data) {
          return data;
        });
      },
      apply: function($http) {
        return $http({
          method: 'GET',
          url: '/lang/es/applyform_es.json'
        })
        .then(function(data) {
          return data;
        });
      }
    }
  })
  .state('stories', {
    url: '/stories',
    templateUrl: '/company/stories/stories.html',
    controller: 'StoriesCtrl',
    resolve: {
      lang: function($http) {
        return $http({
          method: 'GET',
          url: '/lang/es/stories_es.json'
        })
        .then(function(data) {
          return data;
        });
      }
    }
  })
  .state('privacy', {
    url: '/privacy',
    templateUrl: '/company/privacy/privacy.html',
    controller: 'PrivacyCtrl',
    resolve: {
      lang: function($http) {
        return $http({
          method: 'GET',
          url: '/lang/es/privacy_es.json'
        })
        .then(function(data) {
          return data;
        });
      }
    }
  })
  .state('unsubscribe', {
    url: '/unsubscribe',
    templateUrl: '/company/unsubscribe/unsubscribe.html',
    controller: 'UnsubscribeCtrl',
    resolve: {
      lang: function($http) {
        return $http({
          method: 'GET',
          url: '/lang/es/unsubscribe_es.json'
        })
        .then(function(data) {
          return data;
        });
      },
      unsubscribe: function($http) {
        return $http({
          method: 'GET',
          url: '/lang/es/unsubscribeform_es.json'
        })
        .then(function(data) {
          return data;
        });
      }
    }
  })
  .state('contact', {
    url: '/contact',
    templateUrl: '/contact/contact.html',
    controller: 'ContactCtrl',
    resolve: {
      lang: function($http) {
        return $http({
          method: 'GET',
          url: '/lang/es/contact_es.json'
        })
        .then(function(data) {
          return data;
        });
      },
      contact: function($http) {
        return $http({
          method: 'GET',
          url: '/lang/es/contactform_es.json'
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
    templateUrl: '/customer/dashboard/dashboard.html',
    controller: 'DashboardCtrl',
    resolve: {
      lang: function($http) {
        return $http({
          method: 'GET',
          url: '/lang/es/dashboard_es.json'
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
      'signup' : {
        templateUrl: '/components/signup/signup.html',
        controller: 'SignUpCtrl',
        resolve: {
          lang: function($http) {
            return $http({
              method: 'GET',
              url: '/lang/es/signup_es.json'
            })
            .then(function(data) {
              return data;
            });
          }
        }
      },
      'signin' : {
        templateUrl: '/components/signin/signin.html',
        controller: 'SignInCtrl',
        resolve: {
          lang: function($http) {
            return $http({
              method: 'GET',
              url: '/lang/es/signin_es.json'
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
    templateUrl: '/customer/pay/pay.html',
    controller: 'PayCtrl',
    resolve: {
      lang: function($http) {
        return $http({
          method: 'GET',
          url: '/lang/es/pay_es.json'
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
    templateUrl: '/customer/refer/refer.html',
    controller: 'ReferCtrl',
    resolve: {
      lang: function($http) {
        return $http({
          method: 'GET',
          url: '/lang/es/refer_es.json'
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
      'signup' : {
        templateUrl: '/components/signup/signup.html',
        controller: 'SignUpCtrl',
        resolve: {
          lang: function($http) {
            return $http({
              method: 'GET',
              url: '/lang/es/signup_es.json'
            })
            .then(function(data) {
              return data;
            });
          }
        }
      },
      'signin' : {
        templateUrl: '/components/signin/signin.html',
        controller: 'SignInCtrl',
        resolve: {
          lang: function($http) {
            return $http({
              method: 'GET',
              url: '/lang/es/signin_es.json'
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
    templateUrl: '/support/support/support.html',
    controller: 'SupportCtrl',
    resolve: {
      lang: function($http) {
        return $http({
          method: 'GET',
          url: '/lang/es/support_es.json'
        })
        .then(function(data) {
          return data;
        });
      },
      support: function($http) {
        return $http({
          method: 'GET',
          url: '/lang/es/supportform_es.json'
        })
        .then(function(data) {
          return data;
        });
      }
    }
  })
  .state('status', {
    url: '/status',
    templateUrl: '/support/status/status.html',
    controller: 'StatusCtrl',
    resolve: {
      lang: function($http) {
        return $http({
          method: 'GET',
          url: '/lang/es/status_es.json'
        })
        .then(function(data) {
          return data;
        });
      }
    }
  });
}]);
