define(function(require){
  var $ = require('jquery');
  var firebase = require("firebase");

  var dataKey;
   $(document).on('click', '#deleteSave', function(){
      dataKey = $("#deleteSave").parent().parent().attr("data-key");
      console.log(dataKey);

      var fb = new Firebase("https://dld-weather.firebaseio.com/" + dataKey);
      fb.remove();
      $("#deleteSave").parent().parent().remove();
   });
});