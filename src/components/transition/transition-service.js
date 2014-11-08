'use strict';

kiwiWeb.factory('Transition', ['Routes', function (Routes) {

  return {
    getTransition: function (fromState, toState) {

      if(fromState === '') {
        return; 
      }

      var fromStateName, toStateName;

      fromStateName = fromState.split('.')[0];
      toStateName = toState.split('.')[0];

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
