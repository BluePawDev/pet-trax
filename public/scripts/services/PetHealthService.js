// START PetHealthService
myApp.service('PetHealthService', function($http, $location) {

	var sv = this;

	// START getHealth
	sv.getHealth = function(petID) {
		console.log('sv.getHealth(): ', petID);
		var id = {
			id: petID
		}
		return $http.post('/pets', id).then(function(response) {
			console.log(response);
			return response.data;
		})
	}
	// END getHealth


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
