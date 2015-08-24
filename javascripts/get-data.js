define(function(require) {
  return function (zip) {
  	var $ = require("jquery");
  	var Q = require("q");
  	function kelToFah (kelvin) {
  		return Math.round((kelvin * (9/5)) - 459.67);
  	}
  	var deferred = Q.defer();

		$.ajax({
		  url: "http://api.openweathermap.org/data/2.5/weather?zip=" + zip + ",us&APPID=514959dd42853402865197cec43244f4",
		  method: "GET",
		  data: JSON
		}).done(function(data) {
      var weather = [{
        date: new Date(data.dt),
        temp: kelToFah(data.main.temp),
        pressure: data.main.pressure,
        icon: "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png",
        current: data.weather,
        speed: data.wind.speed,
        coord: data.coord.lat + "&lon=" + data.coord.lon
      }];
      console.log(weather);
	    deferred.resolve(weather);
		}); 
		return deferred.promise;
  };
});