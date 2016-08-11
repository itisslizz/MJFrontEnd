'use strict';

angular.module('newMj')
  .controller('WatchlistCtrl', function ($scope, $stateParams, $rootScope, tMDb, mjBackend, $modal) {

      mjBackend.getUserWithId($stateParams.userId).success(function(data) {
  	  	$scope.owner = data;
  	  });
  	  mjBackend.getWatchlist($stateParams.userId).success(function(data) {
  	  	$scope.watchlist = data;
  	  });

      $scope.openDeleteModal = function (movie) {
        var modalInstance = $rootScope.openDelete(movie, 'Watchlist');

        modalInstance.result.then(function (type) {
          if (type==='Watchlist')
            $scope.watchlist.results.splice(
              $scope.watchlist.results.indexOf(movie), 1);
        });
      };

      $scope.tMDb = tMDb;

  });
