let prettyjson = require('prettyjson');
let fs = require('fs');
var config = require('./config');


let request = require('request');

let apiKey = config.apikey;
let city = 'ottawa';
let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`

request(url, function (err, response, body) {
    if (err) {
        console.log('error:', err);
    } else {
        var beautify = require('js-beautify').js_beautify;
        fs.readFile('foo.js', 'utf8', function (err, data) {
            if (err) {
                throw err;
            }
            console.log(beautify(body, {indent_size: 2}));
        });
    }
});
