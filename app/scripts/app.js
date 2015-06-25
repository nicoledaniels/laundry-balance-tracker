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
    'ngTouch',
    'angular-ladda',
    'LocalStorageModule'
  ])
  .config(['localStorageServiceProvider',function(localStorageServiceProvider) {
    localStorageServiceProvider.setPrefix('ls');  
  }])
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
      .when('/refill', {
        templateUrl: 'views/refill.html',
        controller: 'RefillCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
