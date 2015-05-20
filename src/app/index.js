'use strict';

angular.module('newMj', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ui.router', 'mm.foundation'])
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl',
        resolve: {
        	user : function($http){
            	return $http.jsonp('http://localhost:8000/user?callback=JSON_CALLBACK');
         	}
     	}
      })

      .state('register', {
        url: '/register',
        templateUrl: 'app/register/register.html',
        controller: 'RegisterCtrl'
      })

      .state('login', {
      	url: '/login',
      	templateUrl: 'app/login/login.html',
      	controller: 'LoginCtrl'
      })


      .state('movie', {
        url: '/movie/:movieId',
        templateUrl: 'app/movie/movie.html',
        controller: 'MovieCtrl'
      })


      .state('journal', {
      	url: '/user/:userId/journal',
      	templateUrl: 'app/journal/journal.html',
      	controller: 'JournalCtrl'
      });

    $urlRouterProvider.otherwise('/');

    
  })
;

angular.module('newMj').run(function($rootScope, $state, mjBackend) {
  if($state.current.name !== 'login' && $state.current.name !== 'register'){
    mjBackend.getUser()
    .success(function(data) {
      $rootScope.user = data;
    })
    .error(function() {
      $state.go('login');
    });
  }
});

angular.module('newMj')
.provider('myCSRF',[function(){
  var headerName = 'X-CSRFToken';
  var cookieName = 'csrftoken';
  var allowedMethods = ['GET'];

  this.setHeaderName = function(n) {
    headerName = n;
  };
  this.setCookieName = function(n) {
    cookieName = n;
  };
  this.setAllowedMethods = function(n) {
    allowedMethods = n;
  };
  this.$get = ['$cookies', function($cookies){
    return {
      'request': function(config) {
        if(allowedMethods.indexOf(config.method) === -1) {
          // do something on success
          config.headers[headerName] = $cookies[cookieName];
        }
        return config;
      }
    };
  }];
}])

.config(['$httpProvider', function($httpProvider) {
	$httpProvider.defaults.withCredentials = true;
  $httpProvider.defaults.cache = true;
}])

.config(['$sceDelegateProvider', function($sceDelegateProvider) {
  $sceDelegateProvider.resourceUrlWhitelist([
  'self',
  'https://www.youtube.com/**']);
}]);
