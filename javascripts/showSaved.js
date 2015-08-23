define(function(require){
  var $ = require('jquery');
  var firebase = require('firebase');
  var hbs = require('hbs');

  $(document).on("click", "#showSaved", function(){
    $.getJSON("https://dld-weather.firebaseio.com/.json", function(data){
      require(['hbs!../templates/saved'], function(template) {
        $('.weatherData').html(template(data));
      });
    });
  });
});