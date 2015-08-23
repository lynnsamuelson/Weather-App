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
		threeDay(this.id).then(function(data){
		  populateThreeDay(data.slice(1,3));
		});
	});

	$(document).on("click", ".sevenDayBtn", function() {
		console.log("click");
		threeDay(this.id).then(function(data){
			if (dayCounter === 3) {
				dayCounter += 4;
				populateThreeDay(data.slice(3,7));
			};
			if (dayCounter === 1) {	
				dayCounter += 6;
		    populateThreeDay(data.slice(1,7));
			};
		});
	});

});	