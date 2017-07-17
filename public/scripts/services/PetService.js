// START PetService
myApp.service('PetService', function($http, $location) {

	var sv = this;

	// START getPets
	sv.getPets = function(userEmail) {
		var email = {
			address: userEmail
		}
		return $http.post('/pets', email).then(function(response) {
			return response.data;
		})
	}
	// END getPets


	// START addNewPet
	sv.addNewPet = function(newPetInfo) {
		return $http.post('/newPet', newPetInfo).then(function(response) {
			$route.reload();
		})
	}
	// END addNewPet


	// START editPet
	sv.editPet = function() {
		return $http.put('/pets').then(function(response) {
			return response.data;
		})
	}
	// END editPet

	// START getHealth
	sv.getHealth = function(petID) {
		var id = {
			id: petID
		}
		return $http.post('/history', id).then(function(response) {
			return response.data;
		})
	}
	// END getHealth


}); // END PetService
