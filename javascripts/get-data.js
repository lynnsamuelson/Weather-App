define(function(require) {
  var $ = require("jquery");

  //$.getJSON("https://api.openweathermap.org/data/2.5/weather?zip=94040,us&APPID=514959dd42853402865197cec43244f4", function(data) {
  $.ajax({
    url: "http://api.openweathermap.org/data/2.5/weather?zip=37221,us&APPID=514959dd42853402865197cec43244f4",
    method: "GET",
    data: JSON
    }).done(function(data) {
      console.log("weather", data);
    });
 



     //$('#postWeatherTest').html("");
  });

