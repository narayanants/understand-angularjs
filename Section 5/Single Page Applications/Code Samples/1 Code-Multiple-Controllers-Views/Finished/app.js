var myApp = angular.module('myApp', []);

myApp.controller('mainController', ['$scope', function($scope) {
    
    $scope.name = 'Main';
    
}]);

myApp.controller('secondController', ['$scope', function($scope) {
    
    $scope.name = 'Second';
    
}]);
