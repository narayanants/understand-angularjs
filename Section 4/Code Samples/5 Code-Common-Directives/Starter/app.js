var app = angular.module('app',[]);
app.controller('mainController', ['$scope', '$filter','$log', function($scope, $filter,$log) {

    var self = this;
    self.handle = '';

    self.lowercasehandle = function() {
        return $filter('lowercase')(self.handle);
    };

    self.characters = 5;

    self.rules = [

            { rulename: "Must be 5 characters" },
            { rulename: "Must not be used elsewhere" },
            { rulename: "Must be cool" }
    ];

    $log.info(self.rules);

    self.clickMe = function(){
        alert('Clicked!');
    };

    self.name = 'Narayanan';

}]);
