'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('trackingboardApp'));

  var MainCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
    });
  }));

    it('loads a list of recipes to the scope', function () {
       expect(scope.recipes).not.toBe(undefined);
       expect(scope.recipes).not.toBe(null);
       expect(scope.recipes.length).toBe(3);
  });


});
