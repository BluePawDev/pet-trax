// START NavController
myApp.controller('NavController', function(RegLoginService, $location) {
	var vm = this;



	vm.navHide = RegLoginService.navHide;
	console.log('NavController:', vm.navHide);

	vm.userFirst = RegLoginService.userFirst;
	vm.userLast = RegLoginService.userLast;
	vm.userEmail = RegLoginService.userEmail;
	console.log(vm.userFirst, vm.userLast, vm.userEmail);


	vm.editPet = function() {
		console.log('editPet clicked');
	}

	vm.editVet = function() {
		console.log('editVet clicked');
	}

	vm.saveVet = function() {
		console.log('saveVet clicked');
	}

}); // END NavController
