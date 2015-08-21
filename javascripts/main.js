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

requirejs(["dependencies", "get-data", "user-input"], 
  function(dependencies, getData, user) {
    


});