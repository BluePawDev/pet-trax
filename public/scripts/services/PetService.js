myApp.service('PetService', function($http, $location) {
	var sv = this;

	sv.addNewPet = function(newPetInfo) {
		return $http.post('/newPet', newPetInfo).then(function(response) {})
	}

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

	sv.getPets = function(user) {
		console.log('in PetService getPets() with', user);
		return $http.get('/pets').then(function(response) {
			console.log('res:', response);
		})
	}

}); // END PetService
