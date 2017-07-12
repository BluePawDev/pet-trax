// AngularJS
var myApp = angular.module('myApp', ['ngRoute']);


myApp.config(function($routeProvider) {
	$routeProvider.when('/', {
		templateUrl: 'views/partials/login.html'
	}).when('/register', {
		templateUrl: 'views/partials/register.html'
	}).when('/home', {
		templateUrl: 'views/partials/home.html'
	}).when('/petdata', {
		templateUrl: 'views/partials/petdata.html'
	});
});


// START myApp Controller
myApp.controller('PetAppController', function(PetAppService, $location) {
	var vm = this;

	// START registerUser
	vm.registerUser = function() {
		// START define newUser obj
		var newUser = {
			firstName: vm.txtFirstName,
			lastName: vm.txtLastName,
			email: vm.hypEmail,
			password: vm.txtPassword
		}; // END define newUser obj
		PetAppService.sendRegister(newUser).then(function() {
			// CLEAR INPUTS
			// vm.txtFirstName = '';...
		});
	}; // END registerUser obj

	// START logIn user
	vm.logIn = function() {
		// START define logIn user obj
		var logInUser = {
			username: vm.hypEmail,
			password: vm.txtPassword
		}; // END define logIn user obj
		PetAppService.logIn(logInUser).then(function(res) {
			vm.userFirst = res.first;
			vm.userLast = res.last;
			vm.userEmail = res.email;
			// ADD CLEAR INPUTS ON SUCCESS
		});
	};

	vm.editOwner = function() {
		console.log('editOwner clicked');
	}

	vm.addNewPet = function() {
		var newPet = {
			petName: vm.txtPetName,
			petType: vm.selPetType,
			petBreed: vm.txtPetBreed,
			petColor: vm.txtPetColor,
			petMarking: vm.txtPetMarking,
			petSex: vm.selPetSex,
			petDOB: vm.dtmPetDOB,
			petOwner: vm.userEmail
		}
		PetAppService.addNewPet(newPet);
	}

	vm.editPet = function() {
		console.log('editPet clicked');
	}

	vm.editVet = function() {
		console.log('editVet clicked');
	}

	vm.saveVet = function() {
		console.log('saveVet clicked');
	}

	vm.saveAppt = function() {
		console.log('saveAppt clicked');
		var newAppt = {
			apptDate: vm.dtmApptDate,
			apptPurp: vm.txtApptPurp,
			apptWt: vm.intApptWt,
			apptMeds: vm.txtApptMeds,
			apptCost: vm.curApptCost,
			apptNotes: vm.txtApptNotes,
		}
		PetAppService.addNewHistory(newAppt);
	}

}); // END myApp Controller
