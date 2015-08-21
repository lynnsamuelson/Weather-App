define(function(require) {
  var $ = require("jquery");
  
  $("#zip").on('click', function() {
    zip = $('#searchField').val();
    console.log("zip", zip);
    if (zip.length !== 5) {
      console.log("Please enter a 5-digit code.");
    } else {
		  console.log("argument :", zip);
		  $.ajax({
		    url: "http://api.openweathermap.org/data/2.5/weather?zip=" + zip + ",us&APPID=514959dd42853402865197cec43244f4",
		    method: "GET",
		    data: JSON
		  }).done(function(data) {
		      console.log("weather", data);
		  });
    }
  });  
});

