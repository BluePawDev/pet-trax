// AngularJS
var myApp = angular.module('myApp');


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


// START UserController
myApp.controller('UserController', function($location) {
	var vm = this;

	vm.editPet = function() {
		console.log('editPet clicked');
	}

	vm.editVet = function() {
		console.log('editVet clicked');
	}

	vm.saveVet = function() {
		console.log('saveVet clicked');
	}

}); // END UserController
