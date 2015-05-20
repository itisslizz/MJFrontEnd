'use strict';

angular.module('newMj')
.controller('DeleteModalCtrl', function ($scope, $modalInstance, $timeout, mjBackend, tMDb, movie, type) {
	$scope.movie = movie;
	$scope.type = type;
	$scope.tMDb = tMDb;
	$scope.delete = function() {
		$scope.process = true;
		mjBackend.deleteScreening(movie.info.pk)
		.success(function() {
			$scope.process = false;
			$scope.done = true;
			$modalInstance.close(true);
		});
	};

	$scope.cancel = function() {
		$modalInstance.dismiss('cancel');
	};
});