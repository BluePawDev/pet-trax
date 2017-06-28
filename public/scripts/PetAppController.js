// AngularJS
var myApp = angular.module('myApp', []);

// START myApp Controller
myApp.controller('PetAppController', function(PetAppService) {
	console.log('In PetAppController');
	var vm = this;

	vm.logInHide = true;

	vm.logInFormHide = function() {
		vm.logInHide = !vm.logInHide;
	};

	// START registerUser obj
	vm.registerUser = function() {
		console.log('In registerUser');
		// assemble newUser object
		var newUser = {
			firstName: vm.txtFirstName,
			lastName: vm.txtLastName,
			email: vm.hypEmail,
			password: vm.txtPassword
		};
		PetAppService.sendRegister(newUser).then(function() {
			console.log('newUser sent to service');
			// Clear inputs
			// vm.txtFirstName = '';
			// vm.txtLastName = '';
			// vm.hypEmail = '';
			// vm.txtPassword = '';
		});
	};

	vm.getUser = function() {
		console.log('In PetAppController, getUser()');
		PetAppService.getUser();
	};

}); // END myApp Controller
