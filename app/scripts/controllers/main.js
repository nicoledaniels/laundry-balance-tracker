'use strict';

/**
 * @ngdoc function
 * @name laundrytrackerApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the laundrytrackerApp
 */
angular.module('laundrytrackerApp')
  .controller('MainCtrl', function ($scope, $timeout, localStorageService) {
    
    localStorageService.clearAll();

  	var laundryBalance = localStorageService.get('balance');

    $scope.balance = laundryBalance || 17;
    
    $scope.loads = 0;
    $scope.addLoad = function() {
    	$scope.loads++;
    };

    $scope.$watch('balance', function () {
    	localStorageService.set('balance',$scope.balance);
    	if ($scope.balance <= 5){
    			$scope.lowFunds = true;
    			if ($scope.balance <= 0) {
    			$scope.balance = 0;
    	}
    	}
    }, true);
    
    $scope.deleteLoad = function() {
    	if($scope.loads > 0){
    	$scope.loads--;
    	}
    };

    $scope.saveData = function() {
    	$scope.loading = true; // start loading
    	$timeout(function () {
    		$scope.loading = false; // stop loading
    		$scope.balance -= $scope.loads * 1.50;
    		$scope.loads= 0;
    	}, 500);
	};


  });
