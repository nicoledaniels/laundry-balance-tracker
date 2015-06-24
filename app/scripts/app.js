'use strict';

/**
 * @ngdoc overview
 * @name laundrytrackerApp
 * @description
 * # laundrytrackerApp
 *
 * Main module of the application.
 */
angular
  .module('laundrytrackerApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/reports', {
        templateUrl: 'views/reports.html',
        controller: 'ReportsCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
