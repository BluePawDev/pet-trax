// AngularJS
var myApp = angular.module('myApp', ['ngRoute']);


myApp.config(function($routeProvider) {
	$routeProvider.when('/', {
		templateUrl: 'views/partials/login.html'
	}).when('/register', {
		templateUrl: 'views/partials/register.html'
	});
});


// START myApp Controller
myApp.controller('PetAppController', function(PetAppService) {
	var vm = this;


	// START registerUser
	vm.registerUser = function() {
		// START define newUser obj
		var newUser = {
			firstName: vm.txtFirstName,
			lastName: vm.txtLastName,
			email: vm.hypEmail,
			password: vm.txtPassword
		}; // END define newUser obj
		PetAppService.sendRegister(newUser).then(function() {
			// Clear inputs
			// vm.txtFirstName = '';
			// vm.txtLastName = '';
			// vm.hypEmail = '';
			// vm.txtPassword = '';
		});
	}; // END registerUser obj

	// START logIn user
	vm.logIn = function() {
		// START define logIn user obj
		var logInUser = {
			username: vm.hypEmail,
			password: vm.txtPassword
		}; // END define logIn user obj
		console.log(logInUser);
		PetAppService.logIn(logInUser).then(function() {
			// Clear inputs
		});
	};


}); // END myApp Controller
