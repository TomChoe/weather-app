const request = require('request');
const { weather_key, mapbox_key } = require('./config');

const weatherURL = `http://api.weatherstack.com/current?access_key=${weather_key}&query=Dallas%Tx&units=f`;
const geoURL = `https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=${mapbox_key}&limit=1`

// weatherstack API
// request({url: weatherURL, json: true}, (err, res) => {
//     let temp = res.body.current;
//     console.log(`It is currently ${temp.temperature} degrees farenheit.  It feels like ${temp.feelslike} degrees farenheit.`)
// })

//Geocoding service
request({url: geoURL, json: true}, (err, res) => {
    let geo = res.body.features[0];
    console.log(`${geo.place_name} LAT: ${geo.center[1]} LONG: ${geo.center[0]}`)
})