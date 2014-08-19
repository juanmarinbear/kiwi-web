'use strict';

describe('SupportCtrl', function(){
  var scope, ctrl;

  beforeEach(module('kiwiWeb'));

  beforeEach(inject(function($controller) {
    scope = {};
    ctrl = $controller('SupportCtrl', {$scope:scope});
  }));

  it('contains spec with expectation', function() {
    expect(true).toBe(true);
  });
});
