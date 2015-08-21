requirejs.config({
  baseUrl: "./javascripts",
  paths: {
    "jquery": "../lib/bower_components/jquery/dist/jquery.min",
    "hbs": "../lib/bower_components/require-handlebars-plugin/hbs",
    "lodash": "../lib/bower_components/lodash/lodash.min",
    "bootstrap": "../lib/bower_components/bootstrap/dist/js/bootstrap.min"
  },
  shim: {
    "bootstrap": ["jquery"]  }
});

requirejs(["dependencies", "user-input"], 
  function(dependencies, userInput) {
  console.log("userInput.getZip() :", userInput.getZip());

  var $ = require("jquery");
  var zip = "";

  $("#zip").on('click', function() {
    zip = $('#searchField').val();
    console.log("zip", zip);
      if (zip.length !== 5) {
      console.log("Please enter a 5-digit code.");
     }
  });
});
