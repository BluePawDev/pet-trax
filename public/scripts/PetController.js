// START PetController
myApp.controller('PetController', function(PetService, RegLoginService, $location, $route) {

	var vm = this;

	vm.userEmail = localStorage.getItem('email:');
	vm.userFirst = localStorage.getItem('first:');
	vm.userLast = localStorage.getItem('last:');
	var email = vm.userEmail;

	// vm.petEdit = true;

	// SHOWS
	vm.buttonAddNewPet = true;
	vm.formAddNewPet = false;
	vm.formPetHistory = false;
	vm.formPetCards = true;
	vm.formPetHistory = false;
	vm.formNewHealthHistory = false;
	vm.headerH3 = true;


	vm.reload = function() {
		$route.reload();
	}

	// START getPets
	vm.getPets = function(userEmail) {
		vm.buttonAddNewPet = true;
		vm.formAddNewPet = false;
		vm.formPetHistory = false;
		vm.formPetCards = true;
		vm.formPetHistory = false;
		var email = userEmail[0];
		PetService.getPets(email).then(function(petInfo) {
			vm.pets = petInfo;
		})
	}
	// END getPets


	// START getHealth
	vm.getHealth = function(petID) {
		vm.buttonAddNewPet = false;
		vm.formAddNewPet = false;
		vm.formPetHistory = true;
		vm.formPetCards = false;
		vm.headerH3 = !vm.headerH3;
		var id = petID[0];
		vm.showHideHistory();
		PetService.getHealth(id).then(function(healthInfo) {
			vm.health = healthInfo;
		})
	}
	// END getHealth


	// START addNewPet
	vm.newPet = function() {
		vm.buttonAddNewPet = false;
		vm.formAddNewPet = true;
		vm.formPetHistory = false;
		vm.formPetCards = false;
		vm.formPetHistory = false;
	}
	// END addNewPet

	vm.cancelNewPet = function() {
		vm.buttonAddNewPet = true;
		vm.formAddNewPet = false;
		vm.formPetHistory = false;
		vm.formPetCards = true;
		vm.formPetHistory = false;
	}

	// START show/hide petHistory
	vm.showHideHistory = function() {
		vm.petHistory = !vm.petHistory;
	}
	// END  show/hide petHistory


	// START addPet
	vm.addPet = function() {
		vm.buttonAddNewPet = true;
		vm.formAddNewPet = false;
		vm.formPetHistory = false;
		vm.formPetCards = true;
		vm.formPetHistory = false;
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
		vm.reload();
	}
	// // END addPet

	vm.historyDone = function() {
		vm.buttonAddNewPet = true;
		vm.formAddNewPet = false;
		vm.formPetHistory = false;
		vm.formPetCards = true;
		vm.formPetHistory = false;
		vm.headerH3 = !vm.headerH3;
	}

	vm.AddHealthHistory = function() {
		console.log('in AddHealthHistory()');
		vm.buttonAddNewPet = false;
		vm.formAddNewPet = false;
		vm.formPetHistory = false;
		vm.formPetCards = false;
		vm.formPetHistory = false;
		vm.formNewHealthHistory = true;

		vm.headerH3 = true;

	}


	// START editPet
	vm.editPet = function() {
		console.log('editPet clicked');

	}
	// END editPet




}); // END PetController
