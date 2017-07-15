// START NavController
myApp.controller('NavController', function(RegLoginService, $location, $route) {
	var vm = this;

	vm.userEmail = localStorage.getItem('email:');
	vm.userFirst = localStorage.getItem('first:');
	vm.userLast = localStorage.getItem('last:');


	vm.reload = function() {
		$route.reload();
	}

	vm.setLocStorage = function() {
		localStorage.setItem('email:', '');
		localStorage.setItem('first:', '');
		localStorage.setItem('last:', '');
		vm.userEmail = '';
		vm.userFirst = '';
		vm.userLast = '';

		vm.locStorageEval();
		vm.reload();
	}

	vm.locStorageEval = function() {
		if (vm.userEmail == undefined || vm.userEmail == null || vm.userEmail == '') {
			vm.navHide = true;
			console.log('29', vm.navHide);
			vm.reload();
		} else {
			vm.navHide = false;
			console.log('32', vm.navHide);
			vm.reload();
		}
	}

}); // END NavController
