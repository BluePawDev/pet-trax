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
	console.log('1. In PetAppController.js');
	var vm = this;


	// START registerUser obj
	vm.registerUser = function() {
		console.log('2. In registerUser() in PetAppController.js');
		// START define newUser obj
		var newUser = {
			firstName: vm.txtFirstName,
			lastName: vm.txtLastName,
			email: vm.hypEmail,
			password: vm.txtPassword
		}; // END define newUser obj
		console.log('3. Obj to send to PetAppService.js:', newUser);
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
