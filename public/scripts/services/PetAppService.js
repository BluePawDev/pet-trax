myApp.service('PetAppService', function($http) {
	var sv = this;


	// START user registration
	sv.sendRegister = function(newUserCreds) {
		console.log('PetAppService sendRegister()', newUserCreds);
		return $http.post('/register', newUserCreds).then(function(response) {
			console.log('Register attempt response:', response);
		});
	}; // END user registration

	// START user login
	sv.logIn = function(credentials) {
		console.log('In PetAppService logIn()');
		return $http.post('/login', credentials).then(function(response) {
			console.log('Login attempt response:', response);
			if (response.data) {
				$location.path('/home');
				return response.data;
			}
		})
	} // END user login

}); // END PetAppService
