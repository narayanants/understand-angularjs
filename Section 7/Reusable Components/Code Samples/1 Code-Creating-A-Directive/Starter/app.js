var myApp = angular.module('myApp',['ngRoute']);
myApp.config(function($routeProvider){

    $routeProvider.when('/',{
        templateUrl:'pages/main.html',
        controller:'mainController',
        controllerAs:'main'
    })
    .when('/second',{
        templateUrl:'pages/second.html',
        controller:'secondController',
        controllerAs:'second'
    })
    .when('/second/:num',{
        templateUrl:'pages/second.html',
        controller:'secondController',
        controllerAs:'second'
    })
});

myApp.controller('mainController',['$scope','$log',function($scope,$log){

    var self = this;
    self.person = {

        name:'Narayanan Ts',
        address:'555 main st NY 1111'
    };

}]);

myApp.controller('secondController',['$scope','$routeParams','$log',function($scope,$log,$routeParams){


}]);

myApp.directive('searchResult',function(){

    return {

        restrict:'EA',
        scope:{},
        template: '<a href="#" class="list-group-item"><h4 class="list-group-item-heading">Doe,John</h4><p class="list-group-item-text"> 111 Main St  NY 11111</p></a>',
        replace:true // by default its false
    }
});