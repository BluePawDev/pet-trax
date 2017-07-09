myApp.service('PetAppService', function($http, $location) {
	var sv = this;


	// START user registration
	sv.sendRegister = function(newUserCreds) {
		return $http.post('/register', newUserCreds).then(function(response) {
			console.log(response.data);
			if (response.data === 'Created') {
				console.log('YAY!'); // REPLACE WITH sweet-alert
				$location.path('/');
			}
		});
	}; // END user registration

	// START user login
	sv.logIn = function(credentials) {
		console.log('In PetAppService logIn()', credentials);
		return $http.post('/login', credentials).then(function(response) {
			console.log('Login attempt response:', response);
			if (response.status === 200) {
				$location.path('/home');
				console.log('Svc:', response);
				res.send(response);
			} else if (response.status === 401) {
				$location.path('/login');
				alert('wrong pw');
			} else {
				$location.path('/login');
				console.log('Wrong pw');
			}
		})
	} // END user login

	sv.addNewPet = function(newPetInfo) {
		console.log('in PetAppService addNewPet()', newPetInfo);
		return $http.post('/newPet', newPetInfo).then(function(response) {
			console.log(response);
		})
	}

}); // END PetAppService
