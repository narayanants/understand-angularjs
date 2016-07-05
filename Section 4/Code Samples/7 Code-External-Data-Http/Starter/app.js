var myApp = angular.module('myApp', []);

myApp.controller('mainController', ['$scope', '$filter', '$http', function ($scope, $filter,$http) {

    var self = this;
    self.handle = '';

    self.lowercasehandle = function () {
        return $filter('lowercase')(self.handle);
    };

    self.characters = 5;

    $http.get('/api')
    .success(function(result){
        self.rules = result;
    })  
    .error(function(data,status){
        console.log(data);
    });

    self.newRule = '';
    self.addRule = funciton(){
        $http.post('/api', {newRule:self.newRule})
        .success(function(result){
            self.rules = result;
            self.newRule = '';
        })
        .error(function(data,status){
            console.log(data);
        });
    };


}]);