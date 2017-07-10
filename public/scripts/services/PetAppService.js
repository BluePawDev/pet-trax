myApp.service('PetAppService', function($http, $location) {
	var sv = this;

	// START user registration
	sv.sendRegister = function(newUserCreds) {
		return $http.post('/register', newUserCreds).then(function(response) {
			console.log(response.data);
			if (response.data === 'Created') {
				swal({
					title: 'HIGH FIVE!',
					text: "SWEET! You've successfully registered--now go login!",
					imageUrl: './images/reg-success.jpg',
					imageWidth: 300,
					imageHeight: 300,
					animation: false,
					customClass: 'animated tada'
				})
				$location.path('/');
			}
		});
	}; // END user registration

	// START user login
	sv.logIn = function(credentials) {
		return $http.post('/login', credentials).then(function(response) {
			sv.userFirst = response.data[0].txtfirstname;
			sv.userLast = response.data[0].txtlastname;
			sv.userEmail = response.data[0].hypemail;
			sv.userCreds = {
				first: sv.userFirst,
				last: sv.userLast,
				email: sv.userEmail
			}
			if (response.status === 200) {
				$location.path('/home');
				return sv.userCreds;
			} else if (response.status === 401) {
				$location.path('/login');
				alert('wrong pw'); // REPLACE WITH SWEETALERT
			} else {
				$location.path('/login');
				console.log('Wrong pw'); // REPLACE WITH SWEETALERT
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
