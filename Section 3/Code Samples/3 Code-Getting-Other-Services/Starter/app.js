var myApp = angular.module('myApp', ['ngMessages']);

myApp.controller('mainController', function($scope,$log,$filter,$resource) {
	// $log.log('Hello');
	// $log.info('This is an info');
	// $log.warn('This is a warning');
	// $log.debug('This is a debug message');
	// $log.error('this is an error');

	// $scope.name = "john";
	// $scope.formattedName = $filter('uppercase')($scope.name);
	// $log.info($scope.name);
	// $log.info($scope.formattedName);
	$log.log($resource);
});