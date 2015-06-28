'use strict';

/**
 * @ngdoc function
 * @name laundrytrackerApp.controller:RefillCtrl
 * @description
 * # RefillCtrl
 * Controller of the laundrytrackerApp
 */
angular.module('laundrytrackerApp')
  .controller('RefillCtrl', function ($scope, $timeout, localStorageService, $location) {
    var laundryBalance = localStorageService.get('balance');
    $scope.balance = laundryBalance || 0;
     
    $scope.addCash = function() {
    	$scope.loading = true;
    	$timeout(function () {
    		$scope.loading = false; // stop loading
    		$scope.balance += $scope.depositAmount;
    		$location.path('#/');
    	}, 500);
    };

    $scope.$watch('balance', function () {
    	localStorageService.set('balance',$scope.balance);
    }, true);
  });
