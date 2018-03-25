# Weather APP
Tecnologies: NodeJS

Required API: Google Geocoding 

Before start go to https://console.developers.google.com<br>
and create a project, enable Google Maps Geocoding API, <br>
then in your cloned folder create the file **keys.js** and put your API credentials.



> keys.js

    module.exports = {
        google_maps: 'your api key here'
    };

to run

    $ node app.js -h
