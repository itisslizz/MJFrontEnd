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

      $scope.$watch("watchlist.results", function(newWatchlist, oldWatchlist) {
        for (var i = 0; i < newWatchlist.length; i++) {
          if ($scope.watchlist.results[i].tmdb) {
            $scope.watchlist.results[i].poster_url = tMDb.imageUrl(
              $scope.watchlist.results[i].tmdb.poster_path,'w500');
          }
        }
      });

      $scope.tMDb = tMDb;

  });
