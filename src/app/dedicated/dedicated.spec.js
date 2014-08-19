'use strict';

describe('DedicatedCtrl', function(){
  var scope, ctrl, _lang;

  beforeEach(module('kiwiWeb'));

  beforeEach(inject(function($controller) {
    scope = {};
    _lang = {
      'title' : 'Dedicated'
    };
    ctrl = $controller('DedicatedCtrl', {$scope:scope, lang:_lang});
  }));

  it('contains spec with expectation', function() {
    expect(true).toBe(true);
  });
});
