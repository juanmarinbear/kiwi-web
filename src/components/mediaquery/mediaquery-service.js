kiwiWeb.factory('MediaQuery', ['$window', function ($window) {
  return {
    screenSize: function() {
      if($window.matchMedia('(max-width: 35.5em)').matches) {
        return 'sm';
      }

      if($window.matchMedia('(max-width: 48em)').matches) {
        return 'md';
      }

      if($window.matchMedia('(max-width: 64em)').matches) {
        return 'lg';
      }

      return 'xl';
    }
  };
}]);
