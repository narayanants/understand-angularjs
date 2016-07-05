//MODULE
var weatherApp = angular.module('weatherApp',['ngRoute','ngResource']);
weatherApp.config(function($routeProvider){

	$routeProvider.when('/',{
		templateUrl:'pages/home.htm',
		controller:'homeController',
		controllerAs:'home'
	})
	.when('/forecast',{
		templateUrl:'pages/forecast.htm',
		controller:'forecastController',
		controllerAs:'forecast'
	})

});

// SERVICES
weatherApp.service('cityService', function() {
   
    this.city = "New York, NY";
    
});
	

//CONTROLLERS

weatherApp.controller('homeController',['$scope','cityService',function($scope,cityService){

	$scope.city = cityService.city;

	$scope.$watch('city',function(){
		cityService.city = $scope.city;
	});

}]);

weatherApp.controller('forecastController',['$scope','cityService',function($scope,cityService){
	$scope.city = cityService.city;

}]);