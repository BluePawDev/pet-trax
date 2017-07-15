// START PetController
myApp.controller('PetHealthController', function(PetHealthService, RegLoginService, $location, $route) {

	var vm = this;

	vm.userEmail = localStorage.getItem('email:');
	vm.userFirst = localStorage.getItem('first:');
	vm.userLast = localStorage.getItem('last:');
	var email = vm.userEmail;

	vm.petEdit = true;

	vm.reload = function() {
		$route.reload();
	}

	// START getHealth
	vm.getHealth = function(petID) {
		console.log('in getHealth()', petID);
		PetService.getHealth(id).then(function(healthInfo) {
			console.log(healthInfo);
		})
	}
	// END getHealth


}); // END PetController
