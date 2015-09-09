# Weather App

This is a team project from Nashville Software School the utilizes the open weather map API to provide the current weather conditions and a 3 or 5 day forcast. 

##Running the Application

Clone the repo

    mkdir ~/projects && cd ~/projects
    git clone https://github.com/lynnsamuelson/Weather-App.git 

##Serve the application

Go to the application root folder and start the server.

    cd ~/projects/movie-history
    http-server ./ 

##Making your own Firebase Database

To have a database that you can access, go to:

    https://www.firebaseio.com/ and make an account.

Replace the url to the firebase database on line 9 of deleteSave.js, line 16 of save-data.js and line 24 of main.js with the url to your database. 

##Getting your own open weather mape API code:

Go to:

    http://openweathermap.org/
  
and sign-up for your own api key.  Then replace your key on line 11 of get-data.js.  Now you can open your browser and go to http://localhost:8081 (or whichever port it reports it is using).

