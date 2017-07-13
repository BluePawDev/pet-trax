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
	}; // END registerUser

	// START logIn user
	vm.logIn = function() {
		// START define logIn user obj
		var logInUser = {
			username: vm.hypEmail,
			password: vm.txtPassword
		}; // END define logIn user obj
		RegLoginService.logIn(logInUser).then(function(res) {
			console.log(res);
			vm.userFirst = res.first;
			vm.userLast = res.last;
			vm.userEmail = res.email;
			// ADD CLEAR INPUTS ON SUCCESS
			vm.setLogin();
		});
	};

	var currentUserSignedIn = false;

	vm.setLogin = function login() {
		console.log('41', currentUserSignedIn);
		var onSuccessCallback = function(userData) {
			console.log('in ctrl', RegLoginService.userCreds);
			currentUserSignedIn = true;
			console.log('45', currentUserSignedIn);


		}
	}

}); // END RegLoginController
