'use strict';
angular.module('newMj')
	.factory('tMDb', function($http) {
		var apiKey = '73c900d5c9037586315c91391abb0d93',
			imgBaseUrl = 'http://image.tmdb.org/t/p/',
			baseUrl = 'http://api.themoviedb.org/3/';
		return {
			imageUrl : function(url, quality) {
				return imgBaseUrl + quality + url;
			},
			searchMovie : function(query) {
				return $http.jsonp(baseUrl + 'search/movie?api_key=' + 
					apiKey + '&query=' + query + 
					'&search_type=ngram&callback=JSON_CALLBACK');
			},
			searchPerson : function(query) {
				return $http.jsonp(baseUrl + 'search/person?api_key=' + 
					apiKey + '&query=' + query + 
					'&search_type=ngram&callback=JSON_CALLBACK');
			}
		};
	});