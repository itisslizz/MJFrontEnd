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
        var modalInstance = $rootScope.openDelete(movie);

        modalInstance.result.then(function (type) {
          if (type==='Journal')
            $scope.journal.results.splice(
              $scope.journal.results.indexOf(movie), 1);
        });
      };

      $scope.tMDb = tMDb;

  });
