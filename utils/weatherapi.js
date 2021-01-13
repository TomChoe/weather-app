const request = require('request');
const { weather_key } = require('../config');

// weather API

const forecast = (lat, long, service) => {
    const url = `http://api.weatherstack.com/current?access_key=${weather_key}&query=${long},${lat}&units=f`;

    request({url, json: true}, (err, { body }) => {
        if(err) {
            service('Unable to connect to weather API');
        } else if(body.error) {
            service('Unable to find location');
        } else {
            let temp = body.current;
            service(undefined, `It is currently ${temp.temperature} degrees farenheit.  It feels like ${temp.feelslike} degrees farenheit.`)
        }
            
    })

}

module.exports = forecast;