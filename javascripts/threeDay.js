define(function(require) {
  return function (coordinates) {
  	var $ = require("jquery");
  	var Q = require("q");
  	var _ = require("lodash");
  	function kelToFah (kelvin) {
  		return Math.round((kelvin * (9/5)) - 459.67);
  	}
  	var deferred = Q.defer();

		$.ajax({
		  url: "http://api.openweathermap.org/data/2.5/forecast?lat=" + coordinates,
		  method: "GET",
		  data: JSON
		}).done(function(data) {	
			var weather = data.list;
			console.log("weather :", weather);
			for (var i = 0; i < weather.length; i++) {
				weather[i].main.temp = 
				kelToFah(weather[i].main.temp);
			}
	    deferred.resolve(weather);
		}); 
		return deferred.promise;
  };
});