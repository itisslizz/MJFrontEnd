'use strict';

angular.module('newMj')
	.controller('LoginCtrl', function($scope, $rootScope, $state, mjBackend) {
		$scope.title = 'Login';

		$scope.login = function() {
			mjBackend.login($scope.username, $scope.password)
			.success(function() {
				mjBackend.getUser().success(
					function(data) {
						$rootScope.user = data;
						$state.go('home');
					});		
			});
			
		};
	});