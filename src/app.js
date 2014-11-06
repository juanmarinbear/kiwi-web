'use strict';

var kiwiWeb = angular.module('kiwiWeb', [
  'ui.router',
  'ngAnimate',
  'ngSanitize',
  'templates',
  'languages'
]);

kiwiWeb.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {

  // Routing Configuration

  $urlRouterProvider.otherwise('/home');

  $stateProvider
  .state('home', {
    url: '/home',
    templateProvider: function ($templateCache) {
      return $templateCache.get('home.html');
    },
    controller: 'HomeCtrl'
  })
  .state('services', {
    url: '/services',
    templateProvider: function ($templateCache) {
      return $templateCache.get('services/services.html');
    },
    controller: 'ServicesCtrl'
  })
  .state('residential', {
    url: '/residential',
    templateProvider: function ($templateCache) {
      return $templateCache.get('residential/residential.html');
    },
    controller: 'ResidentialCtrl'
  })
  .state('business', {
    url: '/business',
    templateProvider: function ($templateCache) {
      return $templateCache.get('business/business.html');
    },
    controller: 'BusinessCtrl'
  })
  .state('dedicated', {
    url: '/dedicated',
    templateProvider: function ($templateCache) {
      return $templateCache.get('dedicated/dedicated.html');
    },
    controller: 'DedicatedCtrl'
  })
  .state('metromesh', {
    url: '/metromesh',
    templateProvider: function ($templateCache) {
      return $templateCache.get('metromesh/metromesh.html');
    },
    controller: 'MetroMeshCtrl'
  })
  .state('faq', {
    url: '/faq/:section',
    templateProvider: function ($templateCache) {
      return $templateCache.get('faq/faq.html');
    },
    controller: 'FaqCtrl'
  })
  .state('sales', {
    url: '/sales/:service',
    templateProvider: function ($templateCache) {
      return $templateCache.get('sales/sales.html');
    },
    controller: 'SalesCtrl'
  })
  .state('about', {
    url: '/about',
    templateProvider: function ($templateCache) {
      return $templateCache.get('about/about.html');
    },
    controller: 'AboutCtrl'
  })
  .state('concesion', {
    url: '/concesion',
    templateProvider: function ($templateCache) {
      return $templateCache.get('concesion/concesion.html');
    },
    controller: 'ConcesionCtrl'
  })
  .state('careers', {
    url: '/careers',
    templateProvider: function ($templateCache) {
      return $templateCache.get('careers/careers.html');
    },
    controller: 'CareersCtrl'
  })
  .state('apply', {
    url: '/apply/:role',
    templateProvider: function ($templateCache) {
      return $templateCache.get('apply/apply.html');
    },
    controller: 'ApplyCtrl'
  })
  .state('stories', {
    url: '/stories',
    templateProvider: function ($templateCache) {
      return $templateCache.get('stories/stories.html');
    },
    controller: 'StoriesCtrl'
  })
  .state('privacy', {
    url: '/privacy',
    templateProvider: function ($templateCache) {
      return $templateCache.get('privacy/privacy.html');
    },
    controller: 'PrivacyCtrl'
  })
  .state('unsubscribe', {
    url: '/unsubscribe',
    templateProvider: function ($templateCache) {
      return $templateCache.get('unsubscribe/unsubscribe.html');
    },
    controller: 'UnsubscribeCtrl'
  })
  .state('contact', {
    url: '/contact',
    templateProvider: function ($templateCache) {
      return $templateCache.get('contact.html');
    },
    controller: 'ContactCtrl'
  })
  .state('dashboard', {
    abstract: true,
    url: '/dashboard',
    templateProvider: function ($templateCache) {
      return $templateCache.get('dashboard/dashboard.html');
    },
    controller: 'DashboardCtrl'
  })
  .state('dashboard.anon', {
    url: '/anon',
    views: {
      'signup' : {
        templateProvider: function ($templateCache) {
          return $templateCache.get('signup/signup.html');
        },
        controller: 'SignUpCtrl'
      },
      'signin' : {
        templateProvider: function ($templateCache) {
          return $templateCache.get('signin/signin.html');
        },
        controller: 'SignInCtrl'
      }
    }
  })
  .state('pay', {
    url: '/pay',
    templateProvider: function ($templateCache) {
      return $templateCache.get('pay/pay.html');
    },
    controller: 'PayCtrl'
  })
  .state('refer', {
    abstract: true,
    url: '/refer',
    templateProvider: function ($templateCache) {
      return $templateCache.get('refer/refer.html');
    },
    controller: 'ReferCtrl'
  })
  .state('refer.anon', {
    url: '/anon',
    views: {
      'signup' : {
        templateProvider: function ($templateCache) {
          return $templateCache.get('signup/signup.html');
        },
        controller: 'SignUpCtrl'
      },
      'signin' : {
        templateProvider: function ($templateCache) {
          return $templateCache.get('signin/signin.html');
        },
        controller: 'SignInCtrl'
      }
    }
  })
  .state('support', {
    url: '/support',
    templateProvider: function ($templateCache) {
      return $templateCache.get('support/support.html');
    },
    controller: 'SupportCtrl'
  })
  .state('status', {
    url: '/status',
    templateProvider: function ($templateCache) {
      return $templateCache.get('status/status.html');
    },
    controller: 'StatusCtrl'
  });
}]);
