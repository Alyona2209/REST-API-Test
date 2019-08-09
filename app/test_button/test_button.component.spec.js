'use strict';

describe('myApp.test_button module', function() {

  beforeEach(module('myApp.test_button'));

  describe('test_button controller', function(){

    it('should ....', inject(function($controller) {
      //spec body
      var view1Ctrl = $controller('View1Ctrl');
      expect(view1Ctrl).toBeDefined();
    }));

  });
});