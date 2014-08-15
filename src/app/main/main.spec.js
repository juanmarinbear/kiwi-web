'use strict';

describe('MainCtrl', function(){
  var scope, ctrl;

  beforeEach(module('kiwiWeb'));

  beforeEach(inject(function($controller) {
    scope = {};
    ctrl = $controller('MainCtrl', {$scope:scope});
  }));

  it('contains spec with expectation', function() {
    expect(true).toBe(true);
  });
});
