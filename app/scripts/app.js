'use strict';

/**
 * @ngdoc overview
 * @name trackingboardApp
 * @description
 * # trackingboardApp
 *
 * Main module of the application.
 */
angular
  .module('trackingboardApp', [
    'ngResource',
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
