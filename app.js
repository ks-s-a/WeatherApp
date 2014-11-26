var http = require('http');
var getWeather = require('./lib/getWeather');
var app = require('express')();

app.get('/', function(req, res) {
    getWeather(function(err, data){
        if (err) throw err;
        res.write(data);
    });
});

var server = app.listen(2345, function() {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Start my app at http://%s:%s', host, port);
});