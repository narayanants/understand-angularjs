var myApp = angular.module('myApp', []);

myApp.controller('mainController', ['$scope', '$filter', function($scope, $filter) {
    
    var self = this;
    self.handle = '';
    
    self.lowercasehandle = function() {
        return $filter('lowercase')(self.handle);
    };
    
    self.characters = 5;

    var rules = new XMLHttpRequest();

    rules.onreadystatechange = function(){
        $scope.$apply(function(){
            if(rules.readyState == 4 && rules.status == 200){
                self.rules = JSON.parse(rules.responseText);
            }
        });
    }

    rules.open('GET','http://localhost:3000',true);
    rules.send();
}]);
