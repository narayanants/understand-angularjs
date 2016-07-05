var myApp = angular.module('myApp', []);

myApp.controller('mainController', ['$scope', function($scope) {
    
    var self = this;

    this.name = 'Narayanan';
    
}]);


myApp.controller('secondController', ['$scope', function($scope) {
    
    var self = this;

    this.name = 'Second';
    
}]);