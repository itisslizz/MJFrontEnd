'use strict';

angular.module('newMj')
  .controller('JournalCtrl', function ($scope, $stateParams, $rootScope, tMDb, mjBackend, $modal) {

      mjBackend.getUserWithId($stateParams.userId).success(function(data) {
  	  	$scope.owner = data;
  	  });
  	  mjBackend.getJournal($stateParams.userId).success(function(data) {
  	  	$scope.journal = data;
  	  });

      
      $scope.tMDb = tMDb;
      

      $scope.openDelete = function(movie) {
        var modalInstance = $modal.open({
          templateUrl: 'app/components/modals/delete/deleteModal.html',
          controller: 'DeleteModalCtrl',
          resolve: {
            movie: function () {
              return movie;
            },
            type: function () {
              return 'Journal';
            }
          }
        });

        modalInstance.result.then(function (deleted) {
          $scope.journal.results.splice($scope.journal.results.indexOf(movie), 1);
        });
      };

      $scope.openTrailer = function(movie) {
        var modalInstance = $modal.open({
          templateUrl: 'app/components/modals/trailer/trailerModal.html',
          controller: 'TrailerModalCtrl',
          resolve: {
            movie: function () {
              return movie;
            }
          }
        });
      };

  });
