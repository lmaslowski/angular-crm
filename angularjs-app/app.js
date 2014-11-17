var app = angular
	.module('app', ['ngRoute', 'checklist-model'])
    .config(['$routeProvider', '$locationProvider' , function($routeProvider, $locationProvider) {
		$routeProvider
			.when('/home', {
				controller : 'homeCtrl',
				templateUrl : 'angularjs-app/templates/home.html'
			})
			.when('/role', {
				controller : 'roleCtrl',
				templateUrl : 'angularjs-app/templates/role.html'
			});

	}])
