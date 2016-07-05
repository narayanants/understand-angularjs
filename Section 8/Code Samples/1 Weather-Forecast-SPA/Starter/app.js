//MODULE
var weatherApp = angular.module('weatherApp',['ngRoute','ngResource']);
weatherApp.config(function($routeProvider){

	$routeProvider.when('/',{
		templateUrl:'pages/home.html',
		controller:'homeController',
		controllerAs:'home'
	})
	.when('/forecast',{
		templateUrl:'pages/forecast.html',
		controller:'forecastController',
		controllerAs:'forecast'
	})

});

//CONTROLLERS

weatherApp.controller('homeController',['$scope',function($scope){

}]);

weatherApp.controller('forecastController',['$scope',function($scope){
	
}]);