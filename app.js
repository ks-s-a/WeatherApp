var Step = require('step');
var packageData = require('./lib/packageData/packageData.js');
var app = require('express')();
var winston = require('winston');

app.get('/', function(req, res) {
    Step(
        function(){
            winston.info('Connection established!');

            packageData('London', this);
        },
        function (err, data) {
            if (err) throw err;

            winston.info('Receive common weather data: ', data);

            res.render('index.jade', {
                appName: 'WeatherApp',
                data: data
            });

            res.end();

            winston.info('Connection closed successfully!');
        }
    );


});

var server = app.listen(2345, function() {
    var host = server.address().address;
    var port = server.address().port;

    winston.info('Start my app at http://%s:%s', host, port);
});