const { clear } = require('console');
const request = require('request');

const url = 'http://api.weatherstack.com/current?access_key=1a0f2534f7732b46457fdcb66a6b1881&query=Dallas';

request({url: url}, (err, res) => {
    const data = JSON.parse(res.body);
    console.log(data.current);
})