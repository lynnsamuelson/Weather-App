define(function(require){
	var $ = require("jquery");
  var getData = require('get-data');
  var populate = require('populate');
  var Q = require("q");

	$("#zip").on('click', function() {
		launchEvent();
	});	

	$('#searchField').keypress(function(e) { 
		if (e.which == 13) { 
			e.preventDefault();
			launchEvent(); 
		} 
	}); 

	function launchEvent () {
	  zip = $('#searchField').val();
	  $('#searchField').val('');
	  console.log("zip", zip);
	  if (zip.length !== 5) {
	    console.log("Please enter a 5-digit code.");
	  } 
	  else {
		  getData(zip).then(function(data){
		  	populate(data);
		  });
		}  
	};	
	
});