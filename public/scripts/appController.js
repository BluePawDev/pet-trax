// AngularJS
var myApp = angular.module('myApp', []);

// START myApp Controller
myApp.controller('appController', function() {
	var vm = this;

	// START registerUser obj
	vm.registerUser = function() {
		var newUser = {
			firstName = vm.txtFirstName,
			lastName = vm.txtLastName,
			email = vm.hypEmail,
			password = vm.txtPassword
		}

	}

}); // END myApp Controller
