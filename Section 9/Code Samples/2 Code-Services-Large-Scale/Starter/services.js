// SERVICES
weatherApp.service('cityService', function() {
   
    this.city = "New York, NY";
    
});

weatherApp.service('weatherService',['$resource',function($resource){

	this.getWeather = function(city,days){

		var weatherAPI  = $resource('http://api.openweathermap.org/data/2.5/forecast/daily?q=London&cnt=2&appid=235c775da3018ddaffe15b78582b9c9d',{callback:'JSON_CALLBACK'},{ get:{method:'JSONP'}});
    
	   	return weatherAPI.get({ q: city, cnt: days });	
	};
	
}]);