'use strict';

describe('CompanyCtrl', function(){
  var scope, ctrl;

  beforeEach(module('kiwiWeb'));

  beforeEach(inject(function($controller) {
    scope = {};
    ctrl = $controller('CompanyCtrl', {$scope:scope});
  }));

  it('contains spec with expectation', function() {
    expect(true).toBe(true);
  });
});
