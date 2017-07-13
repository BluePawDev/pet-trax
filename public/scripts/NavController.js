// START NavController
myApp.controller('NavController', function(RegLoginService, $location) {
	var vm = this;

	vm.userFirst = RegLoginService.userFirst;
	vm.userLast = RegLoginService.userLast;
	vm.userEmail = RegLoginService.userEmail;
	vm.navHide;
	// console.log(window.location.href);

	// vm.navHideEval = function() {
	// 	if (window.location.href == http: //localhost:3000/#!/) {
	// 		vm.navHide = true;
	// 	}
	// 	else {
	// 		vm.navHide = false;
	// 	}
	// }





}); // END NavController
