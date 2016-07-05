var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function ($routeProvider) {
    
    $routeProvider
    
    .when('/', {
        templateUrl: 'pages/main.html',
        controller: 'mainController',
        controllerAs:'main'
    })
    
    .when('/second', {
        templateUrl: 'pages/second.html',
        controller: 'secondController',
        controllerAs:'second'
    })
    
    .when('/second/:num', {
        templateUrl: 'pages/second.html',
        controller: 'secondController',
        controllerAs:'second'
    })
    
});

myApp.service('nameService',function(){

    var self = this;

    self.name = 'Narayanan Ts' ;

    self.namelength = function(){
        return self.name.length;
    }
});

myApp.controller('mainController', ['$scope', '$log','nameService', function($scope, $log,nameService) {

    var self = this;

    self.name = nameService.name;

    $scope.$watch('name', function() {
        nameService.name = self.name;
    });

    $log.main = ' Property from main';



    
    
}]);

myApp.controller('secondController', ['$scope', '$log', '$routeParams', 'nameService', function($scope, $log, $routeParams,nameService) {

    var self = this;

    self.name = nameService.name;
    self.num = $routeParams.num || 1;

    $scope.$watch('name', function() {
        nameService.name = self.name;
    });

    

    $log.second = "Property from second";

    
}]);
