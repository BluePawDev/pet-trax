// START PetController
myApp.controller('PetController', function(PetService, RegLoginService, $location, $route) {

	var vm = this;

	vm.userEmail = localStorage.getItem('email:');
	vm.userFirst = localStorage.getItem('first:');
	vm.userLast = localStorage.getItem('last:');
	var email = vm.userEmail;

	vm.petEdit = true;

	vm.reload = function() {
		$route.reload();
	}

	// START getPets
	vm.getPets = function(userEmail) {
		var email = userEmail[0];
		console.log('vm.getPets():', email);
		PetService.getPets(email).then(function(petInfo) {
			vm.pets = petInfo;
		})
	}
	// END getPets



	// START addPet with xeditable
	// vm.addPet = function() {
	// 	vm.petEdit = false;
	// 	var newPet = {
	// 		petName: vm.pet.name,
	// 		petType: vm.pet.type,
	// 		petBreed: vm.txtPetBreed,
	// 		petColor: vm.txtPetColor,
	// 		petMarking: vm.txtPetMarking,
	// 		petSex: vm.selPetSex,
	// 		petDOB: vm.dtmPetDOB,
	// 		petOwner: vm.userEmail
	// 	}
	// 	PetService.addNewPet(newPet);
	// 	vm.newPet();
	// 	vm.getPets();
	// }
	// END addPet with xeditable


	// START addNewPet
	vm.newPet = function() {
		vm.petEdit = !vm.petEdit;
	}
	// END addNewPet


	// START addPet
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
		vm.reload();
	}
	// // END addPet


	// START editPet
	vm.editPet = function() {
		console.log('editPet clicked');

	}
	// END editPet


	// vm.petTypes = [{
	// 		value: 1,
	// 		text: 'Bird'
	// 	},
	// 	{
	// 		value: 2,
	// 		text: 'Cat'
	// 	},
	// 	{
	// 		value: 3,
	// 		text: 'Dog'
	// 	},
	// 	{
	// 		value: 4,
	// 		text: 'Rabbit'
	// 	}
	// ];



}); // END PetController
