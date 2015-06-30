'use strict';

/**
 * @ngdoc function
 * @name laundrytrackerApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the laundrytrackerApp
 */
angular.module('laundrytrackerApp')
  .controller('MainCtrl', function ($scope, $timeout, localStorageService, $firebaseArray) {
    
    //localStorageService.clearAll();
    var ref = new Firebase("https://laundrytracker.firebaseio.com/");
    $scope.laundryData= $firebaseArray(ref);

    ref.on("child_added", function(snapshot) {
  		var newLaundry = snapshot.val();
  		$scope.balance = newLaundry.balance;
	});
    
    $scope.loads = 0;
    
    $scope.addLoad = function() {
    	$scope.loads++;
    };

    $scope.$watch('balance', function () {
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
    		$scope.expense = $scope.loads * 1.50;
    		$scope.balance -= $scope.expense;
    		$scope.laundryData.$add({ user: $scope.user, balance: $scope.balance, date: moment().format('MMMM Do YYYY, h:mm:ss a'), loads: $scope.loads, cost: $scope.expense});
    		$scope.loads= 0;
    	}, 500);
	};

	$scope.storeUser = function(currUser) {
		$scope.user = currUser;
		console.log($scope.user);
	};


  });
