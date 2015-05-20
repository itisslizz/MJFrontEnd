'use strict';

angular.module('newMj')
  .controller('NavbarCtrl', ['$scope', '$http', '$timeout', 'tMDb', 'mjBackend', 
  	function ($scope, $http, $timeout, tMDb, mjBackend) {
		$scope.query = '';

		$scope.searchFor = function() {
	        if ($scope.lastTimeout !== null) {
	            $timeout.cancel($scope.lastTimeout);
	        }
	        $scope.lastTimeout = $timeout($scope.search, 500);
	    };

    	$scope.search = function() {
    		if ($scope.query !== '') {
	    		tMDb.searchMovie($scope.query)
	    		.success(function(data) {
	    			$scope.movieResults = data.results;
		    	});
		        tMDb.searchPerson($scope.query)
		        .success(function(data) {
		        	$scope.starResults = data.results;
		        });
		        mjBackend.searchUser($scope.query)
		        .success(function(data) {
		        	$scope.userResults = data;
		        });
		        $('.dropdown').css({'clip':'auto'});
		    } else {
		    	$scope.movieResults = [];
		    	$scope.starResults = [];
		    	$scope.userReulst = [];
		    }
	    };
  }]);
