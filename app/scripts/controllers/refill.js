'use strict';

/**
 * @ngdoc function
 * @name laundrytrackerApp.controller:RefillCtrl
 * @description
 * # RefillCtrl
 * Controller of the laundrytrackerApp
 */
angular.module('laundrytrackerApp')
  .controller('RefillCtrl', function ($scope, localStorageService, $location) {
    var laundryBalance = localStorageService.get('balance');
    $scope.balance = laundryBalance || 0;
     
    $scope.addCash = function() {
    	$scope.balance += $scope.depositAmount;
    	$location.path('#/');
		};

    $scope.$watch('balance', function () {
    	localStorageService.set('balance',$scope.balance);
    }, true);
  });
