// START UserController
myApp.controller('UserController', function(RegLoginService, $location) {
	var vm = this;

	vm.userFirst = RegLoginService.userFirst;
	vm.userLast = RegLoginService.userLast;
	vm.userEmail = RegLoginService.userEmail;
	vm.editUserHide = true;

	vm.editUser = function() {
		vm.editUserHide = !vm.editUserHide;
		console.log(vm.editUserHide);
	}

	vm.editUserSave = function() {
		console.log('User edit save');
		vm.editUserHide = !vm.editUserHide;
	}

	vm.editUserCancel = function() {
		console.log('User edit cancel');
		vm.editUserHide = !vm.editUserHide;
	}

}); // END UserController
