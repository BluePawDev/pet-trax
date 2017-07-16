// START RegLoginController
myApp.controller('RegLoginController', function(RegLoginService, $location, $route) {
	var vm = this;

	vm.reload = function() {
		$route.reload();
	}

	vm.locStorageEval = function() {
		if (localStorage.getItem('email:') == undefined) {}
	}

	// START registerUser
	vm.registerUser = function() {
		// START define newUser obj
		var newUser = {
			firstName: vm.txtFirstName,
			lastName: vm.txtLastName,
			email: vm.hypEmail,
			password: vm.txtPassword
		}; // END define newUser obj
		RegLoginService.sendRegister(newUser).then(function() {
			// CLEAR INPUTS
			// vm.txtFirstName = '';...
		});
	}; // END registerUser

	// START logIn
	vm.logIn = function() {
		// START define logIn user obj
		var logInUser = {
			username: vm.hypEmail,
			password: vm.txtPassword
		}; // END define logIn user obj
		vm.userEmail = '';
		RegLoginService.logIn(logInUser).then(function(res) {
			vm.userFirst = res.first;
			vm.userLast = res.last;
			vm.userEmail = res.email;
			// ADD CLEAR INPUTS ON SUCCESS
			vm.setLocStorage();
			vm.getLocStorage();
			vm.locStorageEval();

			vm.reload();
		});
	};
	// END logIn

	// START setLocStorage
	vm.setLocStorage = function() {
		localStorage.setItem('email:', vm.userEmail);
		localStorage.setItem('first:', vm.userFirst);
		localStorage.setItem('last:', vm.userLast);
		vm.userEmail = '';
		vm.userFirst = '';
		vm.userLast = '';
		vm.reload();
	}
	// END setLocStorage

	// START getLocStorage
	vm.getLocStorage = function() {
		var tempUserEmail = localStorage.getItem('email:');
		var tempUserFirst = localStorage.getItem('first:');
		var tempUserLast = localStorage.getItem('last:');
		vm.reload();
	}
	// END getLocStorage


}); // END RegLoginController
