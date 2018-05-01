// let prettyjson = require('prettyjson');
// let fs = require('fs');
var config = require('./config');
const argv = require('yargs').argv;
let city = argv.c || 'ottawa';


let request = require('request');
let apiKey = config.apikey;
let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`

request(url, function (err, response, body) {
    if (err) {
        console.log('error:', err);
    } else {
        var beautify = require('js-beautify').js_beautify;
        console.log(beautify(body, {indent_size: 2}));
        let weather = JSON.parse(body)
        let message = `It's ${weather.main.temp} degrees Celcius in ${weather.name}!`;
        console.log(message);
    }
});




