// START UserController
myApp.controller('UserController', function($location) {
	var vm = this;

	vm.editPet = function() {
		console.log('editPet clicked');
	}

	vm.editVet = function() {
		console.log('editVet clicked');
	}

	vm.saveVet = function() {
		console.log('saveVet clicked');
	}

}); // END UserController
