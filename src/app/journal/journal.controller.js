'use strict';

angular.module('newMj')
  .controller('JournalCtrl', function ($scope, $stateParams, $rootScope, tMDb, mjBackend, $modal) {

      mjBackend.getUserWithId($stateParams.userId).success(function(data) {
  	  	$scope.owner = data;
  	  });
  	  mjBackend.getJournal($stateParams.userId).success(function(data) {
  	  	$scope.journal = data;
  	  });

      $scope.openDeleteModal = function (movie) {
        var modalInstance = $rootScope.openDelete(movie, 'Journal');

        modalInstance.result.then(function (type) {
          if (type==='Journal')
            $scope.journal.results.splice(
              $scope.journal.results.indexOf(movie), 1);
        });
      };

      $scope.$watch("journal.results", function(newjournal, oldjournal) {
        for (var i = 0; i < newjournal.length; i++) {
          if ($scope.journal.results[i].tmdb) {
            $scope.journal.results[i].poster_url = tMDb.imageUrl(
              $scope.journal.results[i].tmdb.poster_path,'w500');
          }
        }
      });

      $scope.tMDb = tMDb;

  });
