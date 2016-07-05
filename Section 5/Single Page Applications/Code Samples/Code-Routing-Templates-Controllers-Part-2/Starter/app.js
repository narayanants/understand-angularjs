var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function ($routeProvider) {
    
    $routeProvider 
    .when('/', {
        templateUrl: 'pages/main.html',
        controller: 'mainController',
        controllerAs:'main'
    })
    
    .when('/second/:num', {
        templateUrl: 'pages/second.html',
        controller: 'secondController',
        controllerAs:'second'
    })
    
});

myApp.controller('mainController', ['$scope', '$log', '$routeParams',function($scope, $log,$routeParams) {
    
    var self = this;

    self.name = 'Main';
    
}]);

myApp.controller('secondController', ['$scope', '$log', '$routeParams', function($scope, $log,$routeParams) {
    var self = this;
    self.num = $routeParams.num || 1;
    
}]);
