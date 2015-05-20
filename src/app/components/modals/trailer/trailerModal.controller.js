'use strict';

angular.module('newMj')
.controller('TrailerModalCtrl', function ($scope, $modalInstance, mjBackend, tMDb, movie) {
	$scope.movie = movie;
	$scope.tMDb = tMDb;
	$scope.trailerSource = 'https://www.youtube.com/embed/' + 
	movie.tmdb.trailers.youtube[0].source;
	$scope.cancel = function() {
		$modalInstance.dismiss('cancel');
	};
});