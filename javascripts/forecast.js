define(function(require) {
  var $ = require("jquery");

  $(document).on("click", "button[id^='threeDay#']", function() {
      console.log("click");

    $.ajax({
      url: "http://api.openweathermap.org/data/2.5/weather?zip=" + zip + ",us&APPID=514959dd42853402865197cec43244f4",
      method: "GET",
      data: JSON
    }).done(function(data) {
       
      var weather = [{
        temp: data.main.temp,
        pressure: data.main.pressure,
        current: data.weather,
        speed: data.wind.speed,
        coordLat: data.coord.lat,
        coordLon: data.coord.lon
      }];

       var lon = data.coord.lon;
       var lat = data.coord.lat;
       console.log("lon", lon);
       console.log("lat", lat);
         
        
      //console.log("weather", weather);

        $.ajax({
              url: "http://api.openweathermap.org/data/2.5/forecast/daily?lat=" + lat + "&lon=" + lon + "&cnt=7&APPID=514959dd42853402865197cec43244f4",
              method: "GET",
              data: JSON
            }).done(function(data) {
              console.log("forcast", data);
            });
         

         require(['hbs!../templates/forecast'], function(template) {
            $('.weatherData').html(template(weather));
         });
     });
  });



     
  
});
