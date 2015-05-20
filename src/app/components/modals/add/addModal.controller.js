'use strict';

angular.module('newMj')
.controller('AddModalCtrl', function ($scope, $modalInstance, $timeout, mjBackend, tMDb, movie) {
	$scope.movie = movie;
	$scope.tMDb = tMDb;
	$scope.addJournal = function() {
		$scope.process = true;
		mjBackend.postScreening(movie.tmdb.id)
		.success(function() {
			$scope.process = false;
			$scope.done = true;
			$timeout(function () {$modalInstance.close(true)} ,4000);
		});
	};

	$scope.cancel = function() {
		$modalInstance.dismiss('cancel');
	};
});