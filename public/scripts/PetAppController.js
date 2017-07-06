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
	console.log('In PetAppController');
	var vm = this;


	// START registerUser obj
	vm.registerUser = function() {
		console.log('In registerUser');
		// START define newUser obj
		var newUser = {
			firstName: vm.txtFirstName,
			lastName: vm.txtLastName,
			email: vm.hypEmail,
			password: vm.txtPassword
		}; // END define newUser obj
		console.log(newUser);
		PetAppService.sendRegister(newUser).then(function() {
			console.log('newUser obj sent from controller to service');
			// Clear inputs
			// vm.txtFirstName = '';
			// vm.txtLastName = '';
			// vm.hypEmail = '';
			// vm.txtPassword = '';
		});
	}; // END registerUser obj


}); // END myApp Controller
