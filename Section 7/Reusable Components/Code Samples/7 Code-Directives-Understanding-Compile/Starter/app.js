var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function ($routeProvider) {
    
    $routeProvider
    
    .when('/', {
        templateUrl: 'pages/main.html',
        controller: 'mainController',
    })
    
    .when('/second', {
        templateUrl: 'pages/second.html',
        controller: 'secondController',
    })
    
    .when('/second/:num', {
        templateUrl: 'pages/second.html',
        controller: 'secondController',
    })
    
});

myApp.controller('mainController', ['$scope', '$log', function($scope, $log) {
    

    $scope.people = [
        {
        name: 'John Doe',
        address: '555 Main St.',
        city: 'New York',
        state: 'NY',
        zip: '11111'
        },
        {
        name: 'Jane Doe',
        address: '333 Second St.',
        city: 'Buffalo',
        state: 'NY',
        zip: '22222'
        },
        {
        name: 'George Doe',
        address: '111 Third St.',
        city: 'Miami',
        state: 'FL',
        zip: '33333'
        }
    ]
    
    $scope.formattedAddress = function(people) {
      
        return people.address + ', ' + people.city + ', ' + people.state + ' ' + people.zip;
        
    };
    
}]);

myApp.controller('secondController', ['$scope', '$log', '$routeParams', function($scope, $log, $routeParams) {
    
    
    
}]);

myApp.directive("searchResult", function() {
   return {
       restrict: 'AECM',
       templateUrl: 'directives/searchresult.html',
       replace: true,
       scope: {
           personObject: "=",
           formattedAddressFunction: "&"
       },
       compile:function(elem,attrs){
            console.log('compiling...');
            //elem.removeAttr('class');
            console.log(elem.html());
            return {

               /* AVOID USING PRE LINK
                pre:function(scope,elements,attrs){
                    console.log('Pre-linking!');
                    console.log(elements);
                     elements.removeAttr('class');

                },*/

                // All post link function should be in that order.

                post:function(scope,elements,attrs){
                    console.log('Post-linking!');
                    console.log(scope);
                    if(scope.personObject.name == 'Jane Doe'){
                        elements.removeAttr('class');    
                    }
                    console.log(elements);

                }
            }
       }
   }
});
