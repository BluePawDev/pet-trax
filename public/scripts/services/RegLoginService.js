myApp.service('RegLoginService', function($http, $location) {
	var sv = this;

	sv.navHide;

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
	// sv.logIn = function(credentials) {
	// 	return $http.post('/login', credentials).then(function(response) {
	// 		sv.userFirst = response.data[0].txtfirstname;
	// 		sv.userLast = response.data[0].txtlastname;
	// 		sv.userEmail = response.data[0].hypemail;
	// 		sv.userCreds = {
	// 			first: sv.userFirst,
	// 			last: sv.userLast,
	// 			email: sv.userEmail
	// 		}
	// 		if (response.status === 200) {
	// 			$location.path('/user');
	// 			console.log('38', response.status);
	// 			return sv.userCreds;
	// 		} else if (response.status == 401) {
	// 			console.log('40', response.status);
	// 			swal({
	// 				title: 'HIGH FIVE!',
	// 				text: "SWEET! You've successfully registered--now go login!",
	// 				imageUrl: './images/reg-success.jpg',
	// 				imageWidth: 300,
	// 				imageHeight: 300,
	// 				animation: false,
	// 				customClass: 'animated tada'
	// 			})
	// 			alert('wrong pw'); // REPLACE WITH SWEETALERT
	// 			$location.path('/login');
	// 		} else {
	// 			$location.path('/login');
	// 			console.log('Wrong pw'); // REPLACE WITH SWEETALERT
	// 		}
	// 	})
	// } // END user login

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
			if (response.status !== 200) {
				swal({
					title: 'OOPS!',
					text: "Booo!",
					imageUrl: './images/reg-success.jpg',
					imageWidth: 300,
					imageHeight: 300,
					animation: false,
					customClass: 'animated tada'
				})
				$location.path('/login');
			} else if (response.status === 200) {
				$location.path('/user');
				return sv.userCreds;
			}
			// alert('wrong pw'); // REPLACE WITH SWEETALERT
			// $location.path('/login');
			else {
				$location.path('/login');
				console.log('Wrong pw'); // REPLACE WITH SWEETALERT
			}
		})
	}
	// END user login


}); // END RegLoginService
