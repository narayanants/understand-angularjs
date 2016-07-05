var myApp = angular.module('myApp',['ngRoute']);

myApp.config(function($routeProvider){
	$routeProvider
	.when('/',{
		templateUrl:'pages/main.html',
		controller:'mainController',
		controllerAs:'main'
	})

	.when('/second',{
		templateUrl:'pages/second.html',
		controller:'secondController',
		controllerAs:'second'
	});
});

myApp.controller('mainController',['$scope','$log',function($scope,$log){
	var self = this;

	self.name = 'Britney Spears';
}]);

myApp.controller('secondController',['$scope','$log',function($scope,$log){
	var self = this;

	self.name = 'David Guetta';
}]);