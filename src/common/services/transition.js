'use strict';

kiwiWeb.factory('Transition', function(Routes) {

  return {
    getTransition: function(toState, toParams, fromState, fromParams) {

      if(toParams === fromParams) {
        console.log('Useless JSLint!');
      }

      if(fromState.name === '') {
        return;
      }

      if(Routes[fromState.name].parent === 'form') {
        return 'rotateCubeDown';
      }

      if(Routes[toState.name].parent === 'form') {
        return 'rotateCubeUp';
      }

      if(Routes[fromState.name].parent === Routes[toState.name].parent) {
        return Routes[toState.name].yOrder > Routes[fromState.name].yOrder ? 'slideUp' : 'slideDown';
      } else {
        return Routes[toState.name].xOrder > Routes[fromState.name].xOrder ? 'slideLeft' : 'slideRight';
      }
    }
  };
});
