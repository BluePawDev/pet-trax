// START PetController
myApp.controller('PetController', function(PetService, RegLoginService, $location) {

	var vm = this;

	vm.petEdit = true;
	// userEmail = RegLoginService.userEmail;
	vm.userEmail = 'jaruby@me.com';

	// START getPets
	vm.getPets = function(userEmail) {
		console.log('in PetController getPets()');
		console.log('Send:', vm.userEmail);
		PetService.getPets('jaruby@me.com').then(function() {
			console.log('back from PetService');
		})
	}
	// END getPets

	// START addNewPet
	vm.newPet = function() {
		vm.petEdit = !vm.petEdit;
	}
	// END addNewPet

	vm.addPet = function() {
		vm.petEdit = false;
		var newPet = {
			petName: vm.txtPetName,
			petType: vm.selPetType,
			petBreed: vm.txtPetBreed,
			petColor: vm.txtPetColor,
			petMarking: vm.txtPetMarking,
			petSex: vm.selPetSex,
			petDOB: vm.dtmPetDOB,
			petOwner: vm.userEmail
		}
		PetService.addNewPet(newPet);
	}
	// END addNewPet

	vm.editPet = function() {
		console.log('editPet clicked');
	}

}); // END PetController
