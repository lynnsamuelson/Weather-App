define(function(require) {
  return function (coordinates) {
  	var $ = require("jquery");
  	var Q = require("q");
  	var _ = require("lodash");
  	function kelToFah (kelvin) {
  		return Math.round((kelvin * (9/5)) - 459.67);
  	}

  function timeConverter(unix){
    var a = new Date(unix * 1000);
    var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    var year = a.getFullYear();
    var month = months[a.getMonth()];
    var date = a.getDate();
    var hour = a.getHours();
    var min = a.getMinutes();
    var sec = a.getSeconds();
    var time = date + ' ' + month + ' ' + year;
    return time;
  }
  	var deferred = Q.defer();

		$.ajax({
		  url: "http://api.openweathermap.org/data/2.5/forecast/daily?lat=" + coordinates + "&cnt=07",
		  method: "GET",
		  data: JSON
		}).done(function(data) {	
			var weather = data.list;
			console.log("weather :", weather);
			for (var i = 0; i < weather.length; i++) {
				weather[i].temp.day = 
				kelToFah(weather[i].temp.day);
        weather[i].dt = 
        timeConverter(weather[i].dt);
			}
	    deferred.resolve(weather);
		}); 
		return deferred.promise;
  };
});