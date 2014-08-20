'use strict';

describe('FaqCtrl', function(){
  var scope, ctrl, _lang;

  beforeEach(module('kiwiWeb'));

  beforeEach(inject(function($controller) {
    scope = {};
    _lang = {
      'title' : 'Preguntas Frecuentes'
    };
    ctrl = $controller('FaqCtrl', {$scope:scope, lang:_lang});
  }));

  it('contains spec with expectation', function() {
    expect(true).toBe(true);
  });
});
