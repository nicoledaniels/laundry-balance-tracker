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
	});
  });
