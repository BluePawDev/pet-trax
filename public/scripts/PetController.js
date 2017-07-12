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


// START PetController
myApp.controller('PetController', function($location) {
	var vm = this;

	// START addNewPet
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
	// END addNewPet

	vm.editPet = function() {
		console.log('editPet clicked');
	}

}); // END PetController
