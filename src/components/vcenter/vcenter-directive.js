'use strict';

angular.module('kiwiWeb')
  .directive('vcenter', function($window, $timeout) {

    return {
      restrict: 'A',
      link: function (scope, element, attrs) {

        var w = angular.element($window);

        scope.vcenter = function () {
          console.log('Center!');
          var box = angular.element(element[0]);
          var windowHeight = $window.innerHeight;
          var headerHeight = document.querySelector('#header').offsetHeight;
          var boxHeight = element[0].offsetHeight;
          var margin = (windowHeight - headerHeight - boxHeight) / 2;
          box.css({'margin-top': margin + 'px'});
        }

        $timeout(function () {
          scope.vcenter();
        }, 1);

        w.bind('resize', function () {
          scope.vcenter();  
        });
      }
    }
  });
