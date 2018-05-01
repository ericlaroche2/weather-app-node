const express = require('express')
const app = express()
const bodyParser = require('body-parser');
const config = require('./config');
const request = require('request');

let apiKey = config.apikey;

app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs')
app.use(express.static('public'));

app.listen(3002, function (err, response, body) {
    if (err){console.log('anerror')}
    console.log('Example app listening on port 3002!')
})

app.get('/', function (req, res) {
    res.render('index', {weather: null, error: null});
})

app.post('/', function (req, res) {
    let city = req.body.city;
    let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`

    request(url, function (err, response, body) {
        if(err){
            res.render('index', {weather: null, error: 'Error, please try again'});
        } else {
            let weather = JSON.parse(body)
            if(weather.main == undefined){
                res.render('index', {weather: null, error: 'Error, please try again, enter a valid city'});
            } else {
                let weatherText = `It's ${weather.main.temp} degrees in ${weather.name}!`;
                res.render('index', {weather: weatherText, error: null});
            }
        }
    });
})

