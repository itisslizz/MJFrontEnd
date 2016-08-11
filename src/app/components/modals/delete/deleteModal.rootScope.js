"use strict";
angular.module('newMj').run(function($rootScope, $modal, $state) {
  $rootScope.openDelete = function(movie, type) {
    var modalInstance = $modal.open({
      templateUrl: 'app/components/modals/delete/deleteModal.html',
      controller: 'DeleteModalCtrl',
      resolve: {
        movie: function () {
          return movie;
        },
        type: function () {
          return type;
        }
      }
    });

    return modalInstance;
  };
});
