'use strict';

/**
 * @ngdoc function
 * @name laundrytrackerApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the laundrytrackerApp
 */
angular.module('laundrytrackerApp')
  .controller('MainCtrl', function ($scope) {
    $scope.startingBalance = 17;
    $scope.loads = 0;
    $scope.addLoad = function() {
    	$scope.loads++;
    	console.log($scope.loads);
    };
    $scope.deleteLoad = function() {
    	if($scope.loads > 0){
    	$scope.loads--;
    	console.log($scope.loads);
    }
    };
  });
