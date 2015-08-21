define(function(require) {
  var $ = require("jquery");

  $.ajax({
    url: "http://api.openweathermap.org/data/2.5/weather?zip=37221,us&APPID=514959dd42853402865197cec43244f4",
    method: "GET",
    data: JSON
  }).done(function(data) {
      console.log("weather", data);
  });
 
});

