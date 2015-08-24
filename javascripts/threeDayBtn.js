define(function(require){
	var hbs = require("hbs");
	var threeDay = require("threeDay");
	var $ = require("jquery");
	var populateThreeDay = require("populateThreeDay");

	var dayCounter = 1;

	$(document).on("click", ".threeDayBtn", function() {
		dayCounter += 2;
		threeDay(this.id).then(function(data){
		  populateThreeDay(data.slice(1,3));
		});
	});

	$(document).on("click", ".sevenDayBtn", function() {
		threeDay(this.id).then(function(data){
			if (dayCounter === 3) {
				dayCounter += 4;
				populateThreeDay(data.slice(3,7));
			}
			if (dayCounter === 1) {	
				dayCounter += 6;
		    populateThreeDay(data.slice(1,7));
			}
		});
	});

});	