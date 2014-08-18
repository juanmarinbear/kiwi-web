'use strict';

angular.module('kiwiWeb', [
  'ngSanitize',
  'ui.router',
  'pascalprecht.translate'
])
.config(function ($stateProvider, $urlRouterProvider, $translateProvider) {

  //delete $httpProvider.defaults.headers.common['X-Requested-With'];
  
  $translateProvider.preferredLanguage('es');
  
  $urlRouterProvider.otherwise('/');

  $stateProvider
  .state('main', {
    url: '/',
    templateUrl: 'app/main/main.tpl.html',
    controller:'MainCtrl'
  })
  .state('/landing', {
    url: '/landing',
    templateUrl: 'app/landing/landing.tpl.html',
    controller:'MainCtrl'
  });
});
