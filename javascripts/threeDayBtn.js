define(function(require){
	var hbs = require("hbs");
	var threeDay = require("threeDay");
	var $ = require("jquery");
	var populateThreeDay = require("populateThreeDay");

	console.log("hello world");

	var dayCounter = 1;

	$(document).on("click", ".threeDayBtn", function() {
		console.log("click");
		dayCounter += 2;
		var weather = [];
		threeDay(this.id).then(function(data){
			for (var i = 3; i < data.length; i += 8) {
				weather.push(data[i]);
			}
		  populateThreeDay(weather.slice(0,2));
		});
	});

	$(document).on("click", ".sevenDayBtn", function() {
		threeDay(this.id).then(function(data){
			console.log("data :", data.length);	
			var weather = [];
			for (var i = 3; i < data.length; i += 8) {
				weather.push(data[i]);
			}		
			console.log("weather :",weather);
			if (dayCounter === 3) {
				dayCounter += 4;
				populateThreeDay(weather.slice(2,7));
				populateThreeDay(weather);
			};
			if (dayCounter === 1) {	
				dayCounter += 6;
		    populateThreeDay(weather.slice(1,7));
		    populateThreeDay(weather);
			};
		});
	});
});	