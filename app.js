var Step = require('step');
var packageData = require('./lib/packageData/packageData.js');
var app = require('express')();

app.get('/', function(req, res) {
    Step(
        function(){
            packageData(this);
        },
        function (err, data) {
            if (err) throw err;
            res.render('layout.jade', {appName: 'WeatherApp', data: data});
        }
    );
});

var server = app.listen(2345, function() {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Start my app at http://%s:%s', host, port);
});