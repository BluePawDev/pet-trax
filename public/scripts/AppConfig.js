// AngularJS
var myApp = angular.module('myApp', ['ngRoute']);


myApp.config(function($routeProvider) {
	$routeProvider.when('/', {
			templateUrl: 'views/partials/login.html',
			controller: 'RegLoginController as rlc'
		})
		.when('/register', {
			templateUrl: 'views/partials/register.html',
			controller: 'RegLoginController as rlc'
		})
		.when('/home', {
			templateUrl: 'views/partials/home.html'
		})
		.when('/pets', {
			templateUrl: 'views/partials/pets.html',
			controller: 'PetController as pc'
		})
		.when('/user', {
			templateUrl: 'views/partials/user.html',
			controller: 'UserController as uc'
		})
		.when('/vetdata', {
			templateUrl: 'views/partials/vetdata.html'
		})
		.otherwise({
			redirectTo: '/'
		});
});
