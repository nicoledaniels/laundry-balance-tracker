'use strict';

/**
 * @ngdoc function
 * @name laundrytrackerApp.controller:RefillCtrl
 * @description
 * # RefillCtrl
 * Controller of the laundrytrackerApp
 */
angular.module('laundrytrackerApp')
  .controller('RefillCtrl', function ($scope, $timeout, localStorageService, $location, $firebaseArray) {
    
    var ref = new Firebase("https://laundrytracker.firebaseio.com/");
    $scope.laundryData= $firebaseArray(ref);

	var laundryBalance = localStorageService.get('balance');
    $scope.balance = laundryBalance || 0;
     
    $scope.addCash = function() {
    	$scope.loading = true;
    	$timeout(function () {
    		$scope.loading = false; // stop loading
    		$scope.balance += $scope.depositAmount;
    		$scope.laundryData.$add({ user: $scope.user, balance: $scope.balance, date: moment().format('MMMM Do YYYY, h:mm:ss a'), refill: $scope.depositAmount });
    		$location.path('#/');
    	}, 500);
    };

    $scope.storeUser = function(currUser) {
		$scope.user = currUser;
		console.log($scope.user);
	};

    $scope.$watch('balance', function () {
    	localStorageService.set('balance',$scope.balance);
    	$scope.laundryData.$add({balance: $scope.balance});
    }, true);
  });
