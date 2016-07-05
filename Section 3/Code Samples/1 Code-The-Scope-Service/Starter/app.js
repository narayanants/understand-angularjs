var myApp = angular.module('myApp', []);

myApp.controller('mainController', function($scope) {
	$scope.name = "AngularJS";
	$scope.occupation = 'Coder';

	$scope.getname = function(){
		return 'John Doe';
	}

	$scope.getname();
   	console.log($scope);
});