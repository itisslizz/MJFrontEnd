'use strict';

angular.module('newMj')
  .controller('MovieCtrl', ['$scope', '$http', '$stateParams', '$modal', 'mjBackend', 'tMDb', 
    function ($scope, $http, $stateParams, $modal, mjBackend, tMDb) {
    $scope.tMDb = tMDb;
    mjBackend.getMovie($stateParams.movieId).success(
      function(data) {
        $scope.movie = data;
      });


    $scope.addMovie = function(movie) {
          var modalInstance = $modal.open({
          templateUrl: 'app/components/modals/add/addModal.html',
          controller: 'AddModalCtrl',
          resolve: {
            movie: function () {
              return movie;
            }
          }
        });

        modalInstance.result.then(function (deleted) {
            console.log("Added");  
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
}]);