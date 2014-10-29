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
  .state('services', {
    url: '/services',
    templateUrl: 'app/services/services.tpl.html',
    controller: 'ServicesCtrl',
    resolve: {
      lang: function($http) {
        return $http({
          method: 'GET',
          url: 'app/services/services.lang.es.json'
        })
        .then(function(data) {
          return data;
        });
      }
    }
  })
  .state('residential', {
    url: '/residential',
    templateUrl: 'app/services/residential/residential.tpl.html',
    controller: 'ResidentialCtrl',
    resolve: {
      lang: function($http) {
        return $http({
          method: 'GET',
          url: 'app/services/residential/residential.lang.es.json'
        })
        .then(function(data) {
          return data;
        });
      }
    }
  })
  .state('business', {
    url: '/business',
    templateUrl: 'app/services/business/business.tpl.html',
    controller: 'BusinessCtrl',
    resolve: {
      lang: function($http) {
        return $http({
          method: 'GET',
          url: 'app/services/business/business.lang.es.json'
        })
        .then(function(data) {
          return data;
        });
      }
    }
  })
  .state('dedicated', {
    url: '/dedicated',
    templateUrl: 'app/services/dedicated/dedicated.tpl.html',
    controller: 'DedicatedCtrl',
    resolve: {
      lang: function($http) {
        return $http({
          method: 'GET',
          url: 'app/services/dedicated/dedicated.lang.es.json'
        })
        .then(function(data) {
          return data;
        });
      }
    }
  })
  .state('metromesh', {
    url: '/metromesh',
    templateUrl: 'app/services/metromesh/metromesh.tpl.html',
    controller: 'MetroMeshCtrl',
    resolve: {
      lang: function($http) {
        return $http({
          method: 'GET',
          url: 'app/services/metromesh/metromesh.lang.es.json'
        })
        .then(function(data) {
          return data;
        });
      }
    }
  })
  .state('faq', {
    url: '/faq/:section',
    templateUrl: 'app/services/faq/faq.tpl.html',
    controller: 'FaqCtrl',
    resolve: {
      lang: function($http) {
        return $http({
          method: 'GET',
          url: 'app/services/faq/faq.lang.es.json'
        })
        .then(function(data) {
          return data;
        });
      }
    }
  })
  .state('sales', {
    url: '/sales/:service',
    templateUrl: 'app/services/sales/sales.tpl.html',
    controller: 'SalesCtrl',
    resolve: {
      lang: function($http) {
        return $http({
          method: 'GET',
          url: 'app/services/sales/sales.lang.es.json'
        })
        .then(function(data) {
          return data;
        });
      },
      client: function($http) {
        return $http({
          method: 'GET',
          url: 'app/services/sales/client.lang.es.json'
        })
        .then(function(data) {
          return data;
        });
      },
      location: function($http) {
        return $http({
          method: 'GET',
          url: 'app/services/sales/location.lang.es.json'
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
    url: '/apply/:role',
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
      },
      apply: function($http) {
        return $http({
          method: 'GET',
          url: 'app/company/apply/form.lang.es.json'
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
  .state('unsubscribe', {
    url: '/unsubscribe',
    templateUrl: 'app/company/unsubscribe/unsubscribe.tpl.html',
    controller: 'UnsubscribeCtrl',
    resolve: {
      lang: function($http) {
        return $http({
          method: 'GET',
          url: 'app/company/unsubscribe/unsubscribe.lang.es.json'
        })
        .then(function(data) {
          return data;
        });
      },
      unsubscribe: function($http) {
        return $http({
          method: 'GET',
          url: 'app/company/unsubscribe/form.lang.es.json'
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
      },
      contact: function($http) {
        return $http({
          method: 'GET',
          url: 'app/contact/form.lang.es.json'
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
      },
      support: function($http) {
        return $http({
          method: 'GET',
          url: 'app/support/form.lang.es.json'
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
