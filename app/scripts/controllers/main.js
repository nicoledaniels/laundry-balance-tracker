'use strict';

/**
 * @ngdoc function
 * @name laundrytrackerApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the laundrytrackerApp
 */
angular.module('laundrytrackerApp')
  .controller('MainCtrl', function ($scope, $timeout) {
    $scope.startingBalance = 17;
    $scope.loads = 0;
    $scope.addLoad = function() {
    	$scope.loads++;
    };
    
    $scope.deleteLoad = function() {
    	if($scope.loads > 0){
    	$scope.loads--;
    	}
    };

    $scope.saveData = function() {
    	$scope.loading = true; // start loading
    	$timeout(function () {
    		$scope.loading = false; // stop loading
    		$scope.startingBalance -= $scope.loads * 1.50;
    		$scope.loads= 0;
    	}, 500);



	};
  });
