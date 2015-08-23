define(function(require){
  var $ = require('jquery');
  var firebase = require('firebase');
  var forecast = [];

  $(document).on('click', '#saveForecast', function(weather){
    forecast = $(this).parent().text().split('\n');
    // forecast = forecast.replace('\t', '');
    var saveForecast = {
      temp: forecast[2],
      current: forecast[3],
      pressure: forecast[5],
      speed: forecast[6],
      date: forecast[7]
    };
    var fb = new Firebase("https://dld-weather.firebaseio.com/");
    fb.push({saveForecast});
    console.log(saveForecast);
  });
});