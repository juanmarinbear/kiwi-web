'use strict';

kiwiWeb.factory('Transition', ['Routes', function (Routes) {

  return {
    getTransition: function (toState, toParams, fromState, fromParams) {

      var fromStateName, toStateName;

      if(toParams === fromParams) {
        console.log('Useless JSLint!');
      }

      if(fromState.name === '') {
        return;
      }

      fromStateName = fromState.name.split('.')[0];
      toStateName = toState.name.split('.')[0];

      if(Routes[fromStateName].parent === 'form') {
        return 'rotateCubeDown';
      }

      if(Routes[toStateName].parent === 'form') {
        return 'rotateCubeUp';
      }

      if(Routes[fromStateName].parent === Routes[toStateName].parent) {
        return Routes[toStateName].yOrder > Routes[fromStateName].yOrder ? 'slideUp' : 'slideDown';
      } else {
        return Routes[toStateName].xOrder > Routes[fromStateName].xOrder ? 'slideLeft' : 'slideRight';
      }
    }
  };
}]);
