'use strict';

describe('LandingCtrl', function(){
  var scope, ctrl;

  beforeEach(module('kiwiWeb'));

  beforeEach(inject(function($controller) {
    scope = {};
    ctrl = $controller('LandingCtrl', {$scope:scope});
  }));

  it('contains spec with expectation', function() {
    expect(true).toBe(true);
  });
});
