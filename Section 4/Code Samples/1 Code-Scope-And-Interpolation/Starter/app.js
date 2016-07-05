var myApp = angular.module('myApp', []);

myApp.controller('mainController', ['$scope', '$timeout', function($scope,$timeout) {

    var self = this;
    self.name = 'Tony';
    
    $timeout(function() {
        
        self.name = 'Everybody';
        
    },3000);
    
}]);
