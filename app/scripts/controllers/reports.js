'use strict';

/**
 * @ngdoc function
 * @name laundrytrackerApp.controller:ReportsCtrl
 * @description
 * # ReportsCtrl
 * Controller of the laundrytrackerApp
 */
angular.module('laundrytrackerApp')
  .controller('ReportsCtrl', function ($scope, $firebaseArray, ngTableParams) {
    var ref = new Firebase("https://laundrytracker.firebaseio.com/");
    $scope.laundryData= $firebaseArray(ref);
    //console.log($scope.laundryData.length);

    $scope.laundryData.$loaded().then(function(laundryData) {
   		console.log(laundryData.length); // data is loaded here
   		$scope.arrayLength = laundryData.length;
	});

    $scope.tableParams = new ngTableParams({
        page: 1,            // show first page
        count: 10           // count per page
    }, {
        total: $scope.arrayLength, // length of data
        getData: function ($defer, params) {
            $defer.resolve($scope.laundryData.slice((params.page() - 1) * params.count(), params.page() * params.count()));
        }
    })
  });
