// AngularJS
// var myApp = angular.module('myApp', ['ngRoute']);
//
//
// myApp.config(function($routeProvider) {
// 	$routeProvider.when('/', {
// 		templateUrl: 'views/partials/login.html',
// 		controller: 'RegLoginController as rlc'
// 	}).when('/register', {
// 		templateUrl: 'views/partials/register.html',
// 		controller: 'RegLoginController as rlc'
// 	}).when('/home', {
// 		templateUrl: 'views/partials/home.html'
// 	}).when('/petdata', {
// 		templateUrl: 'views/partials/petdata.html',
// 		controller: 'PetController as pc'
// 	}).when('/user', {
// 		templateUrl: 'views/partials/user.html',
// 		controller: 'UserController as uc'
// 	}).when('/vetdata', {
// 		templateUrl: 'views/partials/vetdata.html'
// 	}).otherwise({
// 		redirectTo: '/'
// 	});
// });

// START RegLoginController
myApp.controller('RegLoginController', function(RegLoginService, $location) {
	var vm = this;

	// START registerUser
	vm.registerUser = function() {
		console.log('reg user clicked');
		// START define newUser obj
		var newUser = {
			firstName: vm.txtFirstName,
			lastName: vm.txtLastName,
			email: vm.hypEmail,
			password: vm.txtPassword
		}; // END define newUser obj
		console.log(newUser);
		RegLoginService.sendRegister(newUser).then(function() {
			// CLEAR INPUTS
			// vm.txtFirstName = '';...
		});
	}; // END registerUser obj

	// START logIn user
	vm.logIn = function() {
		// START define logIn user obj
		var logInUser = {
			username: vm.hypEmail,
			password: vm.txtPassword
		}; // END define logIn user obj
		RegLoginService.logIn(logInUser).then(function(res) {
			// vm.userFirst = res.first;
			// vm.userLast = res.last;
			// vm.userEmail = res.email;
			// ADD CLEAR INPUTS ON SUCCESS
		});
	};

}); // END RegLoginController
