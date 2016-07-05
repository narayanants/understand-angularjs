// var myApp = angular.module('myApp', []);

// myApp.controller('mainController', ['$scope', '$filter', '$timeout', function($scope, $filter, $timeout) {
//     var self = this;

//     self.handle = '';
    
//     self.lowercasehandle = function() {
//         return $filter('lowercase')(self.handle);
//     };
    
//     $scope.$watch('handle',function(newValue,oldValue){
//         console.log('Changed!');
//         console.log('Old value' + oldValue);
//         console.log('new value' + newValue);
//     }); 

//     $timeout(function(){
// 		self.handle = 'newtwitterhandle';
// 		console.log('scope Changed!');
//     },3000)
    
// }]);

var app = angular.module('app', []);
app.controller('mainController',['$scope','$filter','$timeout',function($scope,$filter,$timeout){
	var self = this;
	self.handle = '';
	self.lowercasehandle = function(){
		return $filter('lowercase')(self.handle);
	};
	$scope.$watch('handle',function(oldValue,newValue){
		console.log('Changed!');
		console.log('Old value' + oldValue);
        console.log('new value' + newValue);
	});

	setTimeout(function(){
		$scope.$apply(function(){
			self.handle = 'newtwitterhandle';
			console.log('handle changed');
		});
	},3000);
}]);
