"use strict";
angular.module('newMj').run(function($rootScope, $modal) {
  $rootScope.openAdd = function(movie) {
    $modal.open({
      templateUrl: 'app/components/modals/add/addModal.html',
      controller: 'AddModalCtrl',
      resolve: {
        movie: function () {
          return movie;
        }
      }
    });
  };
});