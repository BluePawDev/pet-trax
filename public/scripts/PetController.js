// START PetController
myApp.controller('PetController', function(PetService, RegLoginService, $location) {

	var vm = this;

	vm.petEdit = true;
	// userEmail = RegLoginService.userEmail;
	vm.userEmail = 'jaruby@me.com';

	// START getPets
	vm.getPets = function(userEmail) {
		console.log('Send:', vm.userEmail);
		PetService.getPets('jaruby@me.com').then(function(petInfo) {
			vm.pets = petInfo;
		})
	}
	// END getPets

	// START addNewPet
	vm.newPet = function() {
		vm.petEdit = !vm.petEdit;
	}
	// END addNewPet

	vm.addPet = function() {
		console.log('in PetController addPet()');
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
		console.log('Send to PetService:', newPet);
		PetService.addNewPet(newPet);
		vm.newPet();
		vm.getPets();
	}
	// END addNewPet

	vm.editPet = function() {
		console.log('editPet clicked');
	}

}); // END PetController
