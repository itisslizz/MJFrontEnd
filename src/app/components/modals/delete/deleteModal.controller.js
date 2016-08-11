'use strict';

angular.module('newMj')
.controller('DeleteModalCtrl', function ($scope, $modalInstance, $timeout, mjBackend, tMDb, movie, type) {
	$scope.movie = movie;
	$scope.type = type;
	$scope.tMDb = tMDb;
	$scope.delete = function() {
		$scope.process = true;
		if (type === "Journal") {
			mjBackend.deleteScreening(movie.info.pk)
			.success(function() {
				$scope.process = false;
				$scope.done = true;
				$modalInstance.close(type);
			});
		} else if (type === "Watchlist") {
			mjBackend.deleteWatchlist(movie.info.pk)
			.success(function() {
				$scope.process = false;
				$scope.done = true;
				$modalInstance.close(type);
			});
		}
	};

	$scope.cancel = function() {
		$modalInstance.dismiss('cancel');
	};
});
