const request = require('request');
const { mapbox_key } = require('../config');

// Geocode API

const geoCode = (address, service) => {
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(address)}.json?access_token=${mapbox_key}&limit=1`

    request({url, json: true}, (err, {body}) => {
        if(err) {
            service(`Unable to connect to service ${err}`)
        } else if(body.features === undefined) {
            service(`Unable to find location: ${body.message}`)
        } else {
            let geo = body.features[0];
            service(undefined, {
                latitude: geo.center[1],
                longitutde: geo.center[0],
                location: geo.place_name
            })
        }
    })
}

module.exports = geoCode;