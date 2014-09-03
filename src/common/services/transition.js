'use strict';

angular.module('kiwiWeb')
.factory('Transition', function(Routes) {

  return {
    getTransition: function(toState, toParams, fromState, fromParams) {

      var fromParent, toParent, fromChild, toChild, fromIndex, toIndex;

      fromParent = fromState.name.split('.')[0];
      fromChild = fromState.name.split('.')[1];
      toParent = toState.name.split('.')[0];
      toChild = toState.name.split('.')[1];

      if(toParent === 'customer') {
        return 'rotateCubeDown';
      }

      if(fromParent === 'customer') {
        return 'rotateCubeUp';
      }

      if(fromParent === toParent) {
        fromIndex = Routes[fromParent][fromChild];
        toIndex = Routes[toParent][toChild];
        return toIndex > fromIndex ? 'slideUp' : 'slideDown';
      }    
    }
  }
});
