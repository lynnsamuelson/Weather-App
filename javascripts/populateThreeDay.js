define(function(require){
	var $ = require("jquery");
	var hbs = require("hbs");

	return function (weather) {
		require(['hbs!../templates/threeDayHbs'], function(template) {
			$('.weatherData').append(template(weather));
		});	
	};
});