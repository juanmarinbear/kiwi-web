'use strict';

describe('AboutCtrl', function(){
  var scope, ctrl, _lang;

  beforeEach(module('kiwiWeb'));

  beforeEach(inject(function($controller) {
    scope = {};
    _lang = {
      'title' : 'About'
    };
    ctrl = $controller('AboutCtrl', {$scope:scope, lang:_lang});
  }));

  it('contains spec with expectation', function() {
    expect(true).toBe(true);
  });
});
