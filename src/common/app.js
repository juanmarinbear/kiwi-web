'use strict';

angular.module('kiwiWeb', [
  'ngSanitize',
  'ui.router'
])
.config(function ($stateProvider, $urlRouterProvider) {

  //delete $httpProvider.defaults.headers.common['X-Requested-With'];
  
  $urlRouterProvider.otherwise('/');

  $stateProvider
  .state('main', {
    url: '/',
    templateUrl: 'app/main/main.tpl.html',
    controller:'MainCtrl'
  })
  .state('/landing', {
    templateUrl: 'app/landing/landing.tpl.html',
    controller:'MainCtrl'
  });
});
