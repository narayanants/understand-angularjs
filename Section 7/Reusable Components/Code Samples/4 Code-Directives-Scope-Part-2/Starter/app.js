var myApp = angular.module('myApp', ['ngRoute']);

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
          address:'555 main st NY 11111'
  }

}]);  

myApp.controller('secondController',['$scope','$log','$routeParams',function($scope,$log,$routeParams){

}]);

myApp.directive('searchResult',function(){
  return {
    restrict:'EA',
    templateUrl:'directives/searchresult.html',
    replace:true,
    scope:{
      personName:'@',
      personObject:'='
    }
  }
});