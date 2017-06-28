myApp.service('PetAppService', function($http) {
	var sv = this;

	sv.getUser = function() {
		console.log('In PetAppService getUser()');
	}; // END getUser function

	sv.sendRegister = function(newUserCredentials) {
		console.log('In PetAppService sendRegister()');
		return $http.post('/', newUserCredentials).then(function(response) {
			console.log('Back from register attempt', response);
		});
	}; // END registerUser function

}); // END PetAppService
