'use strict';
angular.module('newMj')
	.factory('mjBackend', function($http) {
		var baseUrl = 'http://localhost:8000/',
		callback = 'callback=JSON_CALLBACK',
		mjBackend = {};

		/* Register */
		mjBackend.register = function(username, password, email) {
			var req = {
				method: 'POST',
				url: 'http://localhost:8000/register/',
			 	data: JSON.stringify({ u: username,
			 			p: password,
			 			e: email }),
			 	headers: {'Content-Type': 'application/json'}
			};
			return $http(req);
		};

		/* Login */
		mjBackend.login = function(username, password) {
			var req = {
				method: 'POST',
				url: 'http://localhost:8000/login/',
				data: JSON.stringify({ u: username,
						p: password
					}),
				headers: {'Content-Type': 'application/json; charset=utf-8'}
			};
			return $http(req);
		};

		/* User */
		mjBackend.getUser = function() {
			return $http.jsonp(baseUrl + 'user?' + callback);
		};
		mjBackend.getUserWithId = function(id) {
			return $http.jsonp(baseUrl + 'user/' + id + '/?' + callback);
		};
		mjBackend.searchUser = function(query) {
			return $http.jsonp(baseUrl + 'user/?query=' + query + '&' + callback);
		};


		/* Follow */
		mjBackend.startFollow = function(userId) {
			var req = {
				method: 'POST',
				url: baseUrl + 'follow/',
				data: JSON.stringify({user_id: userId}),
				headers: {'Content-Type': 'application/json'}
			};
			return $http(req);
		};

		mjBackend.stopFollow = function(followId) {
			var req = {
				method: 'DELETE',
				url: baseUrl + 'follow/' + followId
			};
			return $http(req);
		};

		/* Journal */
		mjBackend.getJournal = function(id) {
			return $http.jsonp(baseUrl + 'user/' + id + '/journal/?' + callback);
		};

		mjBackend.postScreening = function(movieId) {
			var req = {
	        method: 'POST',
	        url: baseUrl + 'screening/',
	        data: JSON.stringify({ movie_id: movieId}),
	        headers: {'Content-Type': 'application/json'}
	    };
  		return $http(req);
		};

		mjBackend.deleteScreening = function(screeningId) {
			var req = {
				method: 'DELETE',
				url : baseUrl + 'screening/' + screeningId + '/'
			};
			return $http(req);
		};

		/* Watchlist */
		mjBackend.getWatchlist = function(id) {
			return $http.jsonp(baseUrl + 'user/' + id + '/watchlist/?' + callback);
		}

		mjBackend.postWatchlist = function(movieId) {
			var req = {
				method: 'POST',
				url: baseUrl + 'watchlist_entry/',
				data: JSON.stringify({movie_id: movieId}),
				headers: {'Content-Type': 'application/json'}
			};
			return $http(req);
		}

		mjBackend.deleteWatchlist = function(watchlistId) {
			var req = {
				method: 'DELETE',
				url : baseUrl + 'watchlist_entry/' + watchlistId + '/'
			};
			return $http(req);
		}

		/* Movies */
		mjBackend.getMovie = function(movieId) {
			return $http.jsonp(baseUrl + 'movie/' + movieId + '/?' + callback);
		};

		return mjBackend;
	});
