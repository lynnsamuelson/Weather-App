define(function(require){
  var $ = require('jquery');
  var firebase = require('firebase');
  var forecast = [];

  $(document).on('click', '#saveForecast', function(weather){
    forecast = $(this).parent().text().split('\n');
    console.log(forecast);
    var saveForecast = {
      temp: forecast[3],
      current: forecast[4],
      pressure: forecast[6],
      speed: forecast[7],
      date: forecast[2]
    };
    var fb = new Firebase("https://dld-weather.firebaseio.com/");
    fb.push({saveForecast});
    console.log(saveForecast);
  });
});