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
    templateProvider: function ($templateCache, $timeout) {
      return $timeout(function () {
        return $templateCache.get('home.html');
      }, 1);
    },
    controller: 'HomeCtrl'
  })
  .state('services', {
    url: '/services',
    templateProvider: function ($templateCache, $timeout) {
      return $timeout(function () {
        return $templateCache.get('services/services.html');
      }, 1);
    },
    controller: 'ServicesCtrl'
  })
  .state('residential', {
    url: '/residential',
    templateProvider: function ($templateCache, $timeout) {
      return $timeout(function () {
        return $templateCache.get('residential/residential.html');
      }, 1);
    },
    controller: 'ResidentialCtrl'
  })
  .state('business', {
    url: '/business',
    templateProvider: function ($templateCache, $timeout) {
      return $timeout(function () {
        return $templateCache.get('business/business.html');
      }, 1);
    },
    controller: 'BusinessCtrl'
  })
  .state('dedicated', {
    url: '/dedicated',
    templateProvider: function ($templateCache, $timeout) {
      return $timeout(function () {
        return $templateCache.get('dedicated/dedicated.html');
      }, 1);
    },
    controller: 'DedicatedCtrl'
  })
  .state('metromesh', {
    url: '/metromesh',
    templateProvider: function ($templateCache, $timeout) {
      return $timeout(function () {
        return $templateCache.get('metromesh/metromesh.html');
      }, 1);
    },
    controller: 'MetroMeshCtrl'
  })
  .state('faq', {
    url: '/faq/:section',
    templateProvider: function ($templateCache, $timeout) {
      return $timeout(function () {
        return $templateCache.get('faq/faq.html');
      }, 1);
    },
    controller: 'FaqCtrl'
  })
  .state('sales', {
    url: '/sales/:service',
    templateProvider: function ($templateCache, $timeout) {
      return $timeout(function () {
        return $templateCache.get('sales/sales.html');
      }, 1);
    },
    controller: 'SalesCtrl'
  })
  .state('about', {
    url: '/about',
    templateProvider: function ($templateCache, $timeout) {
      return $timeout(function () {
        return $templateCache.get('about/about.html');
      }, 1);
    },
    controller: 'AboutCtrl'
  })
  .state('concesion', {
    url: '/concesion',
    templateProvider: function ($templateCache, $timeout) {
      return $timeout(function () {
        return $templateCache.get('concesion/concesion.html');
      }, 1);
    },
    controller: 'ConcesionCtrl'
  })
  .state('careers', {
    url: '/careers',
    templateProvider: function ($templateCache, $timeout) {
      return $timeout(function () {
        return $templateCache.get('careers/careers.html');
      }, 1);
    },
    controller: 'CareersCtrl'
  })
  .state('apply', {
    url: '/apply/:role',
    templateProvider: function ($templateCache, $timeout) {
      return $timeout(function () {
        return $templateCache.get('apply/apply.html');
      }, 1);
    },
    controller: 'ApplyCtrl'
  })
  .state('stories', {
    url: '/stories',
    templateProvider: function ($templateCache, $timeout) {
      return $timeout(function () {
        return $templateCache.get('stories/stories.html');
      }, 1);
    },
    controller: 'StoriesCtrl'
  })
  .state('privacy', {
    url: '/privacy',
    templateProvider: function ($templateCache, $timeout) {
      return $timeout(function () {
        return $templateCache.get('privacy/privacy.html');
      }, 1);
    },
    controller: 'PrivacyCtrl'
  })
  .state('unsubscribe', {
    url: '/unsubscribe',
    templateProvider: function ($templateCache, $timeout) {
      return $timeout(function () {
        return $templateCache.get('unsubscribe/unsubscribe.html');
      }, 1);
    },
    controller: 'UnsubscribeCtrl'
  })
  .state('contact', {
    url: '/contact',
    templateProvider: function ($templateCache, $timeout) {
      return $timeout(function () {
        return $templateCache.get('contact.html');
      }, 1);
    },
    controller: 'ContactCtrl'
  })
  .state('dashboard', {
    abstract: true,
    url: '/dashboard',
    templateProvider: function ($templateCache, $timeout) {
      return $timeout(function () {
        return $templateCache.get('dashboard/dashboard.html');
      }, 1);
    },
    controller: 'DashboardCtrl'
  })
  .state('dashboard.anon', {
    url: '/anon',
    views: {
      'signup' : {
        templateProvider: function ($templateCache, $timeout) {
          return $timeout(function () {
            return $templateCache.get('signup/signup.html');
          }, 1);
        },
        controller: 'SignUpCtrl'
      },
      'signin' : {
        templateProvider: function ($templateCache, $timeout) {
          return $timeout(function () {
            return $templateCache.get('signin/signin.html');
          }, 1);
        },
        controller: 'SignInCtrl'
      }
    }
  })
  .state('pay', {
    url: '/pay',
    templateProvider: function ($templateCache, $timeout) {
      return $timeout(function () {
        return $templateCache.get('pay/pay.html');
      }, 1);
    },
    controller: 'PayCtrl'
  })
  .state('refer', {
    abstract: true,
    url: '/refer',
    templateProvider: function ($templateCache, $timeout) {
      return $timeout(function () {
        return $templateCache.get('refer/refer.html');
      }, 1);
    },
    controller: 'ReferCtrl'
  })
  .state('refer.anon', {
    url: '/anon',
    views: {
      'signup' : {
        templateProvider: function ($templateCache, $timeout) {
          return $timeout(function () {
            return $templateCache.get('signup/signup.html');
          }, 1);
    },
        controller: 'SignUpCtrl'
      },
      'signin' : {
        templateProvider: function ($templateCache, $timeout) {
          return $timeout(function () {
            return $templateCache.get('signin/signin.html');
          }, 1);
    },
        controller: 'SignInCtrl'
      }
    }
  })
  .state('support', {
    url: '/support',
    templateProvider: function ($templateCache, $timeout) {
      return $timeout(function () {
        return $templateCache.get('support/support.html');
      }, 1);
    },
    controller: 'SupportCtrl'
  })
  .state('status', {
    url: '/status',
    templateProvider: function ($templateCache, $timeout) {
      return $timeout(function () {
        return $templateCache.get('status/status.html');
      }, 1);
    },
    controller: 'StatusCtrl'
  });
}]);
