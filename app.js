const geoCode = require('./utils/geocode');
const forecast = require('./utils/weatherapi');

// Weather app using command line argument

const locale = process.argv.slice(2)[0];

if(!locale) {
    return console.log('Please enter a location');
} else {
    geoCode(locale, (err, {latitude, longitude, location}) => {
        if(err) {
            return console.log('Geocode error: ', err);             //error handling
        } 
    
        forecast(latitude, longitude, (error, weatherData) => {
            if(error) {
                return console.log('Forecase error: ', error);         //error handling
            }
            
            console.log('Location: ', location);
            console.log('Forecast: ', weatherData);
        })
    })
}