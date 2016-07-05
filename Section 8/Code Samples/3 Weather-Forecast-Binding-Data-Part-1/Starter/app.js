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
	.when('/forecast/:days',{
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

weatherApp.controller('homeController',['$scope','$resource','cityService',function($scope,$resource,cityService){

	$scope.city = cityService.city;
	

	$scope.$watch('city',function(){
		cityService.city = $scope.city;
	});

}]);

weatherApp.controller('forecastController',['$scope','$resource','$routeParams','cityService',function($scope,$resource,$routeParams,cityService){

	$scope.city = cityService.city;

	$scope.days = $routeParams.days;

	$scope.weatherAPI  = $resource('http://api.openweathermap.org/data/2.5/forecast/daily?q=London&cnt=2&appid=235c775da3018ddaffe15b78582b9c9d',{callback:'JSON_CALLBACK'},{ get:{method:'JSONP'}});

	$scope.weatherResult = $scope.weatherAPI.get({q:$scope.city, cnt:$scope.days});
	console.log($scope.weatherResult);

	$scope.convertToFahrenheit = function(degK) {
		return Math.round((1.8 * (degK - 273)) + 32);
	}

	$scope.convertToDate = function(dt){
		return new Date(dt * 1000);
	}

}]);