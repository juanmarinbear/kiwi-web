'use strict';

describe('BusinessCtrl', function(){
  var scope, ctrl, _lang;

  beforeEach(module('kiwiWeb'));

  beforeEach(inject(function($controller) {
    scope = {};
    _lang = {
      'title' : 'Business'
    };
    ctrl = $controller('BusinessCtrl', {$scope:scope, lang:_lang});
  }));

  it('contains spec with expectation', function() {
    expect(true).toBe(true);
  });
});
