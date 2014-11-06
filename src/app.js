'use strict';

var kiwiWeb = angular.module('kiwiWeb', [
  'ui.router',
  'ngAnimate',
  'ngSanitize',
  'languages'
]);

kiwiWeb.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {

  // Routing Configuration

  $urlRouterProvider.otherwise('/home');

  $stateProvider
  .state('home', {
    url: '/home',
    templateUrl: '/home/home.html',
    controller: 'HomeCtrl'
  })
  .state('services', {
    url: '/services',
    templateUrl: '/services/services/services.html',
    controller: 'ServicesCtrl'
  })
  .state('residential', {
    url: '/residential',
    templateUrl: '/services/residential/residential.html',
    controller: 'ResidentialCtrl'
  })
  .state('business', {
    url: '/business',
    templateUrl: '/services/business/business.html',
    controller: 'BusinessCtrl'
  })
  .state('dedicated', {
    url: '/dedicated',
    templateUrl: '/services/dedicated/dedicated.html',
    controller: 'DedicatedCtrl'
  })
  .state('metromesh', {
    url: '/metromesh',
    templateUrl: '/services/metromesh/metromesh.html',
    controller: 'MetroMeshCtrl'
  })
  .state('faq', {
    url: '/faq/:section',
    templateUrl: '/services/faq/faq.html',
    controller: 'FaqCtrl'
  })
  .state('sales', {
    url: '/sales/:service',
    templateUrl: '/services/sales/sales.html',
    controller: 'SalesCtrl'
  })
  .state('about', {
    url: '/about',
    templateUrl: '/company/about/about.html',
    controller: 'AboutCtrl'
  })
  .state('concesion', {
    url: '/concesion',
    templateUrl: '/company/concesion/concesion.html',
    controller: 'ConcesionCtrl'
  })
  .state('careers', {
    url: '/careers',
    templateUrl: '/company/careers/careers.html',
    controller: 'CareersCtrl'
  })
  .state('apply', {
    url: '/apply/:role',
    templateUrl: '/company/apply/apply.html',
    controller: 'ApplyCtrl'
  })
  .state('stories', {
    url: '/stories',
    templateUrl: '/company/stories/stories.html',
    controller: 'StoriesCtrl'
  })
  .state('privacy', {
    url: '/privacy',
    templateUrl: '/company/privacy/privacy.html',
    controller: 'PrivacyCtrl'
  })
  .state('unsubscribe', {
    url: '/unsubscribe',
    templateUrl: '/company/unsubscribe/unsubscribe.html',
    controller: 'UnsubscribeCtrl'
  })
  .state('contact', {
    url: '/contact',
    templateUrl: '/contact/contact.html',
    controller: 'ContactCtrl'
  })
  .state('dashboard', {
    abstract: true,
    url: '/dashboard',
    templateUrl: '/customer/dashboard/dashboard.html',
    controller: 'DashboardCtrl'
  })
  .state('dashboard.anon', {
    url: '/anon',
    views: {
      'signup' : {
        templateUrl: '/components/signup/signup.html',
        controller: 'SignUpCtrl'
      },
      'signin' : {
        templateUrl: '/components/signin/signin.html',
        controller: 'SignInCtrl'
      }
    }
  })
  .state('pay', {
    url: '/pay',
    templateUrl: '/customer/pay/pay.html',
    controller: 'PayCtrl'
  })
  .state('refer', {
    abstract: true,
    url: '/refer',
    templateUrl: '/customer/refer/refer.html',
    controller: 'ReferCtrl'
  })
  .state('refer.anon', {
    url: '/anon',
    views: {
      'signup' : {
        templateUrl: '/components/signup/signup.html',
        controller: 'SignUpCtrl'
      },
      'signin' : {
        templateUrl: '/components/signin/signin.html',
        controller: 'SignInCtrl'
      }
    }
  })
  .state('support', {
    url: '/support',
    templateUrl: '/support/support/support.html',
    controller: 'SupportCtrl'
  })
  .state('status', {
    url: '/status',
    templateUrl: '/support/status/status.html',
    controller: 'StatusCtrl'
  });
}]);
