'use strict';

angular.module('newMj')
.controller('TrailerModalCtrl', function ($scope, $modalInstance, mjBackend, tMDb, movie) {
	$scope.movie = movie;
	$scope.tMDb = tMDb;
    if (!movie.tmdb.trailers.length) {
        $scope.noTrailer = true;
    } else {
    	$scope.trailerSource = 'https://www.youtube.com/embed/' +
    	movie.tmdb.trailers[0].key;
    	$scope.cancel = function() {
    		$modalInstance.dismiss('cancel');
    	};
    }
});
