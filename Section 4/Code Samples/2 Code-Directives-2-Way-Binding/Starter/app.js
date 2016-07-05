var myApp = angular.module('myApp', []);

myApp.controller('mainController', ['$scope','$log','$filter',function($scope,$log,$filter) {
    
    var self = this;

    self.handle = "";
    self.lowercasehandle = function(){
    	return $filter('uppercase')(self.handle); 
    }
}]);
