"use strict";
angular.module('newMj').run(function($rootScope, $modal, $state) {
  $rootScope.openTrailer = function(movie) {
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