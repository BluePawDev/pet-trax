// START UserController
myApp.controller('UserController', function(RegLoginService, $location) {
	var vm = this;

	vm.userEmail = localStorage.getItem('email:');
	vm.userFirst = localStorage.getItem('first:');
	vm.userLast = localStorage.getItem('last:');

	vm.editUserHide = true;

	vm.editUser = function() {
		vm.editUserHide = !vm.editUserHide;
	}

	vm.editUserSave = function() {
		console.log('User edit save');
	}

	vm.editUserCancel = function() {
		console.log('User edit cancel');
	}

}); // END UserController
