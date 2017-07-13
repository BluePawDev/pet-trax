// START NavController
myApp.controller('NavController', function(RegLoginService, $location) {
	var vm = this;

	vm.userFirst = RegLoginService.userFirst;
	vm.userLast = RegLoginService.userLast;
	vm.userEmail = RegLoginService.userEmail;
	vm.navHide = RegLoginService.navHide;

}); // END NavController
