requirejs.config({
  baseUrl: './javascripts',
  paths: {
    'jquery': '../lib/bower_components/jquery/dist/jquery.min',
    'hbs': '../lib/bower_components/require-handlebars-plugin/hbs',
    'bootstrap': '../lib/bower_components/bootstrap/dist/js/bootstrap.min',
    'firebase': '../lib/bower_components/firebase/firebase',
    'lodash': '../lib/bower_components/lodash/lodash.min'
  },
  shim: {
    'bootstrap': ['jquery'],
    'firebase': {
      exports: 'Firebase'
    }
  }
});

requirejs(["dependencies", "firebase", "auth"], 
  function(dependencies, firebase, auth) {

  var ref = new Firebase("https://dld-weather.firebaseio.com/");
  var authData = ref.getAuth();

  if (authData === null) {
    ref.authWithOAuthPopup("github", function(error, authData) {
      if (error) {
        console.log("Login Failed!", error);
      } else {
        console.log("Authenticated successfully with payload:", authData);
        auth.setUid(authData.uid);
       // require(["core_list"], function() {});
      }
    });
  } else {
    auth.setUid(authData.uid);
    // require(["core_list"], function() {});
  }
  console.log(authData);
});