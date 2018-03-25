// http://links.mead.io/api-fix

const keys = require('./keys.js');
const request = require('request');
const yargs = require('yargs');

const argv = yargs
    .options({
        a: {
            demand: true,
            alias: 'address',
            describe: 'Address to fetch weather for',
            string: true
        }
    })
    .help()
    .alias('help', 'h')
    .argv;

let encodedAddress = encodeURIComponent(argv.address);

// https://maps.googleapis.com/maps/api/geocode/json?address=3000%20avenida%20paulista%20s%C3%A3o%20paulo

request({
    url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}&key=${keys.google_maps}`,
    json: true
}, (error, response, body) => {
    if (error) {
        console.log('Unable to connect to Google servers.', error);
    } else if (body.status === 'ZERO_RESULTS') {
        console.log('Unable to finde that address.');
    } else if (body.status === 'OK') {
        console.log(`Address: ${body.results[ 0 ].formatted_address}`);
        console.log(`Latitude: ${body.results[ 0 ].geometry.location.lat}`);
        console.log(`Longitude: ${body.results[ 0 ].geometry.location.lng}`);
    }
});

