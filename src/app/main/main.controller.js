'use strict';

angular.module('newMj')
  .controller('MainCtrl', function ($scope, user) {
      $scope.user = user.data;
  });
