'use strict';

var mxPostApi = {
  applicationId: 'K6fafnegdVE32PXOMrOELlS70ZHxLqcHiQTA8Tq6',
  restApiKey: 'g15AcAKamIKsgxE4nqtA2KlSMc5Tk8rdkq0l1ZYl'
};

var kiwiWebApi = {
  applicationId: 'FH9ImcjJr5PWoumZrDbbahRTqSLtgoP3FHmrOIpZ',
  restApiKey: 's8B22ec8itvsi8O0AVmVhM0isGr4p5pbjlP3ZDJG'
};

kiwiWeb.factory('Auth', [ function () {
  return {
    mxPostApi: {
      headers: {
        'Content-Type': 'application/json',
        'X-Parse-Application-Id' : mxPostApi.applicationId,
        'X-Parse-REST-API-Key' : mxPostApi.restApiKey
      }
    },
    kiwiWebApi: {
      headers: {
        'Content-Type': 'application/json',
        'X-Parse-Application-Id' : kiwiWebApi.applicationId,
        'X-Parse-REST-API-Key' : kiwiWebApi.restApiKey
      }
    }
  };
}]);
