'use strict';

describe('ResidentialCtrl', function(){
  var scope, ctrl, _lang;

  beforeEach(module('kiwiWeb'));

  beforeEach(inject(function($controller) {
    scope = {};
    _lang = {
      'title' : 'Residential'
    };
    ctrl = $controller('ResidentialCtrl', {$scope:scope, lang:_lang});
  }));

  it('contains spec with expectation', function() {
    expect(true).toBe(true);
  });
});
