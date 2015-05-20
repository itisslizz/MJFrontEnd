'use strict';

angular.module('newMj')
	.controller('RegisterCtrl', function($scope, $rootScope, $state, mjBackend) {
		$scope.title = 'Register';

		$scope.register = function() {
			mjBackend.register($scope.username, $scope.password, $scope.email)
				.success(function() {
					$state.go('login');
			});
		};
	});