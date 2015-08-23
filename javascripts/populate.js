define(function(require){
	var $ = require("jquery");
	var hbs = require("hbs");

	return function (weather) {
		require(['hbs!../templates/weather'], function(template) {
			$('.weatherData').html(template(weather));
		});	
	}
});