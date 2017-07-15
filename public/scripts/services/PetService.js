// START PetService
myApp.service('PetService', function($http, $location) {

	var sv = this;

	// START getPets
	sv.getPets = function(userEmail) {
		console.log('sv.getPets(): ', userEmail);
		var email = {
			address: userEmail
		}
		return $http.post('/pets', email).then(function(response) {
			console.log(response);
			return response.data;
		})
	}
	// END getPets


	// START addNewPet
	sv.addNewPet = function(newPetInfo) {
		console.log(newPetInfo);
		return $http.post('/newPet', newPetInfo).then(function(response) {
			$route.reload();
		})
	}
	// END addNewPet


	// START editPet
	sv.editPet = function() {
		return $http.put('/pets').then(function(response) {
			console.log(response.data);
			return response.data;
		})
	}
	// END editPet


	// START addNewHistory
	sv.addNewHistory = function(newHistory) {
		console.log(newHistory);
		return $http.post('/newHistory', newHistory).then(function(response) {
			console.log(response.data);
			// if (response.data === 'Created') {
			//
			// }
			// $location.path('/home');
		})
	}
	// END addNewHistory


}); // END PetService
