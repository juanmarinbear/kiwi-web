'use strict';

angular.module('kiwiWeb')
  .directive('vcenter', function($window, $timeout) {

    return {
      restrict: 'A',
      link: function (scope, element) {

        var w = angular.element($window);

        scope.vcenter = function () {
          var box = angular.element(element[0]);
          var windowHeight = $window.innerHeight;
          var headerHeight = document.querySelector('#header').offsetHeight;
          var boxHeight = element[0].offsetHeight;
          var margin = (boxHeight + headerHeight) > windowHeight ? '4em' : ((windowHeight - headerHeight - boxHeight) / 2) + 'px';
          box.css({'margin-top': margin});
        };

        $timeout(function () {
          scope.vcenter();
        }, 1);

        w.bind('resize', function () {
          scope.vcenter();  
        });
      }
    };
  });
